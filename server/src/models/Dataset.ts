import mongoose from "mongoose"

import { Dataset } from "../types"

const DataseSchema = new mongoose.Schema<Dataset>({
  comment: String,
  probabilities_acceptable: String,
  probabilities_hate: String,
  probabilities_offensive: String,
  probabilities_violent: String,
})

export default mongoose.model<Dataset>("dataset", DataseSchema)
