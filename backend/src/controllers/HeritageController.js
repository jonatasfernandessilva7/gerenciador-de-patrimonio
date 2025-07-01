import HeritageService from '../services/HeritageService';
import UserService from '../services/UserService';
import jwt from 'jsonwebtoken';

const heritageService = new HeritageService();
const userService = new UserService();

class HeritageController {
    async addHeritage(req, res) {
        try {
            const { userId } = req.body;
            const newHeritage = await heritageService.addHeritage(userId);
            res.status(201).json({"message": "success", "data": newHeritage});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async addFinancialAssets(req, res) {
        try {
            const { heritageId, data } = req.body;
            const assets = await heritageService.addAssets(heritageId, data);
            res.status(201).json({"message": "success", "data": assets});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async addFinancialClaims(req, res) {
        try {
            const { heritageId, data } = req.body;
            const claims = await heritageService.addClaims(heritageId, data);
            res.status(201).json({"message": "success", "data": claims});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async addFinancialObligations(req, res) {
        try {
            const { heritageId, data } = req.body;
            const obligation = await heritageService.addObligations(heritageId, data);
            res.status(201).json({"message": "success", "data": obligation});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateFinancialAssets(req, res) {
        try {
            const { id } = req.params;
            const { data } = req.body;
            const updateAssets = await heritageService.updateAssetsById(parseInt(id), data);
            res.json({"message": "success", "data": updateAssets});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateFinancialClaims(req, res) {
        try {
            const { id } = req.params;
            const { data } = req.body;
            const updateClaims = await heritageService.updateClaimsById(parseInt(id), data);
            res.json({"message": "success", "data": updateClaims});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateFinancialObligations(req, res) {
        try {
            const { id } = req.params;
            const { data } = req.body;
            const updateObligations = await heritageService.updateObligationsById(parseInt(id), data);
            res.json({"message": "success", "data": updateObligations});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteFinancialAssets(req, res) {
        try {
            const { id } = req.params;
            await heritageService.deleteAssetById(parseInt(id));
            res.json({ message: "success" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteFinancialClaims(req, res) {
        try {
            const { id } = req.params;
            await heritageService.deleteClaimsById(parseInt(id));
            res.json({ message: "success" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteFinancialObligations(req, res) {
        try {
            const { id } = req.params;
            await heritageService.deleteObligationsById(parseInt(id));
            res.json({ message: "success" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async searchAllHeritage(req, res){
        try{
            const { heritageId } = req.body;
            const heritage = await heritageService.searchAllDataForHeritage(heritageId);
            if(heritage != null) return res.json({"message":"success" ,"data":heritage})
        }catch(error){
            res.status(500).json({error:error});
        }
    }

    async searchHeritageById(req, res) {
        try {
            const { userId } = req.params;

            const user = await heritageService.searchHeritageForUserId(userId);
    
            if (!user) {
                return res.status(404).json({ message: "User not found!" });
            }

            if (!user.patrimonio || user.patrimonio.length === 0) {
                return res.status(404).json({ message: "Nobody heritage found!" });
            }
    
            return res.status(200).json({
                message: "success",
                patrimonios: user.patrimonio
            });
    
        } catch (error) {
            console.error("err in search for heritage:", error);
            return res.status(500).json({ message: "internal erros in server", erro: error.message });
        }
    }
      
       
}

module.exports = HeritageController;