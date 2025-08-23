import mongoose from 'mongoose';

export const scheduleSchema = new mongoose.Schema({
    schedule_id: { type: String, required: true, unique: true },
    Event_id: { type: String, require: true },
    Event_name: { type: String, require: true },
    Event_type: { type: String, required: true },
    Start_time: { type: String, required: true },
    End_time: { type: String, required: true },
    Date: { type: String, require: true },
    Location: { type: String, require: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'login', required: true },
    Create_At: { type: Date, default: Date.now }
});

export const schedule_data = mongoose.model("schedule", scheduleSchema);