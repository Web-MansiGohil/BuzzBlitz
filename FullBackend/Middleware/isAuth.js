import jwt from "jsonwebtoken";
import { register } from "../Model/User.js";

export const isAuth = async (req, res, next) => {
    const token = req.header("Auth");

    if (!token) {
        return res.status(400).json({
            message: 'Log in Fisrt',
            success: false
        });
    }
    console.log(token);
    const decode = jwt.verify(token, process.env.JWT);
    console.log(decode);
    const id = decode.userId;;
    console.log(id);

    const user = await register.findById(id);
    console.log(user);
    if (!user) {
        return res.status(400).json({
            message: 'User is not exist',
            success: false
        });
    }

    req.user = user;
    next();
}