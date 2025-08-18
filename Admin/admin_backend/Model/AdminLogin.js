import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    admin_id:{type: String, required: true, unique: true},
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true},
    password: { type: String, required: true }
});

export const Admin = mongoose.model("Admin_Data", adminSchema);
