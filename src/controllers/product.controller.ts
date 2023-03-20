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
    
    const {reference,name,description,value,categoryId} = req.body
    console.log(reference,name,description,value,categoryId)
    Product.create({
        reference,
        name,
        description,
        value,
        categoryId
    })
    .then((response)=>{
        const value = response.dataValues
        res.status(200).json({
            product:value
            
        })
    })
    .catch((err)=>{
        console.log(err)
        res.status(400).json({
            product:null
        })
    })
    
}
