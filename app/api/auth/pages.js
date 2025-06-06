// pages/api/saloni.js
import dbConnect from "@/lib/mongoose";
import Salon from "@/models/Salon";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const saloni = await Salon.find({});
    return res.status(200).json(saloni);
  }
  if (req.method === "POST") {
    const { ime, urlSlug, radnoVreme, bookingLink } = req.body;
    try {
      const noviSalon = await Salon.create({
        ime,
        urlSlug,
        radnoVreme,
        bookingLink,
      });
      return res.status(201).json(noviSalon);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  return res.status(405).json({ error: "Method not allowed" });
}
