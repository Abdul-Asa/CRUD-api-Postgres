import express from "express";
import { getUsers, addUsers, updateUser, deleteUser } from '../database/queries.js';

const router = express.Router();

//create
router.post('/users', addUsers);

//read
router.get('/users', getUsers);

//update
router.put('/users/:userid', updateUser);

//delete
router.delete('/users/:userid', deleteUser);

export default router;