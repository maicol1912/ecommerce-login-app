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
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const sequelize_1 = require("sequelize");
const product_1 = require("../models/product");
const sequelize = new sequelize_1.Sequelize('ecommerce_app', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});
const databaseConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    yield product_1.Product.sync();
});
exports.databaseConfig = databaseConfig;
exports.default = sequelize;
