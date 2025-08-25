import bcrypt from 'bcrypt';
import { Admin } from '../Model/AdminLogin.js';
import { register } from "../Model/User.js"

//admin data
export const adminData = async (req, res) => {
    try {
        const { admin_id, username, email, password } = req.body;

        if (admin_id == "" || username == "" || email == "" || password == "") {
            return res.status(400).json({ message: "Username and password are required" });
        }

        const data = await Admin.findOne({ username });
        if (data) {
            return res.status(404).json({ message: "Admin is already login " });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = await Admin.create({
            admin_id,
            username,
            email,
            password: hashedPassword
        });

        res.status(200).json({
            message: 'Admin data is store successfully',
            newAdmin,
            success: 'true'
        });
    } catch (error) {
        return res.status(500).json({
            message: 'There is some error in programm',
            error_message: error.message,
            success: false
        });
    }
}

// admin can add new user 
export const registerUser = async (req, res) => {
    try {
        const newUserData = new register(req.body);
        await newUserData.save();

        return res.status(200).json({
            message: 'New user add successfully',
            registerData: newUserData,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Invalid data in user register',
            error_message: error.message,
            success: false
        })
    }
}

//admin access user all data
export const getUserData = async (req, res) => {
    try {
        const allUserData = await register.find();
        return res.status(200).json({
            message: 'Admin access user  data',
            data: allUserData,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Invalid data',
            error_message: error.message,
            success: false
        });
    }
}

//admin access user data by id
export const getUserDataById = async (req, res) => {
    try {
        const id = req.params.id;
        const userById = await register.findById(id);
        if (!userById)
            return res.status(400).json({ message: "Can't data by id", success: false });

        return res.status(200).json({
            message: 'Admin access data by id',
            data: userById,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Invalid Data',
            error_message: error.message,
            success: false
        })
    }
}


//admin can access user last data
export const getLastUserData = async (req, res) => {
    try {
        const lastUser = await register.findOne().sort({ reg_id: -1 });

        return res.status(200).json({
            message: 'Admin access user last data',
            data: lastUser,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Invalid data',
            error_message: error.message,
            success: false
        });
    }
}

// admin though user data upadte

export const updateUserData = async (req, res) => {
    try {
        const id = req.params.id;
        const userUpdate = await register.findByIdAndUpdate(id, req.body, { new: true });
        if (!userUpdate) {
            return res.status(400).json({
                message: 'User cannot update ', success: false
            });
        }

        return res.status(201).json({
            message: 'Admin Update data of user registation',
            data: userUpdate,
            success: true
        });
    } catch (error) {
        return res.status(400).json({
            message: 'Invalid data',
            error_message: error,
            success: false
        });
    }
}
// admin though delete user data
export const deleteUserData = async (req, res) => {
    try {
        const id = req.params.id;
        const userUpdate = await register.findByIdAndDelete(id);
        if (!userUpdate) {
            return res.status(400).json({
                message: 'User cannot update ', success: false
            });
        }

        return res.status(201).json({
            message: 'Admin delete data of user registation',
            success: true
        });
    } catch (error) {
        return res.status(400).json({
            message: 'Invalid data',
            error_message: error,
            success: false
        });
    }
}
