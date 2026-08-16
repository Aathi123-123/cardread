import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('cards.db');

export function initDb() {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS cards (id INTEGER PRIMARY KEY NOT NULL, json TEXT, imageUri TEXT, type TEXT, createdAt TEXT);`
    );
  });
}

export function saveCard(card) {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      const json = JSON.stringify(card);
      tx.executeSql(
        'INSERT INTO cards (json, imageUri, type, createdAt) values (?, ?, ?, ?);',
        [json, card.imageUri || '', card.type || '', card.createdAt || new Date().toISOString()],
        (_, result) => resolve(result.insertId),
        (_, err) => reject(err)
      );
    });
  });
}

export function getAllCards() {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql('SELECT id, json, imageUri, type, createdAt FROM cards ORDER BY id DESC;', [], (_, { rows }) => {
        const items = [];
        for (let i = 0; i < rows.length; i++) {
          const r = rows.item(i);
          const parsed = JSON.parse(r.json || '{}');
          parsed.id = r.id;
          parsed.imageUri = r.imageUri;
          parsed.type = r.type;
          parsed.createdAt = r.createdAt;
          items.push(parsed);
        }
        resolve(items);
      });
    });
  });
}

export async function findDuplicate(card) {
  // naive duplicate detection by phone or email
  const all = await getAllCards();
  const phone = (card.phone || '').replace(/\D/g, '');
  const email = (card.email || '').toLowerCase();
  return all.find(c => {
    if (c.phone && c.phone.replace(/\D/g, '') && phone && c.phone.replace(/\D/g, '') === phone) return true;
    if (c.email && email && c.email.toLowerCase() === email) return true;
    return false;
  });
}
