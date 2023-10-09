import { Router } from "express";
import { getProducts } from "../controllers/products";
import { createProduct } from "../controllers/products";
const productsRouter = Router();
productsRouter.post("/create", createProduct);
productsRouter.get("/all", getProducts);

export default productsRouter;
