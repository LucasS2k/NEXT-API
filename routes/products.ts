import { Router } from "express";
import { getProducts } from "../controllers/products";
import { createProduct } from "../controllers/products";
const productsRouter = Router();
productsRouter.post("/products", createProduct);
productsRouter.get("/", getProducts);

export default productsRouter;
