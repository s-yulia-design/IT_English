const fs = require('fs');

async function translate(text) {
  const url = 'https://api.mymemory.translated.net/get?q=' +
    encodeURIComponent(text) + '&langpair=en|ru';
  const res = await fetch(url);
  const data = await res.json();
  const t = data?.responseData?.translatedText || '';
  if (!t || t.includes('MYMEMORY WARNING') || t.includes('INVALID') || t === text) return null;
  return t.trim();
}

function loadCards() {
  const code = fs.readFileSync('cards-data.js', 'utf8');
  const fn = new Function(code + '; return SEED_CARDS;');
  return fn();
}

async function main() {
  let existing = {};
  if (fs.existsSync('example-translations.json')) {
    existing = JSON.parse(fs.readFileSync('example-translations.json', 'utf8'));
  }

  const cards = loadCards();
  const unique = [...new Set(cards.map(c => (c.example || '').trim()).filter(Boolean))];
  const map = { ...existing };
  let added = 0;

  for (const ex of unique) {
    if (map[ex]) continue;
    const ru = await translate(ex);
    if (ru) {
      map[ex] = ru;
      added++;
      console.log('OK:', ex.slice(0, 50), '->', ru.slice(0, 50));
    } else {
      console.log('SKIP:', ex);
    }
    await new Promise(r => setTimeout(r, 350));
  }

  fs.writeFileSync('example-translations.json', JSON.stringify(map, null, 2), 'utf8');
  console.log('total:', Object.keys(map).length, 'new:', added);
}

main().catch(e => { console.error(e); process.exit(1); });
