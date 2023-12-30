import mongoose from "mongoose"
import { Request, Response } from "express"

import {
  BarChartImageModel,
  BarGraphImageModel,
  DatasetModel,
  HistogramImageModel,
  ScatterPlotImageModel,
  WordCloudImageModel,
} from "../models/"

export const getDataset = async (req: Request, res: Response) => {
  try {
    const dataset = await DatasetModel.find({}).select({ _id: 0 })

    if (dataset === null) {
      return res.status(404).send({ success: false, statusCode: 404, message: "Dataset not found" })
    }

    return res.status(200).send({ success: true, data: dataset })
  } catch (err: any) {
    console.error(err.stack)
    return res.status(500).send({ success: false, statusCode: 500, message: `Error: ${err}` })
  }
}

export const getAllCollections = async (req: Request, res: Response) => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray()

    if (collections === null) {
      return res.status(404).send({ success: false, statusCode: 404, message: "Collections not found" })
    }

    return res.status(200).send({ success: true, data: collections })
  } catch (err: any) {
    console.error(err.stack)
    return res.status(500).send({ success: false, statusCode: 500, message: `Error: ${err}` })
  }
}

export const getBarChartImage = async (req: Request, res: Response) => {
  try {
    const image = await BarChartImageModel.find({}).select({ chart_type: 1, image_base64: 1, _id: 0 })

    if (image === null) {
      return res.status(404).send({ success: false, statusCode: 404, message: "Collections not found" })
    }

    return res.status(200).send({ success: true, data: image })
  } catch (err: any) {
    console.error(err.stack)
    return res.status(500).send({ success: false, statusCode: 500, message: `Error: ${err}` })
  }
}

export const getBarGraphImage = async (req: Request, res: Response) => {
  try {
    const image = await BarGraphImageModel.find({}).select({ chart_type: 1, image_base64: 1, _id: 0 })

    if (image === null) {
      return res.status(404).send({ success: false, statusCode: 404, message: "Collections not found" })
    }

    return res.status(200).send({ success: true, data: image })
  } catch (err: any) {
    console.error(err.stack)
    return res.status(500).send({ success: false, statusCode: 500, message: `Error: ${err}` })
  }
}

export const getHistogramImage = async (req: Request, res: Response) => {
  try {
    const image = await HistogramImageModel.find({}).select({ chart_type: 1, image_base64: 1, _id: 0 })

    if (image === null) {
      return res.status(404).send({ success: false, statusCode: 404, message: "Collections not found" })
    }

    return res.status(200).send({ success: true, data: image })
  } catch (err: any) {
    console.error(err.stack)
    return res.status(500).send({ success: false, statusCode: 500, message: `Error: ${err}` })
  }
}

export const getScatterPlotImage = async (req: Request, res: Response) => {
  try {
    const image = await ScatterPlotImageModel.find({}).select({ chart_type: 1, image_base64: 1, _id: 0 })

    if (image === null) {
      return res.status(404).send({ success: false, statusCode: 404, message: "Collections not found" })
    }

    return res.status(200).send({ success: true, data: image })
  } catch (err: any) {
    console.error(err.stack)
    return res.status(500).send({ success: false, statusCode: 500, message: `Error: ${err}` })
  }
}

export const getWordCloudImage = async (req: Request, res: Response) => {
  try {
    const image = await WordCloudImageModel.find({}).select({ chart_type: 1, image_base64: 1, column: 1, _id: 0 })

    if (image === null) {
      return res.status(404).send({ success: false, statusCode: 404, message: "Collections not found" })
    }

    return res.status(200).send({ success: true, data: image })
  } catch (err: any) {
    console.error(err.stack)
    return res.status(500).send({ success: false, statusCode: 500, message: `Error: ${err}` })
  }
}
