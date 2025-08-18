import bcrypt from 'bcrypt';
import { Admin } from '../Model/AdminLogin.js';
import axios from 'axios';
import { register } from "../../../backend/Model/User.js"
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
            success: 'false'
        });
    }
}
//admin access user all data
export const getUserData = async (req, res) => {
    try {
        const response = await axios.get("http://localhost:8080/api/user/register/");
        return res.status(200).json({
            message: 'Admin access user  data',
            data: response.data,
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

// admin can add new user 
export const registerUser = async (req, res) => {
    try {

        // mongoose data
        const { reg_id, Team_name, Team_member, Member_one_name, Member_two_name, Email, Contect_no, Collage_name, Event_id, Event_type, Event_name, Field, Year, Payment } = req.body;


        if (reg_id == "", Team_name == "" || Team_member == "" || Member_one_name == "" || Collage_name == "" || Event_name == "" || Payment == "" || Event_type == "" || Field == "" || Email == "" || Contect_no == "" || Year == "")
            return res.json({
                message: "All fild are required for registration",
                success: false
            });


        // check email is exists
        let data = await register.find({ Email });
        if (data)
            return res.json({
                message: "User is exists",
                success: false
            });

        let reg_data = {
            reg_id,
            Team_name,
            Team_member,
            Member_one_name,
            Member_two_name,
            Email,
            Contect_no,
            Collage_name,
            Event_id,
            Event_type,
            Event_name,
            Field,
            Year,
            Payment
        }

        if (reg_data.Team_member == 1) {
            reg_data.Member_two_name = false; // if team member is 1 then member two name is not required
        }
        else if (reg_data.Team_member == 2) {
            if (reg_data.Member_two_name == "")
                return res.status(400).json({
                    message: 'Team member 2 is required.',
                    success: false
                });
        }

        // create new user
        data = await register.save(reg_data);

        // give data to mongoose
        res.json({
            message: "User registration successfully",
            data_info: data,
            success: true
        });
    } catch (error) {
        console.error("Error in register_data:", error);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}
//admin can access user last data
export const getLastUserData = async (req, res) => {
    try {
        const responese = await axios.get("http://localhost:8080/api/user/register/last");

        return res.status(200).json({
            message: 'Admin access user last data',
            data: responese.data.data,
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

// admin can update 
// admin though user data upadte
//small step: 1.id declare 2. user data ne variabel 3. new create 4.json  

export const updateUserData = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.get("http://localhost:8080/api/user/register/");
        if (!response) {
            return res.status(500).json({ message: 'some error', success: false })
        }
        const data = new response.findByIdAndUpdate(id);
        return res.status(200).json({
            message: 'Admin update user data',
            data,
            success: true
        })
    } catch (error) {
        return res.status(400).json({
            message: 'Invalid data',
            error_message: error,
            success: false
        });
    }
}
