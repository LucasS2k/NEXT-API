import { Request, Response } from "express";
import Product from "../models/product";
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    console.error("Error al obtener los productos", error);
    res.status(500).json({ error: "Error en servidor" });
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
      .json({ message: "Producto creado con exito", product: newProduct });
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ error: "Error en servidor" });
  }
};
