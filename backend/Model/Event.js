import mongoose, { skipMiddlewareFunction } from 'mongoose';

const eventSchema = new mongoose.Schema({
    Event_id: { type: String, required: true, unique: true },
    Event_name: { type: String, required: true },
    Event_type: { type: String, required: true },
    Start_time: { type: String, required: true },
    End_time: { type: String, required: true },
    Date: { type: String, required: true },
    Description: { type: String, required: true },
    How_it_works: { type: String },
    Skill_Developed: {type:String},
    GamePlay: { type: String },
    How_to_play: { type: String, required: true },
    Rules_regulations: { type: String, required: true },
    photo_path: { type: String, required: true },
    Name: { type: String, required: true },
    Designation: { type: String, required: true },
    event_image1: { type: String, required: true },
    event_image2: { type: String, required: true },
    Location: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});

export const Event = mongoose.model("Event_data", eventSchema);