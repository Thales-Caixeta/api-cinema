const express = require('express');
const ctrl = require('../controllers/filmeController');

const router = express.Router();

router.get('/filme', ctrl.listar);
router.get('/filme/:id', ctrl.buscarPorId);
router.post('/filme', ctrl.criar);
router.put('/filme/:id', ctrl.atualizar);
router.delete('/filme/:id', ctrl.remover);

module.exports = router;
