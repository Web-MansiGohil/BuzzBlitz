import mongoose from 'mongoose';

// registration model
const userSchema = new mongoose.Schema({
    Team_id: { type: Number },
    Team_name: { type: String, required: true },
    Team_member: { type: Number },
    Member_one_name: { type: String },
    Member_two_name: { type: String },
    Email: { type: String },
    Contect: { type: String },
    Collage_name: { type: String },
    Event_type: { type: String },
    Event_name: { type: String },
    Select_Course: { type: String },
    Select_year: { type: String },
    CreateAt: { type: Date, default: Date.now },
    userID: { type: String }
});

export const register = mongoose.model("register", userSchema);

// login model
const userLogin = new mongoose.Schema({
    Email: { type: String },
    Password: { type: String },
    CreateAt: { type: Date, default: Date.now }
});

export const login = mongoose.model("logIn", userLogin);
