import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    Name:{type:String, required:true},
    Evnet_type:{type:String, required:true},
    
});