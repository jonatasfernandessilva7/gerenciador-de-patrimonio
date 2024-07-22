const ajudaService = require("../services/ajudaService");
const sendEmail = require("../services/envioDeEmail");

const enviandoDuvida = async (req, res) => {
    try{
        const {id} = req.params;
        const { email, duvida, nome } = req.body;
        var searchUser = await ajudaService.buscaId(id);
        if (!searchUser) {
            return res.status(400).json({message: 'user not found'})
        } else {
            await sendEmail.mailerEnviaEmail(email, duvida, nome);
            res.status(200).json({message: "sugestão enviada", email:duvida, usuario: email});
        }
    }catch(error){
        res.json({erro: error});
    }
}

module.exports = enviandoDuvida;