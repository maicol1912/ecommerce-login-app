import { Request,Response } from "express"
import { Product } from "../models/product"

export const getProducts = async(req:Request,res:Response)=>{
    const listProducts = await Product.findAll();
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
        message: 'DELETE USERS'
    })
}

export const deleteProduct = async (req: Request, res: Response) => {
    const {id} = req.params
    console.log(id)
    Product.destroy({ where: {id:Number(req.params.id)} })
        .then(() => {
            console.log("users eliminados successfully")
        })
        .catch((e) => {
            console.error(`Error ${e}`)
        })
    res.status(200).json({
        message: 'DELETE USERS'
    })
}

export const addProduct = async (req: Request, res: Response) => {
    const {name,description} = req.body

    Product.create({
        name,
        description
    })
    .then((response)=>{
        console.log("exitoso")
    })
    .catch((err)=>{
        console.log(err)
    })
    res.status(200).json({
        message: 'ADD PRODUCT'
    })
}
