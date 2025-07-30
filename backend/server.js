import express from 'express';
import mongoose from 'mongoose';
import userdata from "./Router/user.js"; //import router 
import bodyParser from "express"; // json format
import { config } from "dotenv"; // env import

const game = express();

//home router 
game.get("/", (req, res) => {
    res.json({
        message: "For testing connection"
    })
});
// env path
config({ path: ".env" });

// print data to json format
game.use(bodyParser.json());

//router
game.use("/api/user", userdata);

// mongodb connection
mongoose.connect(process.env.MONGOOSE_URL, {
    dbName: "EventHub_Project"
})
    .then(() => {
        console.log("MongoDB is connected with project");
    })
    .catch((er) => {
        console.log(er.message);
    });

// server port
const port = process.env.PROT;
game.listen(port, () => { console.log(`Server is running in ${port}...`) });
