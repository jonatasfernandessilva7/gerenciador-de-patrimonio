const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpiresIn } = require('../config/config');

const prisma = new PrismaClient();

class UsuarioService {
    async createUser(nome, email, senha) {
        const hashedPassword = await bcrypt.hash(senha, 10);
        const user = await prisma.usuario.create({
            data: {
                nome,
                email,
                senha: hashedPassword,
            },
        });
        return user;
    }

    async atualizarUsuario(email, senha) {
        const hashedPassword = await bcrypt.hash(senha, 10);
        const updateSenha = await prisma.usuario.update({
            where: {
                email,
            },
            data: {
                senha: hashedPassword,
            },
        });
        return updateSenha;
    }

    async updateDadosUsuario(id, { nome, email, senha }) {
        const data = { nome, email };
        if (senha) {
            data.senha = await bcrypt.hash(senha, 10);
        }
        const updateData = await prisma.usuario.update({
            where: {
                id: Number(id),
            },
            data,
        });
        return updateData;
    }

    async deleteUser(email) {
        const del = await prisma.usuario.delete({
            where: {
                email,
            },
        });
        return del;
    }

    async buscaUsuarioPorEmail(email) {
        const userFind = await prisma.usuario.findUnique({
            where: {
                email,
            },
        });
        return userFind;
    }

    async buscaUsuarioPorId(id) {
        const buscaIdUsuario = await prisma.usuario.findUnique({
            where: {
                id: Number(id),
            },
        });
        return buscaIdUsuario;
    }

    async validatePassword(inputPassword, storedPassword) {
        return await bcrypt.compare(inputPassword, storedPassword);
    }

    async generateToken(user) {
        const payload = { id: user.id, email: user.email };
        return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiresIn });
    }
}

module.exports = UsuarioService;