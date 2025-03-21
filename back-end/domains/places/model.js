import { model, Schema } from "mongoose";

const placeSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  title: String,
  city: String,
  photos: [String],
  description: String,
  extras: String,
  perks: [String],
  price: Number,
  checkin: String,
  checkout: String,
  guests: Number,
});

export default model("Place", placeSchema);
