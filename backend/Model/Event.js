import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    Event_name: { type: String, required: true },
    Event_type: { type: String, required: true },
    start_time: { type: String, required: true },
    end_time: { type: String, required: true },
    Start_date: { type: String },
    End_date: { type: String },
    Description: { type: String, required: true },
    Play_games: { type: String, required: true },
    Rules_regulations: { type: String, required: true },
    Location: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});

export const Event = mongoose.model("Event_data", eventSchema);