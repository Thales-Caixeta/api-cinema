const db = require('../config/db');

function erro(res, err) {
  console.error(err);
  return res.status(500).json({ erro: 'Erro ao executar operação no banco', detalhe: err.message || err.code });
}

function validar(body) {
  const { titulo, genero, classificacao } = body || {};
  if (!titulo || !genero || !classificacao) {
    return 'Campos obrigatórios: titulo, genero, classificacao';
  }
  return null;
}

exports.listar = (req, res) => {
  db.query('SELECT * FROM filme', (err, rows) => {
    if (err) return erro(res, err);
    res.json(rows);
  });
};

exports.buscarPorId = (req, res) => {
  db.query('SELECT * FROM filme WHERE id = ?', [req.params.id], (err, rows) => {
    if (err) return erro(res, err);
    if (rows.length === 0) return res.status(404).json({ erro: 'Filme não encontrado' });
    res.json(rows[0]);
  });
};

exports.criar = (req, res) => {
  const msg = validar(req.body);
  if (msg) return res.status(400).json({ erro: msg });
  const { titulo, genero, classificacao } = req.body;
  db.query(
    'INSERT INTO filme (titulo, genero, classificacao) VALUES (?, ?, ?)',
    [titulo, genero, classificacao],
    (err, result) => {
      if (err) return erro(res, err);
      res.status(201).json({ id: result.insertId, titulo, genero, classificacao });
    }
  );
};

exports.atualizar = (req, res) => {
  const msg = validar(req.body);
  if (msg) return res.status(400).json({ erro: msg });
  const { titulo, genero, classificacao } = req.body;
  db.query(
    'UPDATE filme SET titulo = ?, genero = ?, classificacao = ? WHERE id = ?',
    [titulo, genero, classificacao, req.params.id],
    (err, result) => {
      if (err) return erro(res, err);
      if (result.affectedRows === 0) return res.status(404).json({ erro: 'Filme não encontrado' });
      res.json({ id: Number(req.params.id), titulo, genero, classificacao });
    }
  );
};

exports.remover = (req, res) => {
  db.query('DELETE FROM filme WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return erro(res, err);
    if (result.affectedRows === 0) return res.status(404).json({ erro: 'Filme não encontrado' });
    res.json({ mensagem: 'Filme removido com sucesso' });
  });
};
