import { Schema, Document, models, model } from "mongoose";

/**
 * user
 * products
 * subtotal
 * tax
 * total
 *  status
 *
 */

export enum OrderStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

export interface IOrder extends Document {
  user: Schema.Types.ObjectId;
  products: Schema.Types.ObjectId[];
  subtotal: number;
  tax: number;
  total: number;
  status: OrderStatus;
}

const OrderSchema = new Schema<IOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    subtotal: { type: Number, required: true },
    tax: { type: Number, required: true },
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: Object.values(OrderStatus),
      default: OrderStatus.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

const Order = models.Order || model("Order", OrderSchema);
export default Order;
