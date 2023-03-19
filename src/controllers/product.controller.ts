import { Category } from './../models/category';
import { Request,Response } from "express"
import { Product } from "../models/product"

export const getProducts = async(req:Request,res:Response)=>{
    const listProducts = await Product.findAll({
        include: [{
            model: Category,
            attributes: ['name']
          }]
      });
    res.status(200).json({
        message:'GET PRODUCTS',
        body:listProducts
    })
}

export const deleteProducts = async(req:Request,res:Response)=>{
    Product.destroy({where:{}})
    .then(()=>{
        console.log("users eliminados successfully")
    })
    .catch((e)=>{
        console.error(`Error ${e}`)
    })
    res.status(200).json({
        message: 'DELETE PRODUCTS'
    })
}

export const deleteProduct = async (req: Request, res: Response) => {
    Product.destroy({ where: {id:Number(req.params.id)} })
        .then(() => {
            console.log("users eliminados successfully")
        })
        .catch((e) => {
            console.error(`Error ${e}`)
        })
    res.status(200).json({
        message: 'DELETE PRODUCT'
    })
}

export const addProduct = async (req: Request, res: Response) => {
    
    const {name,description} = req.body

    Product.create({
        name,
        description
    })
    .then((response)=>{
        res.status(200).json({
            product:{
                name,
                description
            }
        })
    })
    .catch((err)=>{
        res.status(400).json({
            product:null
        })
    })
    
}
