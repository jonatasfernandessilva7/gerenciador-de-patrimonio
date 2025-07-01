import UserService from "../services/UserService";
import SendEmailService from "../services/SendEmailService";

const sendEmail = new SendEmailService();
const user = new UserService();

const RECOVER_PASSWORD = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'required email' });
        }

        const searchUser = await user.searchUserByEmail(email);
        if (!searchUser) {
            return res.status(404).json({ message: 'user not found' });
        }

        await sendEmail.mailerSendEmail(email);

        res.status(200).json({ message: 'sended email recover', data: searchUser});
    } catch (error) {
        console.error('error in recover password:', error);
        res.status(500).json({ message: 'internal server error', error: error.message });
    }
}

module.exports = RECOVER_PASSWORD;