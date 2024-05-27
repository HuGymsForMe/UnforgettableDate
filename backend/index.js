import mongoose from "mongoose";
import app from "./src/app.js";
import { MONGODB_URI, PORT } from "./src/config.js"; // Corrección aquí

// ******* CONEXIÓN A LA DB DE MONGO ******* //
export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        app.listen(PORT, () => {
            console.log(`App is listening on PORT ${PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
}

connectDB();
