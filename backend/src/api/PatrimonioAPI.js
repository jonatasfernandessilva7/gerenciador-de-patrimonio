const express = require('express');
const routerPatrimonio = express.Router();
const PatrimonioController = require('../controllers/PatrimonioController');

const patrimonioController = new PatrimonioController();

routerPatrimonio.post("/adicionar-patrimonio", (req, res) => patrimonioController.adicionarPatrimonio(req, res));
routerPatrimonio.post("/adicionar-bem", (req, res) => patrimonioController.adicionarBem(req, res));
routerPatrimonio.post("/adicionar-direito", (req, res) => patrimonioController.adicionarDireito(req, res));
routerPatrimonio.post("/adicionar-obrigacao", (req, res) => patrimonioController.adicionarObrigacao(req, res));

routerPatrimonio.put("/atualizar-bem/:id", (req, res) => patrimonioController.atualizarBem(req, res));
routerPatrimonio.put("/atualizar-direito/:id", (req, res) => patrimonioController.atualizarDireito(req, res));
routerPatrimonio.put("/atualizar-obrigacao/:id", (req, res) => patrimonioController.atualizarObrigacao(req, res));

routerPatrimonio.delete("/deletar-bem/:id", (req, res) => patrimonioController.deletarBem(req, res));
routerPatrimonio.delete("/deletar-direito/:id", (req, res) => patrimonioController.deletarDireito(req, res));
routerPatrimonio.delete("/deletar-obrigacao/:id", (req, res) => patrimonioController.deletarObrigacao(req, res));

routerPatrimonio.get("/buscar-bens/:patrimonioId", (req, res) => patrimonioController.buscarBensPorPatrimonio(req, res));
routerPatrimonio.get("/buscar-direitos/:patrimonioId", (req, res) => patrimonioController.buscarDireitosPorPatrimonio(req, res));
routerPatrimonio.get("/buscar-obrigacoes/:patrimonioId", (req, res) => patrimonioController.buscarObrigacoesPorPatrimonio(req, res));
routerPatrimonio.get("/ver-todos-os-patrimonios", (req,res) => patrimonioController.buscarTodosOsPatrimonios(req,res));

module.exports = routerPatrimonio;