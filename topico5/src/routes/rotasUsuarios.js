const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('./usuarios', usuarioController.listar);
router.post('./usuarios', usuarioController.criar);

module.exports = router;