const express = require('express');
const routerUsuario = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const authenticateToken = require('../middleware/Middleware');

const usuarioController = new UsuarioController();

routerUsuario.post('/criar', (req, res) => usuarioController.criar(req, res));
routerUsuario.post('/login', (req, res) => usuarioController.login(req, res));
routerUsuario.put('/atualizar-senha', (req, res) => usuarioController.atualizarSenha(req, res));
routerUsuario.put('/atualizar/:id', (req, res) => usuarioController.atualizarDadosDoUsuario(req, res));
routerUsuario.get('/perfil/:id', (req, res) => usuarioController.perfil(req, res));
routerUsuario.delete('/deletar', (req, res) => usuarioController.deletarConta(req, res));

module.exports = routerUsuario;