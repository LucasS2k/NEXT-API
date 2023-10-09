import { Router } from "express";
import { getProducts } from "../controllers/products";
import { createProduct } from "../controllers/products";
const router = Router();
router.post("/products", createProduct);
router.get("/", getProducts);

export default router;
