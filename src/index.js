import express from "express"
import dotenv from "dotenv"
import dbConfig from "./db/dbConfig.js";

dotenv.config();
dbConfig()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})