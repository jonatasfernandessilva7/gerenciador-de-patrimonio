const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class HeritageService {
    async addHeritage(userId) {
        return await prisma.heritage.create({
            data: { userId }
        });
    }

    async addAssets(heritageId, data) {
        return await prisma.assets.create({
            data: {
                heritageId,
                real_estate: { create: data.real_estate || [] },
                lands: { create: data.lands || [] },
                vehicles: { create: data.vehicles || [] },
                equity_interests: { create: data.equity_interests || [] },
                other_investments: { create: data.other_investments || [] }
            },
            include: {
                real_estate: true,
                lands: true,
                vehicles: true,
                equity_interests: true,
                other_investments: true
            }
        });
    }

    async addClaims(heritageId, data) {
        return await prisma.claims.create({
            data: { heritageId, value_of_claim: data.value_of_claim, year_of_entry: data.year_of_entry }
        });
    }

    async addObligations(heritageId, data) {
        return await prisma.obligations.create({
            data: { heritageId, value_of_obligation: data.value_of_obligation, year_of_entry: data.year_of_entry }
        });
    }

    async updateAssetsById(id, data) {
        
        const existsAssets = await prisma.assets.findUnique({
            where: { id: Number(id) }
        });
        
        if (!existsAssets) {
            throw new Error("Assets not found by Id.");
        }


        return await prisma.assets.update({
            where: { id: Number(id) },
            data: {
                real_estate: { create: data.real_estate || [] },
                lands: { create: data.lands || [] },
                vehicles: { create: data.vehicles || [] },
                equity_interests: { create: data.equity_interests || [] },
                other_investments: { create: data.other_investments || [] }
            },
            include: {
                real_estate: true,
                lands: true,
                vehicles: true,
                equity_interests: true,
                other_investments: true
            }
        })
        
    }

    async updateClaimsById(id, data) {
        const existsClaim = await prisma.claims.findUnique({
            where: { id: Number(id) }
        });
    
        if (!existsClaim) {
            throw new Error("Claims not found by Id.");
        }

        return await prisma.claims.update({
            where: { id: Number(id) },
            data: {
                value_of_claim: data.value_of_claim,
                year_of_entry: new Date(data.year_of_entry)
            }
        });
    }
    

    async updateObligationsById(id, data) {

        const existsObligations = await prisma.obligations.findUnique({
            where: { id: Number(id) }
        });
    
        if (!existsObligations) {
            throw new Error("Obligations not found by Id.");
        }

        return await prisma.obligations.update({
            where: { id: Number(id) },
            data: {
                value_of_obligation: data.value_of_obligation,
                year_of_entry: new Date(data.year_of_entry)
            }
        });
    }

    async deleteClaimsById(id) {
        return await prisma.claims.delete({ where: { id: Number(id) } });
    }

    async deleteObligationsById(id) {
        return await prisma.obligations.delete({ where: { id: Number(id) } });
    }

    async searchAllDataForHeritage(heritageId) {
        return await prisma.heritage.findUnique({
            where: { id: Number(heritageId) },
            include: {
                assets: {
                    include: {
                        real_estate: true,
                        lands: true,
                        vehicles: true,
                        equity_interests: true,
                        other_investments: true
                    }
                },
                claims: true,
                obligations: true
            }
        });
    }

    async searchHeritageForUserId(userId) {
        return await prisma.user.findUnique({
            where: { id: Number(userId) },
            include: {
                heritage: {
                    include: {
                        assets: {
                            include: {
                                real_estate: true,
                                lands: true,
                                vehicles: true,
                                equity_interests: true,
                                other_investments: true
                            }
                        },
                        claims: true,
                        obligations: true
                    }
                }
            }
        });
    }
}

module.exports = HeritageService;