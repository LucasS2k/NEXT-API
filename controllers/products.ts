import { Request, Response } from "express";
import Product, { IProduct } from "../models/product";
export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.status(200).json({ products });
};
