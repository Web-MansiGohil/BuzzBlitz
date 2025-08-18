import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Admin_router from "./Router/admin_login.js";
import { config } from 'dotenv';
const admin = express();

config({ path: ".env" });
// home router
admin.get('/', (req, res) => {
    res.send('Welcome to the Admin Backend');
});

// Middleware
admin.use(bodyParser.json());

//router
admin.use("/api/admin", Admin_router);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, {
    dbName: 'EventHub_Project',
}).then(() => {
    console.log("MongoDb connected successfully");
}).catch((er) => {
    console.log("Error connecting to MongoDB:", er);
})

//Port
const port = process.env.PORT;
admin.listen(port, () => { console.log(`Server is running on port ${port}`) });