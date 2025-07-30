import mongoose from 'mongoose';

// registration model
const userSchema = new mongoose.Schema({
    Name: { type: String },
    Collage_name: { type: String },
    Event_type: { type: String },
    Event_name: { type: String },
    Select_Course: { type: String },
    Select_year: { type: String },
    Email: { type: String },
    Contect: { type: String },
    Password: { type: String },
    CreateAt: { type: Date, default: Date.now }
});

export const register = mongoose.model("register", userSchema);

// login model
const userLogin = new mongoose.Schema({
    Name : {type:String},
    Email : {type : String},
    Password : {type : String},
    Event_type : {type : String},
    CreateAt : {type : Date,default : Date.now}
});

export const login = mongoose.model("logIn" , userLogin);
