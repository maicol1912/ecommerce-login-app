"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    const headerToken = req.headers['authorization'];
    if (headerToken == undefined || !headerToken.startsWith('Bearer')) {
        res.status(400).json({ message: "token no valido" });
    }
    try {
        const bearerToken = headerToken.slice(7);
        jsonwebtoken_1.default.verify(bearerToken, process.env.SECRET_KEY || 'pepito123');
        res.status(200).json({ message: "token valido" });
    }
    catch (e) {
        res.status(400).json({ message: "token not valid" });
    }
};
exports.default = validateToken;