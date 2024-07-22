import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class UsuarioService{
    async createUser (nome, email, senha) {
        const user = await prisma.usuario.create({
            data: {
                nome,
                email,
                senha
            }
        });
        return user;    
    }

    async atualizarUsuario(email, senha) {
        let updateSenha = await prisma.usuario.update({
        where:{
                email,
        },
        data:{
                senha,
        }, 
        });
        return updateSenha;
    }

    async updateDadosUsuario(nome, email, senha){
        let updateData = await prisma.usuario.update({
            where:{
                email
            },
            data:{
                nome, senha
            }
        });
        return updateData;
    }

    async deleteUser(email) {
        const del = await prisma.usuario.delete({
            where: {
                email
            },
        });
    
        return del;
    }

    async buscaUsuarioPorEmail(email) {
        let userFind = await prisma.usuario.findUnique({
            where:{
                email
            }
        });
        return userFind;
    }

    async buscaUsuarioPorId(id){
        let buscaIdUsuario = await prisma.usuario.findUnique({
            where : {id : Number(id)}
        });
        return buscaIdUsuario;
    }
}

module.exports = UsuarioService;