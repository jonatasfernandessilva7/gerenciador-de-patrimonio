import express from 'express';
const heritageRouter = express.Router();

import HeritageController from '../controllers/HeritageController';
const heritageController = new HeritageController();

heritageRouter.post("/add-heritage", heritageController.addHeritage);
heritageRouter.post("/add-assets",  heritageController.addFinancialAssets);
heritageRouter.post("/add-claims",  heritageController.addFinancialClaims);
heritageRouter.post("/add-obligations",  heritageController.addFinancialObligations);

heritageRouter.put("/update-assets/:id", heritageController.updateFinancialAssets);
heritageRouter.put("/update-claims/:id",  heritageController.updateFinancialClaims);
heritageRouter.put("/update-obligations/:id", heritageController.updateFinancialObligations);

heritageRouter.delete("/delete-assets/:id", heritageController.deleteFinancialAssets);
heritageRouter.delete("/delete-claims/:id", heritageController.deleteFinancialClaims);
heritageRouter.delete("/delete-obligations/:id",  heritageController.deleteFinancialObligations);

heritageRouter.get("/view-all-heritages", heritageController.searchAllHeritage);
heritageRouter.get("/view-heritage/:id", heritageController.searchHeritageById);


module.exports = heritageRouter;