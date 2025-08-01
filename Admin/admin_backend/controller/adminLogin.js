import bcrypt from 'bcrypt';
import { Admin } from '../Model/AdminLogin.js';

export const adminData = async (req, res) => {
    const { username, password } = req.body;

    if (username == "" || password == "") {
        return res.status(400).json({ message: "Username and password are required" });
    }

    const data = await Admin.findOne({ username });
    if (data) {
        return res.status(404).json({ message: "Admin is already login " });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = await Admin.create({
        username,
        password: hashedPassword
    });

    res.status(200).json({
        message: 'Admin data is store successfully',
        newAdmin,
        success: 'true'
    });

}