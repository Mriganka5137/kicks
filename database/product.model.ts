import { Document, Schema, models, model } from "mongoose";

/**
 * name
 * description
 * price
 * categories
 * images
 * size
 * color
 * stock
 * reviews
 * averageRating
 * brand
 *
 */

interface ProductVariant {
  size: string;
  color: string;
  stock: number;
}

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  categories: Schema.Types.ObjectId[];
  images: string[];
  variants: ProductVariant[];
  reviews?: Schema.Types.ObjectId[];
  averageRating?: number;
  brand: string;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    images: [{ type: String }],
    variants: [
      {
        size: { type: String, required: true },
        color: { type: String, required: true },
        stock: { type: Number, required: true, default: 0 },
      },
    ],

    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    averageRating: { type: Number },
    brand: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || model("Product", ProductSchema);
export default Product;
