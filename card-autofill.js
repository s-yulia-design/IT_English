// Автозаполнение карточек: перевод, объяснение, пример
(function () {
  const CARD_LOOKUP = new Map();
  if (typeof SEED_CARDS !== 'undefined') {
    SEED_CARDS.forEach(c => CARD_LOOKUP.set(c.english.toLowerCase(), c));
  }

  function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
  }

  function generateExample(english, tags) {
    const key = english.toLowerCase();
    const seed = CARD_LOOKUP.get(key);
    if (seed && seed.example) return seed.example;

    const verbs = ['upload', 'download', 'search', 'filter', 'share', 'copy', 'paste', 'delete',
      'merge', 'commit', 'deploy', 'debug', 'train', 'summarize', 'translate', 'refine',
      'generate', 'regenerate', 'toggle', 'scroll', 'archive', 'sync', 'update', 'upgrade'];
    const first = key.split(' ')[0];
    if (verbs.includes(first) || verbs.includes(key)) return capitalize(english) + '.';
    if (key.startsWith('sign ')) return capitalize(english) + ' to continue.';
    if (key.includes(' ')) return 'Learn how to use ' + english + ' in IT.';
    if (tags && tags.includes('ИИ')) return 'The ' + key + ' is common in AI tools.';
    return 'Open the ' + key + ' in the settings.';
  }

  function generateMeaning(english, russian) {
    const seed = CARD_LOOKUP.get(english.toLowerCase());
    if (seed && seed.meaning) return seed.meaning;
    return 'Слово «' + english + '» в IT и программах означает: ' + russian + '.';
  }

  async function fetchTranslation(text) {
    try {
      const url = 'https://api.mymemory.translated.net/get?q=' +
        encodeURIComponent(text) + '&langpair=en|ru';
      const res = await fetch(url);
      const data = await res.json();
      const translated = data?.responseData?.translatedText;
      if (translated && !translated.includes('INVALID') && !translated.includes('MYMEMORY WARNING')) {
        return translated.trim();
      }
    } catch (e) {}
    return text;
  }

  function generateExampleRu(card, example) {
    if (card.exampleRu) return card.exampleRu;
    const ru = (card.russian || '').split(',')[0].trim();
    if (!example) return '';
    if (/^open /i.test(example)) return `Откройте «${ru}».`;
    if (/^click /i.test(example)) return `Нажмите «${ru}».`;
    if (/^use /i.test(example)) return `Используйте «${ru}».`;
    const m = (card.meaning || '').split(/[.!]/)[0].trim();
    return m ? m + '.' : `Пример: «${ru}».`;
  }

  async function buildCardData(english, russianOverride) {
    const trimmed = english.trim();
    if (!trimmed) return null;

    const key = trimmed.toLowerCase();
    const seed = CARD_LOOKUP.get(key);
    const override = (russianOverride || '').trim();

    if (seed) {
      const russian = override || seed.russian;
      const meaning = (override && override !== seed.russian)
        ? generateMeaning(trimmed, russian)
        : seed.meaning;
      const example = seed.example || generateExample(trimmed, seed.tags);
      return {
        english: trimmed,
        russian,
        meaning,
        example,
        exampleRu: seed.exampleRu || generateExampleRu(seed, example),
        tags: seed.tags || ['IT']
      };
    }

    const russian = override || await fetchTranslation(trimmed);
    const tags = ['IT'];
    const example = generateExample(trimmed, tags);
    const exampleRu = example ? await fetchTranslation(example) : '';
    return {
      english: trimmed,
      russian,
      meaning: generateMeaning(trimmed, russian),
      example,
      exampleRu: exampleRu !== example ? exampleRu : generateExampleRu({ russian, meaning: generateMeaning(trimmed, russian) }, example),
      tags
    };
  }

  window.CardAutofill = {
    lookup: CARD_LOOKUP,
    buildCardData,
    generateExample,
    generateMeaning
  };
})();
