import express from "express";
import morgan from "morgan";
// Routes
import languageRoutes from "./routes/language.routes";

const app = express();

// settings
app.set("port",4000);

// Middlewares (funciones que se ejecutan antes de que llegue a la ruta)
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/languages",languageRoutes);

export default app;
