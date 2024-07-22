const UsuarioService = require("../services/UserServices");

const userService = new UsuarioService();

class Validacao {
    async validarCadastro(email) {
        if (!email.endsWith("@gmail.com") && !email.endsWith("@hotmail.com")) {
            return "Por favor volte e insira um email da UFC";
        }
        return "Cadastro validado com sucesso";
    }

    async validarLogin(email, senhaUsada) {
        try {
            let busca = await userService.buscaUsuarioPorEmail(email);
            if (busca) {
                let senha = busca.senha; 
                if (senha !== senhaUsada) {
                    return "Senha incorreta";
                }

                return "Login válido";
            } else {
                return "Usuário não encontrado";
            }
        } catch (err) {
            console.error("Erro ao validar login:", err);
            return "Erro ao validar login, por favor tente novamente mais tarde";
        }
    }
}

module.exports = Validacao;