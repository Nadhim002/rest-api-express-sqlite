import express from "express"
import { createPost , retrieveAll , retrieveAllPublished  , findPost , UpdatePost , deletePost , deleteAll}  from "../controllers/tutorial.controllers.js"


const router = express.Router()

// router.get("/" , ( req , res  ) => {  res.status(200).json({msg : "Hello World"}) } )

// Testing
// router.get("/" , createPost )


// Create a new Tutorial
router.post("/",  createPost )

// // Retrieve all Tutorials
router.get("/",  retrieveAll )

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


