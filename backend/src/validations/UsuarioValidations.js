class Validacao {
    async validarCadastro(senhaDeConfirmacao, senha, email) {
        if (senhaDeConfirmacao !== senha) {
            // Se as senhas não coincidem
            return resizeBy.send("Senhas não batem, por favor volte e corrija");
        } else if (!email.endsWith("@gmail.com") && !email.endsWith("@hotmail.com")) {
            // Se o email não termina com @gmail.com nem @hotmail.com
            return resizeBy.send("Por favor volte e insira um email da UFC");
        }

        // Se passar por todas as validações
        return "Cadastro validado com sucesso";
    }
}

module.exports = Validacao;
