import { Router } from "express"

import {
  getDataset,
  getAllCollections,
  getBarChartImage,
  getBarGraphImage,
  getHistogramImage,
  getScatterPlotImage,
  getWordCloudImage,
} from "./handler"

const fetchDbRouter = Router()

fetchDbRouter.get("/dataset", getDataset)
fetchDbRouter.get("/barChart", getBarChartImage)
fetchDbRouter.get("/barGraph", getBarGraphImage)
fetchDbRouter.get("/histogram", getHistogramImage)
fetchDbRouter.get("/scatter", getScatterPlotImage)
fetchDbRouter.get("/wordCloud", getWordCloudImage)
fetchDbRouter.get("/collections", getAllCollections)

export default fetchDbRouter
