import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || "3000";

//middlewares
app.use(cors());
app.use(express.json());
app.use((req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
});

app.get("/",(req,res)=>{
    res.json({
        message: "Its been a while",
        status: "active"
    });
});

// app.use("/home",require("./routes/route"));


app.listen(port,()=>{
    console.log(`The server is running on port ${port}.`)
});