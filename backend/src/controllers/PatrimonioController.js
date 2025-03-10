const PatrimonioService = require('../services/PatrimonioService');
const UsuarioService = require('../services/UserServices');
const patrimonioService = new PatrimonioService();
const usuarioService = new UsuarioService();
const jwt = require('jsonwebtoken');

class PatrimonioController {
    async adicionarPatrimonio(req, res) {
        try {
            const { usuarioId } = req.body;
            const novoPatrimonio = await patrimonioService.adicionarPatrimonio(usuarioId);
            res.status(201).json(novoPatrimonio);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async adicionarBem(req, res) {
        try {
            const { patrimonioId, dados } = req.body;
            const bem = await patrimonioService.adicionarBem(patrimonioId, dados);
            res.status(201).json(bem);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async adicionarDireito(req, res) {
        try {
            const { patrimonioId, dados } = req.body;
            const direito = await patrimonioService.adicionarDireito(patrimonioId, dados);
            res.status(201).json(direito);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async adicionarObrigacao(req, res) {
        try {
            const { patrimonioId, dados } = req.body;
            const obrigacao = await patrimonioService.adicionarObrigacao(patrimonioId, dados);
            res.status(201).json(obrigacao);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async atualizarBem(req, res) {
        try {
            const { id } = req.params;
            const dados = req.body;
            const bemAtualizado = await patrimonioService.atualizarBem(parseInt(id), dados);
            res.json(bemAtualizado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async atualizarDireito(req, res) {
        try {
            const { id } = req.params;
            const dados = req.body;
            const direitoAtualizado = await patrimonioService.atualizarDireito(parseInt(id), dados);
            res.json(direitoAtualizado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async atualizarObrigacao(req, res) {
        try {
            const { id } = req.params;
            const dados = req.body;
            const obrigacaoAtualizada = await patrimonioService.atualizarObrigacao(parseInt(id), dados);
            res.json(obrigacaoAtualizada);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deletarBem(req, res) {
        try {
            const { id } = req.params;
            await patrimonioService.deletarBem(parseInt(id));
            res.json({ message: 'Bem deletado com sucesso!' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deletarDireito(req, res) {
        try {
            const { id } = req.params;
            await patrimonioService.deletarDireito(parseInt(id));
            res.json({ message: 'Direito deletado com sucesso!' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deletarObrigacao(req, res) {
        try {
            const { id } = req.params;
            await patrimonioService.deletarObrigacao(parseInt(id));
            res.json({ message: 'Obrigação deletada com sucesso!' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async buscarTodosOsPatrimonios(req,res){
        try{
            const { patrimonioId } = req.body; 
            const patrimonio = await patrimonioService.buscarTodosOsDadosPorPatrimonio(patrimonioId);
            if(patrimonio != null) return res.json(patrimonio)
        }catch(error){
            res.status(500).json({erro:error});
        }
    }

    async buscarPatrimoniosPorUsuario(req, res) {
        try {
            const { userId } = req.params; // Obtém o id do usuário
    
            // Supondo que o serviço de busca já tenha a lógica para buscar patrimônios do usuário
            const usuario = await patrimonioService.buscarPatrimoniosPorUsuarioId(userId);
    
            if (!usuario) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            }
    
            // Verifique se o usuário tem patrimônios associados
            if (!usuario.patrimonio || usuario.patrimonio.length === 0) {
                return res.status(404).json({ message: "Nenhum patrimônio encontrado para este usuário" });
            }
    
            return res.status(200).json({
                message: "Patrimônios encontrados",
                patrimonios: usuario.patrimonio // Presumindo que os patrimônios estão dentro do objeto 'usuario'
            });
    
        } catch (error) {
            console.error("Erro ao buscar patrimônios:", error);
            return res.status(500).json({ message: "Erro interno no servidor", erro: error.message });
        }
    }
      
       
}

module.exports = PatrimonioController;