const UsuarioServico = require("../services/UserService");
const EnvioDeEmail = require("../services/SendEmailService");

const sendEmail = new EnvioDeEmail();
const user = new UsuarioServico();

const SEND_FAQ = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, FAQ, name } = req.body;

        if (!email || !FAQ || !name) {
            return res.status(400).json({ message: 'Required items not valid' });
        }

        const searchUser = await user.searchUserById(id);
        if (!searchUser) {
            return res.status(404).json({ message: 'User not found!' });
        }

        await sendEmail.mailerSendEmail(email, FAQ, name);

        res.status(200).json({ message: 'success', FAQ, email, user: name });
    } catch (error) {
        console.error('Error in send FAQ:', error);
        res.status(500).json({ message: 'Internal error in server', error: error.message });
    }
}

module.exports = SEND_FAQ;