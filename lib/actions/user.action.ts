"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import Order from "@/database/order.model";
import Address from "@/database/address.model";

// Create user
export const createUser = async (userData: CreateUserParams) => {
  try {
    await connectToDatabase();
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.log("Error creating user", error);
    throw error;
  }
};

// Delete user and all related data
export const deleteUser = async (params: DeleteUserParams) => {
  try {
    await connectToDatabase();
    const { clerkId } = params;
    const user = await User.findOneAndDelete({ clerkId });
    if (!user) {
      throw new Error("User not found");
    }

    // delete user favorites, orders, addresses

    await Order.deleteMany({ userId: user._id });
    await Address.deleteMany({ userId: user._id });
    const delteduser = await User.findByIdAndDelete(user._id);
    return delteduser;
  } catch (error) {
    console.log("Error deleting user", error);
    throw error;
  }
};

// Update user
export async function updateUser(params: UpdateUserParams) {
  try {
    await connectToDatabase();
    const { clerkId, updateData, path } = params;

    await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    revalidatePath(path);
  } catch (err) {
    console.log(err);
    throw err;
  }
}
