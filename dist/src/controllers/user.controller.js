"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (yield user_1.User.findOne({ where: { username: username } })) {
            return res.status(400).json("el usuario ya existe");
        }
        const hashPassword = yield bcrypt_1.default.hash(password, 10);
        yield user_1.User.create({
            username,
            password: hashPassword
        });
        res.json({
            message: `User ${username} created succesfully`,
            body: req.body
        });
    }
    catch (e) {
        res.status(400).json("ocurrio un error");
    }
});
exports.newUser = newUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield user_1.User.findOne({ where: { username: username } });
    if (!user) {
        return res.status(400).json({
            message: "no existe el usuario"
        });
    }
    if (!(yield bcrypt_1.default.compare(password, user.password))) {
        return res.status(400).json({
            message: "password no valid"
        });
    }
    const token = jsonwebtoken_1.default.sign({
        username: username
    }, process.env.SECRET_KEY || 'pepito123', {
        expiresIn: '1000000'
    });
    return res.status(200).json({
        token
    });
});
exports.loginUser = loginUser;
