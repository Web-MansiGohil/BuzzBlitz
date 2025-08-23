import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import userdata from "./Router/user.js"; //import router 
import eventInfo from "./Router/event.js"; //import event router
import bodyParser from "express"; // json format
import { config } from "dotenv"; // env import
import judgeRouter from './Router/judge.js';
import Admin_router from "./Router/admin_login.js"
import { v2 as cloudinary } from 'cloudinary';
import { isAuth } from './Middleware/isAuth.js';
import Schedule_router from "./Router/schedule.js";

const game = express();

//home router 
game.get("/", (req, res) => {
    res.json({
        message: "For testing connection"
    });
});
// env path
config({ path: ".env" });
game.use(cors());

// middleware
game.use(express.json());

game.use(express.urlencoded({ extended: true }));

//user router
game.use("/api/user", userdata);

// event router
game.use("/api/event", eventInfo);

// judge router
game.use("/api", judgeRouter);

//admin router
game.use("/api/admin", Admin_router);

//schedule router
game.use("/api/schedule", isAuth, Schedule_router);

// cloudinary images
//  Configure Cloudinary
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const imagePath = path.join(__dirname, "Images");
// const imageFiles = fs.readdirSync(imagePath).filter(file =>
//     file.match(/\.(jpg|jpeg|png|gif)$/i)
// );

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// });
// for (const file of imageFiles) {
//     const filePath = path.join(imagePath, file);

//     cloudinary.uploader.upload(filePath, (err, result) => {
//         if (err) {
//             console.error(`❌ Failed to upload ${file}:`, err);
//         } else {
//             console.log(`✅ Uploaded ${file}:`, result.secure_url);
//         }
//     });
// }

// mongodb connection
mongoose.connect(process.env.MONGOOSE_URL, {
    dbName: "EventHub_Project"
})
    .then(() => {
        console.log("MongoDB is connected with project");
    })
    .catch((er) => {
        console.log("Some error", er.message);
    });

// server port
const port = process.env.PORT;
game.listen(port, () => { console.log(`Server is running in ${port}...`) });
