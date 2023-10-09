import { Model, Schema, Types, model } from "mongoose";

export interface IProduct {
  id: Number;
  nombre: String;
  precio: Number;
  productImage: String;
  category: String;

  cantidad: Number;
}
const ProductSchema = new Schema<IProduct>({
  id: {
    type: Number,
    required: [true, "Id is required"],
  },
  nombre: {
    type: String,
    required: [true, "Nombre is required"],
  },
  precio: {
    type: Number,
    required: [true, "precio is required"],
  },
  productImage: {
    type: String,
    required: [true, "productImage is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },

  cantidad: {
    type: Number,
    required: [true, "cantidad is required"],
  },
});

const Product: Model<IProduct> = model<IProduct>("Product", ProductSchema);
export default Product;
