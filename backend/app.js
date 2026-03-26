import blogRoutes from "./routes/blogRoutes.js";
import programRoutes from "./routes/programRoutes.js";
import wildlifeRoutes from "./routes/wildlifeRoutes.js";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/blog", blogRoutes);
app.use("/program", programRoutes);
app.use("/wildlife", wildlifeRoutes);
app.use("/", userRoutes);

export default app;