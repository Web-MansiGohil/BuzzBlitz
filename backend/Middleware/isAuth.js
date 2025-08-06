import jwt from "jsonwebtoken";

export const isUserAuth = async (req, res, next) => {
    const token = req.header("Auth");

    if (!token) {
        return res.status(400).json({
            message: 'Log in Fisrt',
            success: 'false'
        });
    }

    const decode = jwt.verify(token, process.env.JWT);
    const id = decode.userId;

    if (!id) {
        return res.status(400).json({
            message: 'User is not exist',
            success: 'false'
        });
    }

    req.user = user;
    next();
}