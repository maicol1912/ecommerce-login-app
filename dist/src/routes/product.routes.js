"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const validate_token_routes_1 = __importDefault(require("./validate-token.routes"));
const router = (0, express_1.Router)();
router.get('/', validate_token_routes_1.default, product_controller_1.getProducts);
exports.default = router;
