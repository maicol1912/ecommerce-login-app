import { Sequelize } from "sequelize";
import { Product } from "../models/product";

export const sequelize = new Sequelize('ecommerce_app','postgres','maicol123',{
    host:'localhost',
    dialect:'postgres',
    logging: false
});

export default sequelize;