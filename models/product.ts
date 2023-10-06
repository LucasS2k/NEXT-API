import { Model, Schema, Types, model } from "mongoose";

export interface IProduct {
  id: Number;
  title: String;
  category: String;
  image: String;
  price: Number;
  quantity: Number;
}
const ProductSchema = new Schema<IProduct>({
  id: {
    type: Number,
    required: [true, "Id is required"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },

  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
  },
});

const Product: Model<IProduct> = model<IProduct>("Product", ProductSchema);
export default Product;
