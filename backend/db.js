const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Gunakan path absolut ke /app/tb_history.db di Railway
const dbPath = process.env.DB_PATH || path.join(__dirname, 'tb_history.db');
console.log('DB Path:', dbPath);
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Failed to open SQLite DB:', err.message);
  } else {
    console.log('SQLite DB opened successfully');
  }
});


db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      input TEXT,
      result TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;