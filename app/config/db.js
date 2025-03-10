import sqlite from "sqlite3"
import path from 'path'
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const relativePath = '../database/mydata.db'
const absolutePath = path.resolve(__dirname, relativePath)

// This is logging records
const sql3 = sqlite.verbose()


const DB = new sqlite.Database( absolutePath , sqlite.OPEN_READWRITE , connected )

function  connected( err ){

    if(err){
        console.log( err.message )
        return
    }

    console.log("Connected to DB Sucessfully")

}

const sqlQueryForTableCreation = 
    `
    CREATE TABLE IF NOT EXISTS tutorials (
    id INTEGER PRIMARY KEY AUTOINCREMENT ,
    title TEXT NOT NULL,
    description TEXT,
    published INTEGER DEFAULT 0)
    `

DB.exec( sqlQueryForTableCreation )

export default DB   