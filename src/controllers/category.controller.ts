import { Category } from './../models/category';
import { Request,Response } from "express"

export const getCategories = async(req:Request,res:Response) =>{
    const listCategories = await Category.findAll()
    res.status(200).json({
        message:'LIST CATEGORIES',
        body:listCategories
    })
}

export const getCategory = async(req:Request,res:Response)=>{
    const category = await Category.findOne({where:{id:Number(req.params.id)}})
    res.status(200).json({
        message:'LIST PRODUCT BY ID',
        body:category
    })
}

export const addCategory = async(req:Request,res:Response)=>{
    const {name,reference} = req.body
    Category.create({
        name,
        reference
    })
    .then((response)=>{
        res.status(200).json({
            category:{
                name,
                reference
            }
        })
    })
    .catch((err)=>{
        res.status(400).json({
            category:null
        })
    })
}

export const deleteCategory = (req:Request,res:Response)=>{
    Category.destroy({where:{id:Number(req.params.id)}})
    .then((response)=>{
        res.status(200).json({
            message: 'DELETE CATEGORIES'
        })
    })
    .catch((error:any)=>{
        res.status(200).json({
            message: error.message
        })
    })
}