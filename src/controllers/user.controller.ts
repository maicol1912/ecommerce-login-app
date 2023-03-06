import { Request, Response } from "express"
import bcrypt from "bcrypt"
import { User } from "../models/user"
import jwt from "jsonwebtoken"

export const newUser = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body

        if (await User.findOne({ where: { username: username } })) {
            return res.status(400).json("el usuario ya existe")
        }
        const hashPassword = await bcrypt.hash(password, 10)

        await User.create({
            username,
            password: hashPassword
        })
        res.json({
            message: `User ${username} created succesfully`,
            body: req.body
        })
    }
    catch (e) {
        res.status(400).json("ocurrio un error")
    }
}

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body

    const user: any = await User.findOne({ where: { username: username } })

    if (!user) {
        return res.status(400).json({
            message: "no existe el usuario"
        })
    }
    if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).json({
            message: "password no valid"
        })
    }

    const token = jwt.sign({
        username:username
    },process.env.SECRET_KEY || 'pepito123',{
        expiresIn:'1000000'
    })

    return res.status(200).json({
        token
    })
}