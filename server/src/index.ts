import * as dotenv from "dotenv"
import express, { Express } from "express"
import { connectToDatabase } from "./db"
import fetchDbRouter from "./routes/routes"
import cors from "cors"
dotenv.config()

const port = process.env.PORT || 443
const app: Express = express()

app.use(cors())

app.use(express.json())

app.use("/api", fetchDbRouter)

connectToDatabase()

app.listen(port, () => {
  console.info(`⚡️ Server is listening at ${port}`)
})
