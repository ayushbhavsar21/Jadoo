import connectDB from "../src/db/index.js";
import dotenv from "dotenv";
import { app, port } from "./app.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(port , ()=>{
        console.log(`Server is running at: http://localhost:${port}`)
    })
})
.catch((error)=>{
    console.log(error);
})