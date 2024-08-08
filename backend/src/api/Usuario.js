const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const authenticateToken = require('../middleware/Middleware');

const usuarioController = new UsuarioController();

router.post('/criar', (req, res) => usuarioController.criar(req, res));
router.post('/login', (req, res) => usuarioController.login(req, res));
router.put('/atualizar-senha', authenticateToken, (req, res) => usuarioController.atualizarSenha(req, res));
router.put('/atualizar/:id', authenticateToken, (req, res) => usuarioController.atualizarDadosDoUsuario(req, res));
router.get('/perfil/:id', authenticateToken, (req, res) => usuarioController.perfil(req, res));
router.delete('/deletar', authenticateToken, (req, res) => usuarioController.deletarConta(req, res));

module.exports = router;