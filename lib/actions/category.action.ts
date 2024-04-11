"use server";

import Category from "@/database/category.model";
import { connectToDatabase } from "../mongoose";

export const getAllCategories = async () => {
  try {
    await connectToDatabase();
    const categories = await Category.find({});
    return categories;
  } catch (error) {
    console.log("Error in getAllCategories: ", error);
    throw error;
  }
};
