import { NextFunction, Request,Response } from "express";
import jwt from "jsonwebtoken"
const validateToken = (req:Request,res:Response,next:NextFunction)=>{
    const headerToken = req.headers['authorization']

    if(headerToken==undefined || !headerToken.startsWith('Bearer')){
        res.status(400).json({message:"token no valido"})
    }
    try{
        const bearerToken = headerToken!.slice(7)
        jwt.verify(bearerToken, process.env.SECRET_KEY || 'pepito123')
        next()
    }catch(e){
        res.status(400).json({message:"token not valid"})
    }
    
}

export default validateToken;