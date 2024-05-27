import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import categoryRoutes from "./routes/category.routes.js";
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", categoryRoutes);
app.use("/api", userRoutes);
app.use("/api", taskRoutes);

export default app;