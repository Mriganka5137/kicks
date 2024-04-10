import { Schema } from "mongoose";
import { IUser } from "@/mongodb";

export interface CreateUserParams {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}

export interface UpdateUserParams {
  clerkId: string;
  updateData: Partial<IUser>; // Partial is used to make all fields optional
  path: string;
}

export interface DeleteUserParams {
  clerkId: string;
}
