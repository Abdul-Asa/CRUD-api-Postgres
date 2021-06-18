import express from "express";
import { getbooks, createbooks, updatebook, getbook, deletebook } from '../database/queries.js';

const router = express.Router();

router.get("/",(req,res)=>{
    res.json("Welcome to CRUD API bookstore");
})

//create
router.post('/books', createbooks);

//read
router.get('/books', getbooks);

router.get('/books/:id',getbook);

//update
router.put('/books/:id', updatebook);

//delete
router.delete('/books/:id', deletebook);

export default router;