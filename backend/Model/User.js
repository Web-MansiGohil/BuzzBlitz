import mongoose from 'mongoose';

// registration model
const userSchema = new mongoose.Schema({
    reg_id: { type: Number, required: true, unique: true },
    Team_name: { type: String, required: true },
    Team_member: { type: Number, required: true },
    Member_one_name: { type: String, required: true },
    Member_two_name: { type: String },
    Email: { type: String, required: true },
    Contect_no: { type: String, required: true },
    Collage_name: { type: String, required: true },
    Event_id: { type: String, required: true },
    Event_type: { type: String, required: true },
    Event_name: { type: String, required: true },
    Field: { type: String, required: true },
    Year: { type: String, required: true },
    Payment: { type: String, default: "300" },
    roles: { type: String, enum: ["user", "admin"], default: "user" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'login', required: true },
    CreateAt: { type: Date, default: Date.now },
});

export const register = mongoose.model("register", userSchema);

// login model
const userLogin = new mongoose.Schema({
    Email: { type: String, required: true },
    Password: { type: String, required: true }
});

export const login = mongoose.model("logIn", userLogin);
