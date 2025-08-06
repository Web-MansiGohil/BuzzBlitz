import { login, register } from "../Model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv"; // env import
// register data
export const register_data = async (req, res) => {
    // mongoose data
    const { Team_name,
        Team_id,
        Team_member,
        Member_one_name,
        Member_two_name,
        Email,
        Contect,
        Collage_name,
        Event_type,
        Event_name,
        Select_Course,
        Select_year } = req.body;

    if (Team_name == "" || Team_member == "" || Team_id == "" || Member_one_name == "" || Member_two_name == "" || Collage_name == "" || Event_name == "" || Select_Course == "" || Event_type == "" || Select_year == "" || Email == "" || Contect == "")
        if (Name == "" || Email == "")
            return res.json({
                message: "All fild are required for registration",
                success: false
            });

    // check email is exists
    let data = await register.findOne({ Email });
    if (data)
        return res.json({
            message: "User is already exists",
            success: false
        });

    if (data.Team_member == 1) {
        data = await register.create({
            Team_name,
            Team_id,
            Team_member,
            Member_one_name,
            Email,
            Contect,
            Collage_name,
            Event_type,
            Event_name,
            Select_Course,
            Select_year,
        });
    }
    else {
        data = await register.create({
            Team_name,
            Team_id,
            Team_member,
            Member_one_name,
            Member_two_name,
            Email,
            Contect,
            Collage_name,
            Event_type,
            Event_name,
            Select_Course,
            Select_year,
        });
    }
    // give data to mongoose

    // testing
    res.json({
        message: "User registration successfully",
        data,
        success: true
    });
}

// log in data

export const login_data = async (req, res) => {
    const { Email, Password } = req.body

    if (Email == "" || Password == "" || Name == "" || Event_type == "")
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
    let user_data = new login({ Email, Password: hashPassword })
    await user_data.save()

    //token 
    const token = jwt.sign({ data: user_data._id }, process.env.JWT);

    res.json({
        message: `Welcom ${user_data.Name} for joining ${user_data.Event_type} event`,
        token,
        success: 'true'
    })
}
