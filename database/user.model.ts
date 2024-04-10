import { Schema, models, model, Document } from "mongoose";

/**
 * _id
 * clerkId
 * username
 * name
 * email
 * password
 * Picture
 * Address
 * Favourites
 * Orders
 * role
 * Phone
 *
 */
export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface IUser extends Document {
  clerkId: string;
  username: string;
  name: string;
  dob?: Date;
  email: string;
  password?: string;
  picture?: string;
  address?: Schema.Types.ObjectId;
  favourites?: Schema.Types.ObjectId[];
  orders?: Schema.Types.ObjectId[];
  role: Role;
  phone?: number;
}

const UserSchema = new Schema<IUser>(
  {
    clerkId: { type: String, required: true },
    username: { type: String, required: true },
    name: { type: String, required: true },
    dob: { type: Date },
    email: { type: String, required: true },
    password: { type: String },
    picture: { type: String },
    address: { type: Schema.Types.ObjectId, ref: "Address" },
    favourites: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
    role: { type: String, enum: Object.values(Role), default: Role.USER },
    phone: { type: Number },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);
export default User;
