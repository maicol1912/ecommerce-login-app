import { Category } from './category';
import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Product = sequelize.define('product',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    reference:{
        type:DataTypes.STRING,
        unique:true,
        validate:{
            len:[10,15]
        }
    },
    name:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    },
    value:{
        type:DataTypes.INTEGER
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Category,
          key: 'id'
        }
      }
},{timestamps:false})

Product.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasOne(Product, { foreignKey: 'categoryId' });