const ajudaService = require("../services/ajudaService");
const sendEmail = require("../services/envioDeEmail");

const enviandoDuvida = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, duvida, nome } = req.body;

        // Validar entrada
        if (!email || !duvida || !nome) {
            return res.status(400).json({ message: 'Campos obrigatórios não fornecidos' });
        }

        // Verificar se o usuário existe
        const searchUser = await ajudaService.buscaId(id);
        if (!searchUser) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Enviar email
        await sendEmail.mailerEnviaEmail(email, duvida, nome);

        // Responder com sucesso
        res.status(200).json({ message: 'Sugestão enviada com sucesso', duvida, email, usuario: nome });
    } catch (error) {
        console.error('Erro ao enviar dúvida:', error);
        res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
}

module.exports = enviandoDuvida;