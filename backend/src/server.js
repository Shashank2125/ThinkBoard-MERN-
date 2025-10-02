import express from "express";
import  notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import path from "path";
import ratelimiter from "./middleware/rateLimiter.js";
import cors from "cors";
dotenv.config();
const app=express();
const PORT=process.env.PORT || 5001;
const __dirname=path.resolve()
//if not in production add cors config because of two domain
if(process.env.NODE_ENV!=="production"){
app.use(cors({
  origin:"http://localhost:5173",
}));
}
app.use(express.json());//this middleware will parse JSON bodies: req.body
//middleware
app.use(ratelimiter);



//it is called just when we req get,put,post or delete
//it console logs before it the req and the URL
//our simple custom middleware
//app.use((req,res,next)=>{
   // console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
  //  next();
//})

app.use("/api/notes",notesRoutes);
//if in produciton add this to make two doamin into single domain for production
if(process.env.NODE_ENV==="production"){
//make the dist folder in frontend static
app.use(express.static(path.join(__dirname,"../frontend/dist")))
//if the 
app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
});
}

connectDB().then(()=>{
//we take the endpoints from notes routes and prefix them with /api/notes
app.listen(PORT, ()=>{
    console.log("server started on Port:",PORT);
  });
});
//what is endpoint
//endpoint is a combination of a URL + HTTP method that
//