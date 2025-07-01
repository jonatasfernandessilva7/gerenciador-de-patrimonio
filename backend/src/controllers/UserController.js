import UserService from "../services/UserService";
import Validations from "../validations/UserValidation";
import authenticateToken from '../middleware/Middleware';
import jwt from "jsonwebtoken";

const validation = new Validations();
const userService = new UserService();

class UserController {
    async createdUser(req, res) {
        try {
            const { name, email, password } = req.body;
            const validationMessage = await validation.validateRegister(email);
    
            if (validationMessage !== "register success") {
                res.json({ message: validationMessage });
                return;
            }

            let userExist = await userService.searchUserByEmail(email);
            if (userExist) {
                res.json({ message: 'These email already exists in the database.' });
            } else {
                try {
                    let user = await userService.createUser(name, email, password);
                    const token = await userService.generateToken(user);
                    res.json({
                        user: user,
                        token: token,
                        message: 'user created successfully',
                        success: true
                    });
                } catch (error) {
                    res.json({ error });
                }
            }
        } catch (error) {
            res.json({ error: error });
        }
    }

    async loginUser(req, res) {
        try {
            const { email, password } = req.body;
            const user = await userService.searchUserByEmail(email);
    
            if (user && await userService.validatePassword(password, user.senha)) {
                const token = await userService.generateToken(user);
                res.json({
                    message: "Login successfully",
                    token: token,
                    id: user.id,
                    user: { email }
                });
            } else {
                res.status(400).json({ message: 'incorrect login' });
            }
        } catch (error) {
            console.error("error in process login:", error);
            res.status(500).json({ error: "error in process login" });
        }
    }    

    async updatePassword(req, res) {
        try {
            const { email, password } = req.body;

            let user = await userService.searchUserByEmail(email);

            if (!user) {
                return res.status(400).send('User not found');
            } else {
                try {
                    let updatePassword = await userService.updateUserPassword(email, password);
                    res.json({ message: "Updated password", user: updatePassword });
                } catch (error) {
                    res.json({ error });
                }
            }

        } catch (error) {
            res.json({ error: error });
        }
    }

    async updateUserData(req, res) {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            
            let user = await userService.searchUserById(id);
            
            if (!user) {
                res.send("User not found");
            } else {
                try {
                    let updateAllUserData = await userService.updateAllUserData(id, { name, email, password });
                    res.json({ message: "Updated data", user: updateAllUserData });
                } catch (erro) {
                    console.log(erro);
                }
            }

        } catch (error) {
            res.json({ erro: error });
        }
    }

    async viewProfileData(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
    
            if (isNaN(id)) {
                return res.status(400).json({ message: "Invalid ID" });
            }
    
            const user = await userService.searchUserById(id);
    
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
    
            return res.status(200).json({
                message: "successfully view profile",
                user: user
            });
    
        } catch (error) {
            console.error("Error in search profile:", error);
            return res.status(500).json({ message: "Internal error in server", error: error.message });
        }
    }
    

    async deleteUserAccount(req, res) {
        const { email } = req.body;

        let user = await userService.searchUserByEmail(email);

        try {
            if (user) {
                try {
                    let userForDelete = await userService.deleteUser(email);
                    res.json({ user: userForDelete, message: "Deleted user account" });
                } catch (error) {
                    res.json({ error: error });
                }
            } else {
                res.status(400).json({ message: "User not found" });
            }
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = UserController;