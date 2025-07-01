import UserService from "../services/UserService";

const userService = new UserService();

class Validation {
    async validateRegister(email) {
        if (!email.endsWith("@alu.ufc.br") && !email.endsWith("@gmail.com")) {
            console.log(email);
            return "please insert a valid email";
        }
        return "register success";
    }

    /*
    async validateLogin(email, usedPassword) {
        try {
            let user = await userService.buscaUsuarioPorEmail(email);
            if (user) {
                let senha = user.senha;
                if (senha !== usedPassword) {
                    return "incorrect password";
                }

                return "Login Success";
            } else {
                return "User not found";
            }
        } catch (err) {
            console.error("error valid login:", err);
            return "error in valid login, please try again.";
        }
    }
     */
}

module.exports = Validation;