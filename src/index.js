import express from "express"
import dotenv from "dotenv"
import dbConfig from "./db/dbConfig.js";
import cors from "cors"
import cookieParser from "cookie-parser"

dotenv.config();

const app = express()

const port = process.env.PORT

dbConfig()
    .then(() => {
        app.listen(port, () => {
            console.log(`App listening on port ${port}`)
        })
    })
    .catch(err => console.log("MongoDb Connection failed:", err))


app.use(cors({
    origin: process.env.CORSORIGIN
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(cookieParser())