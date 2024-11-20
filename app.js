import express from "express"
import mongoose from "mongoose";
import router from "./routers/router.js"

const PORT = 5000;

const DB_URL = "mongodb://db:27017/backend";

const app = express();

app.use(express.json())

app.use('/api', router)

async function startApp() {
    try{
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log("server running on " + PORT));
    } catch(e){
        console.log(e);
    }
}

startApp()



