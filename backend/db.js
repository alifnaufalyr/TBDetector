const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Use environment variable for DB path or fallback to local path
const dbPath = process.env.DB_PATH || path.join(__dirname, 'tb_history.db');
const db = new sqlite3.Database(dbPath);


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