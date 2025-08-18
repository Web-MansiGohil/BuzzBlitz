import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Admin_router from "./Router/admin_login.js";

const admin = express();

// home router
admin.get('/', (req, res) => {
    res.send('Welcome to the Admin Backend');
});

// Middleware
admin.use(bodyParser.json());

//router
admin.use("/api/admin", Admin_router);

// MongoDB connection
mongoose.connect("mongodb+srv://eventhub499:HkhXy1bjnVqOASCy@cluster0.izeuvu5.mongodb.net/", {
    dbName: 'EventHub_Project',
}).then(() => {
    console.log("MongoDb connected successfully");
}).catch((er) => {
    console.log("Error connecting to MongoDB:", er);
})

//Port
const port = 8000;
admin.listen(port, () => { console.log(`Server is running on port ${port}`) });