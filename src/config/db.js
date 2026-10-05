const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'cinema'
});

pool.getConnection((err, conn) => {
  if (err) {
    console.error('Erro ao conectar no banco:', err.message);
    return;
  }
  console.log('Conectado ao banco de dados');
  conn.release();
});

module.exports = pool;
