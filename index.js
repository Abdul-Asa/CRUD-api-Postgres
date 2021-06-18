import express from 'express';
import cors from 'cors';
import route from "./routes/route.js";
import client from "./database/index.js";


const app = express();
const port = process.env.PORT || "3000";

//middlewares
app.use(cors());
app.use(express.json());
app.use((req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
});
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