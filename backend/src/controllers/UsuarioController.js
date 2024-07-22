const UsuarioService = require("../services/UserServices");
const Validacao = require("../validations/UsuarioValidations");

const validation = new Validacao();
const userService = new UsuarioService();

class UsuarioController {
    async criar(req, res) {
        try {
            const { nome, email, senha, senhaConfirm } = req.body;
            const validationMessage = await validation.validarCadastro(senhaConfirm, senha, email);
    
            if (validationMessage !== "Cadastro validado com sucesso") {
                // Se a validação falhar, retornar a mensagem de erro
                res.json({ message: validationMessage });
                return;
            }
    
            // Verificar se já existe um usuário com o email fornecido
            let busca = await userService.buscaUsuarioPorEmail(email);
            if (busca) {
                res.json({ message: 'Já existe um usuário com esse email' });
            } else {
                // Criar o usuário se não existir
                try {
                    let user = await userService.createUser(nome, email, senha);
                    res.json({
                        user: user,
                        message: 'Usuário criado com sucesso'
                    });
                } catch (error) {
                    res.json({ error });
                }
            }
        } catch (error) {
            res.json({ error: error });
        }
    }

    async login(req, res) {
        try {
            const { email, senha } = req.body;
            let searchUser = await userService.buscaUsuarioPorEmail(email);
            if (searchUser === null) {
                return res.status(400).json({ message: 'user not found' })
            } else {
                res.json({
                    message: "ok",
                    user: searchUser,
                });
            }
        } catch (error) {
            res.json({ error })
        }
    }

    async atualizarSenha(req, res) {
        try {
            const { email, senha } = req.body
            let busca = await userService.buscaUsuarioPorEmail(email);
            if (busca === null) {
                return res.status(400).send('user not found')
            } else {
                try {
                    let updateSenha = await userService.atualizarUsuario(email, senha);
                    res.json({ message: "att", user: updateSenha });
                } catch (error) {
                    res.json({ error })
                }
            }
        } catch (error) {
            res.json({ error: error });
        }
    }

    async atualizarDadosDoUsuario(req, res) {
        try {
            const { id } = req.params;
            let { nome, email, senha } = req.body;
            let userFind = await userService.buscaUsuarioPorId(id);
            if (!userFind) {
                res.send("user não encontrado");
            } else {
                try {
                    let updateDeTudo = await userService.updateDadosUsuario(nome, email, senha)
                    res.json({ message: "ok", user: updateDeTudo });
                } catch (erro) {
                    console.log(erro);
                }
            }
        } catch (error) {
            res.json({ erro: error });
        }
    }

    async perfil(req, res) {
        try {
            const { id } = req.params;
            const Usuario = await userService.buscaUsuarioPorId(id);
            if (!Usuario) {
                return res.status(400).json({ message: "usuario não encontrado" })
            }
            return res.status(200).json({
                message: "usuario encontrado",
                usuario: Usuario
            });
        } catch (error) {
            res.json({ erro: error });
        }
    }

    async deletarConta(req, res) {

        const { email } = req.body;

        let buscaADeletar = await admService.buscaUsuarioADeletar(email);

        try {

            if (buscaADeletar) {
                try {
                    let alunoADeletar = await admService.deleteUsuario(email);
                    res.send("ok")
                } catch (erro) {
                    res.json(buscaADeletar)
                    res.send("error" + erro);
                }
            }
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = UsuarioController;