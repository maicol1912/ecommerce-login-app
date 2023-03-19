import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Category = sequelize.define('category',{
  id:{
    type : DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  } ,
  name:{
    type:DataTypes.STRING,
    validate:{
        len:[5,10]
    }
  },
  reference:{
    type:DataTypes.INTEGER,
    validate:{
      len:[2,5]
    }
  }
},{timestamps:false})
