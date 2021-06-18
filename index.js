import express from 'express';
import cors from 'cors';
import multer from "multer";
import route from "./routes/route.js";
import client from "./database/index.js";
import bodyParser from "body-parser"


const app = express();
const port = process.env.PORT || "3000";
const upload = multer();

//middlewares
app.use(cors());
app.use(upload.array()); //for form data
app.use(bodyParser.json()); //for json
app.use(bodyParser.urlencoded({extended: true})); //for form data
app.use((req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}); //console log the full url

client.connect();

app.get("/",(req,res)=>{
    res.json({
        message: "Its been a while",
        status: "active"
    });
});

app.use("/bookstore",route);


app.listen(port,()=>{
    console.log(`The server is running on port ${port}.`)
});