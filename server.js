import express from "express"
import router from "./app/routes/tutorial.routes.js"

import dotenv from "dotenv"
import logger  from "./app/middleware/logger.js"

// Configuring .env variables
dotenv.config()
const port = process.env.PORT  || 8080

// Creating express app
const app = express() 

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.use( logger )

app.use( "/api/tutorials" , router )

app.listen( port , () =>  console.log(`Server running on http://localhost:${port}`) )