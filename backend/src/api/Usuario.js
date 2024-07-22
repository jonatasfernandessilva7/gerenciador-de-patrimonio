const express = require('express');
const router = express.Router();
const Usuario = require('../controllers/UsuarioController');
const recuperandoSenha = require ("../controllers/recuperarSenhaController");
const ajuda = require("../controllers/emailAjudaController");

const usuarioController = new Usuario();

router.get("/usuario/perfil/:id", usuarioController.perfil);
router.post('/esqueceuASenha', recuperandoSenha);
router.post('/usuario/cadastro/login', usuarioController.criar);
router.post('/usuario/login/home', usuarioController.login);
router.post('/usuario/Contato/:id', ajuda);
router.put('/usuario/perfil/:id', usuarioController.atualizarDadosDoUsuario);
router.put('/usuario/recuperacao/inserirNovaSenha', usuarioController.atualizarSenha);
router.del('/usuario/recuperacao/deletarConta/:id', usuarioController.deletarConta);

module.exports = router;