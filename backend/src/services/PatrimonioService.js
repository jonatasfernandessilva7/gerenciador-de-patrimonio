const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class PatrimonioService {
    // Adicionar um novo patrimônio
    async adicionarPatrimonio(usuarioId) {
        return await prisma.patrimonio.create({
            data: {
                usuarioId
            }
        });
    }

    // Adicionar um bem
    async adicionarBem(patrimonioId, dados) {
        return await prisma.bens.create({
            data: {
                patrimonioId,
                imoveis: {
                    create: dados.imoveis || [] // Certifica-se de criar corretamente os imóveis vinculados
                },
                terrenos: {
                    create: dados.terrenos || []
                },
                veiculos: {
                    create: dados.veiculos || []
                },
                participacoes: {
                    create: dados.participacoes || []
                },
                outrosinvestimentos: {
                    create: dados.outrosinvestimentos || []
                }
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

    // Adicionar um direito
    async adicionarDireito(patrimonioId, dados) {
        return await prisma.direitos.create({
            data: {
                patrimonioId,
                valor: dados.valor,
                anoDeEntrada: dados.anoDeEntrada
            }
        });
    }

    // Adicionar uma obrigação
    async adicionarObrigacao(patrimonioId, dados) {
        return await prisma.obrigacoes.create({
            data: {
                patrimonioId,
                valor: dados.valor,
                anoDeEntrada: dados.anoDeEntrada
            }
        });
    }

    // Atualizar um bem
    async atualizarBem(id, dados) {
        return await prisma.bens.update({
            where: { id },
            data: dados
        });
    }

    // Atualizar um direito
    async atualizarDireito(id, dados) {
        return await prisma.direitos.update({
            where: { id },
            data: dados
        });
    }

    // Atualizar uma obrigação
    async atualizarObrigacao(id, dados) {
        return await prisma.obrigacoes.update({
            where: { id },
            data: dados
        });
    }

    // Deletar um bem
    async deletarBem(id) {
        return await prisma.bens.delete({
            where: { id }
        });
    }

    // Deletar um direito
    async deletarDireito(id) {
        return await prisma.direitos.delete({
            where: { id }
        });
    }

    // Deletar uma obrigação
    async deletarObrigacao(id) {
        return await prisma.obrigacoes.delete({
            where: { id }
        });
    }

    // Buscar todos os bens de um patrimônio
    async buscarBensPorPatrimonio(patrimonioId) {
        return await prisma.bens.findMany({
            where: {
                patrimonioId: Number(patrimonioId) // Conversão explícita
            },include:{
                imoveis: true,
                terrenos: true,
                veiculos: true,
                participacoes: true,
                outrosinvestimentos: true
            }
        });
    }

    // Buscar todos os direitos de um patrimônio
    async buscarDireitosPorPatrimonio(patrimonioId) {
        return await prisma.direitos.findMany({
            where: {
                patrimonioId: Number(patrimonioId) // Conversão explícita
            },include:{
                valor: true,
                anoDeEntrada: true
            }
        });
    }

    // Buscar todas as obrigações de um patrimônio
    async buscarObrigacoesPorPatrimonio(patrimonioId) {
        return await prisma.obrigacoes.findMany({
            where: {
                patrimonioId: Number(patrimonioId) // Conversão explícita
            },include:{
                valor: true,
                anoDeEntrada: true
            }
        });
    }

    // Buscar todos os dados de bens, direitos e obrigações de um patrimônio
    async buscarTodosOsDadosPorPatrimonio(patrimonioId) {
        const patrimonio = await prisma.patrimonio.findUnique({
            where: {
                id: Number(patrimonioId)
            },
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

        

        return patrimonio;
    }


    async buscarPatrimoniosPorUsuario(usuarioId) {
        const usuario = await prisma.usuario.findUnique({
            where: {
                id: Number(usuarioId)
            },
            include: {
                patrimonio: { // Refere-se ao campo 'patrimonio' no modelo Usuario
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
    
        return usuario; // Retorna o usuário com os patrimônios incluídos
    }
    

}

module.exports = PatrimonioService;