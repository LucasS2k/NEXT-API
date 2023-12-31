import { Router } from "express";
import { createOrder, getOrders } from "../controllers/orders";
import validarJWT from "../middlewares/JWTvalidate";
import { recolectarErrores } from "../middlewares/errorCollector";
import { isVerified } from "../middlewares/verifiedValidate";
import { check } from "express-validator";

const orderRouter = Router();

orderRouter.get("/all", [validarJWT, recolectarErrores], getOrders);

orderRouter.post(
  "/create",
  [
    validarJWT,
    isVerified,
    check("price", "El precio es obligatorio").not().isEmpty(),
    check("shippingCost", "El consto de envío es obligatorio").not().isEmpty(),
    check("total", "El precio total es obligatorio").not().isEmpty(),
    check("shippingDetails", "Los detalles de envío son obligatorios")
      .not()
      .isEmpty(),
    check("items", "El array de productos es obligatorio").not().isEmpty(),
    recolectarErrores,
  ],
  createOrder
);

export default orderRouter;
