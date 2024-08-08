const UsuarioService = require("../services/UserServices");
const Validacao = require("../validations/UsuarioValidations");
const authenticateToken = require('../middleware/Middleware');

const validation = new Validacao();
const userService = new UsuarioService();

class UsuarioController {
    async criar(req, res) {
        try {
            const { nome, email, senha } = req.body;
            const validationMessage = await validation.validarCadastro(email);
    
            if (validationMessage !== "Cadastro validado com sucesso") {
                res.json({ message: validationMessage });
                return;
            }

            let busca = await userService.buscaUsuarioPorEmail(email);
            if (busca) {
                res.json({ message: 'Já existe um usuário com esse email' });
            } else {
                try {
                    let user = await userService.createUser(nome, email, senha);
                    const token = await userService.generateToken(user);
                    res.json({
                        user: user,
                        token: token,
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
            const user = await userService.buscaUsuarioPorEmail(email);
    
            if (user && await userService.validatePassword(senha, user.senha)) {
                const token = await userService.generateToken(user);
                res.json({
                    message: "Login bem-sucedido",
                    token: token,
                    user: { email },
                });
            } else {
                res.status(400).json({ message: 'Login incorreto' });
            }
        } catch (error) {
            console.error("Erro ao processar login:", error);
            res.status(500).json({ error: "Erro ao processar login, por favor tente novamente mais tarde" });
        }
    }

    async atualizarSenha(req, res) {
        try {
            const { email, senha } = req.body;

            let busca = await userService.buscaUsuarioPorEmail(email);

            if (!busca) {
                return res.status(400).send('Usuário não encontrado');
            } else {
                try {
                    let updateSenha = await userService.atualizarUsuario(email, senha);
                    res.json({ message: "Senha atualizada", user: updateSenha });
                } catch (error) {
                    res.json({ error });
                }
            }

        } catch (error) {
            res.json({ error: error });
        }
    }

    async atualizarDadosDoUsuario(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, senha } = req.body;
            
            let userFind = await userService.buscaUsuarioPorId(id);
            
            if (!userFind) {
                res.send("Usuário não encontrado");
            } else {
                try {
                    let updateDeTudo = await userService.updateDadosUsuario(id, { nome, email, senha });
                    res.json({ message: "Dados atualizados", user: updateDeTudo });
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
                return res.status(400).json({ message: "Usuário não encontrado" });
            }
            return res.status(200).json({
                message: "Usuário encontrado",
                usuario: Usuario
            });

        } catch (error) {
            res.json({ erro: error });
        }
    }

    async deletarConta(req, res) {
        const { email } = req.body;

        let buscaADeletar = await userService.buscaUsuarioPorEmail(email);

        try {
            if (buscaADeletar) {
                try {
                    let alunoADeletar = await userService.deleteUser(email);
                    res.json({ aluno: alunoADeletar, message: "Conta deletada" });
                } catch (erro) {
                    res.json({ erro: erro });
                }
            } else {
                res.status(400).json({ message: "Usuário não encontrado" });
            }
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = UsuarioController;