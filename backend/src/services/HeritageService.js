const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class PatrimonioService {
    async adicionarPatrimonio(usuarioId) {
        return await prisma.patrimonio.create({
            data: { usuarioId }
        });
    }

    async adicionarBem(patrimonioId, dados) {
        return await prisma.bens.create({
            data: {
                patrimonioId,
                imoveis: { create: dados.imoveis || [] },
                terrenos: { create: dados.terrenos || [] },
                veiculos: { create: dados.veiculos || [] },
                participacoes: { create: dados.participacoes || [] },
                outrosinvestimentos: { create: dados.outrosinvestimentos || [] }
            },
            include: {
                imoveis: true,
                terrenos: true,
                veiculos: true,
                participacoes: true,
                outrosinvestimentos: true
            }
        });
    }

    async adicionarDireito(patrimonioId, dados) {
        return await prisma.direitos.create({
            data: { patrimonioId, valor: dados.valor, anoDeEntrada: dados.anoDeEntrada }
        });
    }

    async adicionarObrigacao(patrimonioId, dados) {
        return await prisma.obrigacoes.create({
            data: { patrimonioId, valor: dados.valor, anoDeEntrada: dados.anoDeEntrada }
        });
    }

    async atualizarBem(id, dados) {
        
        const bemExiste = await prisma.bens.findUnique({
            where: { id: Number(id) }
        });
        
        if (!bemExiste) {
            throw new Error("Bem não encontrado com o id fornecido.");
        }


        return await prisma.bens.update({
            where: { id: Number(id) },
            data: {
                imoveis: { update: dados.imoveis || [] },
                terrenos: { update: dados.terrenos || [] },
                veiculos: { update: dados.veiculos || [] },
                participacoes: { update: dados.participacoes || [] },
                outrosinvestimentos: { update: dados.outrosinvestimentos || [] }
            },
            include: {
                imoveis: true,
                terrenos: true,
                veiculos: true,
                participacoes: true,
                outrosinvestimentos: true
            }
        })
        
    }

    async atualizarDireito(id, dados) {
        // Verificar se o direito com o id informado existe
        const direitoExistente = await prisma.direitos.findUnique({
            where: { id: Number(id) }
        });
    
        if (!direitoExistente) {
            throw new Error("Direito não encontrado com o id fornecido.");
        }
    
        // Caso o direito exista, proceder com a atualização
        return await prisma.direitos.update({
            where: { id: Number(id) },
            data: {
                valor: dados.valor,
                anoDeEntrada: new Date(dados.anoDeEntrada)  // Garantir que a data esteja em formato Date
            }
        });
    }
    

    async atualizarObrigacao(id, dados) {
        // Verificar se o direito com o id informado existe
        const obrigacaoExiste = await prisma.obrigacoes.findUnique({
            where: { id: Number(id) }
        });
    
        if (!obrigacaoExiste) {
            throw new Error("Obrigação não encontrado com o id fornecido.");
        }
    
        // Caso o direito exista, proceder com a atualização
        return await prisma.obrigacoes.update({
            where: { id: Number(id) },
            data: {
                valor: dados.valor,
                anoDeEntrada: new Date(dados.anoDeEntrada)  // Garantir que a data esteja em formato Date
            }
        });
    }

    async deletarBem(id) {
        await prisma.tabelaDeletarTodosOsBensDeUmaVezPorId.deleteMany({
            where: { bemId: id }
        });
        
        await prisma.bens.delete({
            where: { id }
        });
        
    }

    async deletarDireito(id) {
        return await prisma.direitos.delete({ where: { id: Number(id) } });
    }

    async deletarObrigacao(id) {
        return await prisma.obrigacoes.delete({ where: { id: Number(id) } });
    }

    async buscarTodosOsDadosPorPatrimonio(patrimonioId) {
        return await prisma.patrimonio.findUnique({
            where: { id: Number(patrimonioId) },
            include: {
                bens: {
                    include: {
                        imoveis: true,
                        terrenos: true,
                        veiculos: true,
                        participacoes: true,
                        outrosinvestimentos: true
                    }
                },
                direitos: true,
                obrigacoes: true
            }
        });
    }

    async buscarPatrimoniosPorUsuarioId(usuarioId) {
        return await prisma.usuario.findUnique({
            where: { id: Number(usuarioId) },
            include: {
                patrimonio: {
                    include: {
                        bens: {
                            include: {
                                imoveis: true,
                                terrenos: true,
                                veiculos: true,
                                participacoes: true,
                                outrosinvestimentos: true
                            }
                        },
                        direitos: true,
                        obrigacoes: true
                    }
                }
            }
        });
    }
}

module.exports = PatrimonioService;