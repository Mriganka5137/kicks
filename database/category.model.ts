import { Document, model, models, Schema } from "mongoose";

export interface ICategory extends Document {
  name: string;
  description: string;
  image: string;
  parentCategory?: Schema.Types.ObjectId;
  subCategories?: Schema.Types.ObjectId[];
  products: Schema.Types.ObjectId[];
}

const CategorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    parentCategory: { type: Schema.Types.ObjectId, ref: "Category" },
    subCategories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  {
    timestamps: true,
  }
);

const Category = models.Category || model("Category", CategorySchema);
export default Category;
