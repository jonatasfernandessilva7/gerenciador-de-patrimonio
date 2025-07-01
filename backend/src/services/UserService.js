const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpiresIn } = require('../config/config');

const prisma = new PrismaClient();

class UserService {
    async createUser(name, email, password) {
        let hashedPassword = await bcrypt.hash(password, 10);
        let user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });
        return user;
    }

    async updateUserPassword(email, password) {
        let hashedPassword = await bcrypt.hash(password, 10);
        let updatePassword = await prisma.user.update({
            where: {
                email,
            },
            data: {
                password: hashedPassword,
            },
        });
        return updatePassword;
    }

    async updateAllUserData(id, { name, email, password }) {
        let data = { name, email };
        if (password) {
            data.password = await bcrypt.hash(password, 10);
        }
        let updateData = await prisma.user.update({
            where: {
                id: Number(id),
            },
            data,
        });
        return updateData;
    }

    async deleteUser(email) {
        let user = await prisma.user.delete({
            where: {
                email,
            },
        });
        return user;
    }

    async searchUserByEmail(email) {
        let user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        return user;
    }

    async searchUserById(id) {
        let user = await prisma.user.findUnique({
            where: {
                id: Number(id),
            },
        });
        return user;
    }

    async validatePassword(inputPassword, storedPassword) {
        return await bcrypt.compare(inputPassword, storedPassword);
    }

    async generateToken(user) {
        let payload = { id: user.id, email: user.email };
        return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiresIn });
    }
}

module.exports = UserService;