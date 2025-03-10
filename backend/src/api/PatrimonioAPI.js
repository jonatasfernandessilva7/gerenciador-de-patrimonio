const express = require('express');
const routerPatrimonio = express.Router();
const PatrimonioController = require('../controllers/PatrimonioController');

const patrimonioController = new PatrimonioController();

routerPatrimonio.post("/adicionar-patrimonio", patrimonioController.adicionarPatrimonio);
routerPatrimonio.post("/adicionar-bem",  patrimonioController.adicionarBem);
routerPatrimonio.post("/adicionar-direito",  patrimonioController.adicionarDireito);
routerPatrimonio.post("/adicionar-obrigacao",  patrimonioController.adicionarObrigacao);

routerPatrimonio.put("/atualizar-bem/:id", patrimonioController.atualizarBem);
routerPatrimonio.put("/atualizar-direito/:id",  patrimonioController.atualizarDireito);
routerPatrimonio.put("/atualizar-obrigacao/:id", patrimonioController.atualizarObrigacao);

routerPatrimonio.delete("/deletar-bem/:id", patrimonioController.deletarBem);
routerPatrimonio.delete("/deletar-direito/:id", patrimonioController.deletarDireito);
routerPatrimonio.delete("/deletar-obrigacao/:id",  patrimonioController.deletarObrigacao);

routerPatrimonio.get("/ver-todos-os-patrimonios", patrimonioController.buscarTodosOsPatrimonios);
routerPatrimonio.get("/patrimonios/:userId", patrimonioController.buscarPatrimoniosPorUsuario);


module.exports = routerPatrimonio;