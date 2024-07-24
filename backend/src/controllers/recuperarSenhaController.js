const UsuarioServico = require("../services/UserServices");
const EnvioDeEmail = require("../services/EnvioDeEmail");

const sendEmail = new EnvioDeEmail();
const usuario = new UsuarioServico();

const recuperandoSenha = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email é obrigatório' });
        }

        const searchUser = await usuario.buscaUsuarioPorEmail(email);
        if (!searchUser) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        await sendEmail.mailerEnviaEmail(email);

        res.status(200).json({ message: 'Email de recuperação enviado', data: searchUser });
    } catch (error) {
        console.error('Erro ao recuperar senha:', error);
        res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
}

module.exports = recuperandoSenha;