import mongoose from 'mongoose';

// judges model
const judgesSchema = new mongoose.Schema({
    judges_id: { type: String, required: true, unique: true },
    photo_path: { type: String, required: true },
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Manage_event: { type: String, required: true },
    Contect_no: { type: String, required: true },
    Designation: { type: String, required: true },
    Schedule_day: { type: String, required: true },
    userId : {type:String},
    Created_at: { type: Date, default: Date.now }
});

export const judges = mongoose.model('Judges', judgesSchema);