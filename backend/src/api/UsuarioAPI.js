const express = require('express');
const routerUsuario = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const recuperandoSenha = require ("../controllers/recuperarSenhaController");
const authenticateToken = require('../middleware/Middleware');

const usuarioController = new UsuarioController();

routerUsuario.post('/criar',usuarioController.criar);
routerUsuario.post('/auth/login',usuarioController.login);
routerUsuario.post('/esqueceuASenha', recuperandoSenha);
routerUsuario.put('/atualizar-senha',  usuarioController.atualizarSenha);
routerUsuario.put('/atualizar/:id',  usuarioController.atualizarDadosDoUsuario);
routerUsuario.get('/perfil/:id',usuarioController.perfil);
routerUsuario.delete('/deletar', usuarioController.deletarConta);

module.exports = routerUsuario;