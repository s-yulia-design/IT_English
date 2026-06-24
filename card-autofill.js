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

  async function fetchTranslation(english) {
    try {
      const url = 'https://api.mymemory.translated.net/get?q=' +
        encodeURIComponent(english) + '&langpair=en|ru';
      const res = await fetch(url);
      const data = await res.json();
      const text = data?.responseData?.translatedText;
      if (text && !text.includes('INVALID') && !text.includes('MYMEMORY WARNING')) {
        return text.trim();
      }
    } catch (e) {}
    return english;
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
      return {
        english: trimmed,
        russian,
        meaning,
        example: seed.example || generateExample(trimmed, seed.tags),
        tags: seed.tags || ['IT']
      };
    }

    const russian = override || await fetchTranslation(trimmed);
    const tags = ['IT'];
    return {
      english: trimmed,
      russian,
      meaning: generateMeaning(trimmed, russian),
      example: generateExample(trimmed, tags),
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
