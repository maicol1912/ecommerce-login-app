import { Sequelize } from "sequelize";
import { Product } from "../models/product";

const sequelize = new Sequelize('ecommerce_app','postgres','1234',{
    host:'localhost',
    dialect:'postgres',
    logging: false
});

export const databaseConfig = async()=>{
    await Product.sync()
} 

export default sequelize;