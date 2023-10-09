import { Request, Response } from "express";
import Product from "../models/product";
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    console.log("error en create");
    const { id, nombre, precio, productImage, category, cantidad } = req.body;
    const newProduct = new Product({
      id,
      nombre,
      precio,
      productImage,
      category,
      cantidad,
    });
    await newProduct.save();

    res
      .status(201)
      .json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
