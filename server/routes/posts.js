import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

// https://localhost:5000/posts
// posts = prefix
router.get("/", getPosts);
router.post("/", createPost);

export default router;
