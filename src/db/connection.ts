import { Sequelize } from "sequelize";
import { Product } from "../models/product";

const sequelize = new Sequelize('ecommerce_app','postgres','maicol123',{
    host:'localhost',
    dialect:'postgres',
    logging: false
});

export const databaseConfig = async()=>{
    await Product.sync()
} 

export default sequelize;