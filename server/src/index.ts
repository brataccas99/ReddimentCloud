import * as dotenv from "dotenv"
import express, { Express } from "express"

dotenv.config()

import { connectToDatabase } from "./db"
import fetchDbRouter from "./routes/routes"

const port = process.env.PORT || 443
const app: Express = express()

app.use(express.json())

app.use("/api", fetchDbRouter)

connectToDatabase()

app.listen(port, () => {
  console.info(`⚡️ Server is listening at ${port}`)
})
