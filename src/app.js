const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const filmeRoutes = require('./routes/filmeRoutes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => res.json({ api: 'API Cinema', recurso: '/filme' }));
app.use('/', filmeRoutes);

app.use((req, res) => res.status(404).json({ erro: 'Rota não encontrada' }));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ erro: err.message || 'Erro interno' });
});

module.exports = app;
