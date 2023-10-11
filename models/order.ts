import { Model, Schema, Types, model } from "mongoose";

interface IItem {
  id: Number;
  precio: Number;
  quantity: Number;
  nombre: String;
}
export interface IOrder {
  createdAt: Date;
  user: Types.ObjectId;
  price: Number;
  shippingCost: Number;
  items: IItem[];
  status: String;
  total: Number;
}

const OrderSchema = new Schema<IOrder>({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  shippingCost: {
    type: Number,
    required: true,
  },
  items: {
    type: [
      {
        id: {
          type: Number,
          required: true,
        },
        precio: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        nombre: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const Order: Model<IOrder> = model<IOrder>("Order", OrderSchema);

export default Order;
