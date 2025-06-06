// models/Salon.js
import mongoose from "mongoose";

const SalonSchema = new mongoose.Schema({
  id: { type: Number },
  ime: { type: String, required: true },
  urlSlug: { type: String, required: true, unique: true },
  radnoVreme: {
    od: { type: String, default: "09:00" },
    do: { type: String, default: "20:00" },
  },
  email: { type: String },
  telefon: { type: String },
  bookingLink: { type: String },
});

export default mongoose.models.User || mongoose.model("User", SalonSchema);
