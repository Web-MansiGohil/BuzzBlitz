import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    Name:{type:String, required:true},
    Evnet_type:{type:String, required:true},
    start_time:{type:String,required:true},
    end_time:{type:String, required:true},
    Start_date:{type:Date,default:Date.now},
    End_date:{type:Date,default:Date.Start_date+1},
    Description:{type:String, required:true},
    Play_games:{type:String, required:true},
    Rules_regulations:{type:String, required:true},
    Location:{type:String, required:true},
    created_at:{type:Date, default:Date.now},
});

export const Event = mongoose.model("Event_data",eventSchema);