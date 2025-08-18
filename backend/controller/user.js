import { login, register } from "../Model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv"; // env import
config({ path: ".env" }); // env path

// register data
export const register_data = async (req, res) => {
    try {
        // mongoose data
        const { reg_id, Team_name, Team_member, Member_one_name, Member_two_name, Email, Contect_no, Collage_name, Event_id, Event_type, Event_name, Field, Year, Payment, roles } = req.body;


        if (reg_id == "", Team_name == "" || Team_member == "" || Member_one_name == "" || Collage_name == "" || Event_name == "" || Payment == "" || Event_type == "" || Field == "" || Email == "" || Contect_no == "" || Year == "" || roles == "")
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
            Payment,
            roles
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
        data = await register.create(reg_data);

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

// get register data
export const getRegisterData = async (req, res) => {
    try {
        const getData = await register.find();
        if (!register_data) {
            return res.status(400).json({
                message: 'Invlaid data', success: false
            });
        }

        return res.status(200).json({
            message: 'Get register data successfully',
            data: getData,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Invalid data', success: false
        })
    }
}
// get register data by id

export const getRegisterDataById = async (req, res) => {
    try {
        const id = req.params.id;
        const getData = await register.findById(id);
        if (!register_data) {
            return res.status(400).json({
                message: 'Invlaid data', success: false
            });
        }

        return res.status(200).json({
            message: 'Get register data by id successfully',
            data: getData,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Invalid data', success: false
        })
    }
}

export const getLastUserData = async (req, res) => {
    try {
        const newData = await register.findOne().sort({ reg_id: -1 });
        return res.status(200).json({
            message: 'This is current data of user',
            data: newData,
            success: false
        });
    } catch (error) {
        return res.status(500).json({ message: 'Invalid Data', success: false });
    }
}


// log in data

export const login_data = async (req, res) => {
    const { Email, Password } = req.body

    if (Email == "" || Password == "")
        return res.json({
            message: 'All fild are required',
            success: 'false'
        });

    let user = await login.findOne({ Email });
    if (user)
        return res.json({
            message: 'User is exists...',
            success: 'false'
        });

    // bcrypt password
    const hashPassword = await bcrypt.hash(Password, 10);

    // give data to mongoose
    user = new login({ Email, Password: hashPassword })
    await user.save()

    //token 
    const token = jwt.sign({ data: user._id }, process.env.JWT);

    res.json({
        message: `Welcome for joining event`,
        token,
        success: 'true'
    })
}
