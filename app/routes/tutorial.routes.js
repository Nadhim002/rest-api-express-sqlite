import express from "express"
import { createPost , findAll , retrieveAllPublished  , findPost , UpdatePost , deletePost , deleteAll}  from "../controllers/tutorial.controllers.js"

const router = express.Router()

// Create a new Tutorial
router.post("/",  createPost )

// // Retrieve all Tutorials with condition
router.get("/",  findAll )

// Retrieve all published Tutorials
router.get("/published", retrieveAllPublished )

// Retrieve a single Tutorial with id
router.get("/:id", findPost )

// Update a Tutorial with id
router.put("/:id", UpdatePost )

// Delete a Tutorial with id
router.delete("/:id", deletePost )

// Delete all Tutorials
router.delete("/", deleteAll )

export default router