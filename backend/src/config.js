import { config } from "dotenv";
config();

export const MONGODB_URI = process.env.MONGODB_URL || "mongodb+srv://hugodiazcasado31:Carton1313@autoescuelafast.dwurlay.mongodb.net/unforgettable-date";
export const PORT = process.env.PORT || 4000;
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "UnforgettableDate2024";
