import express from "express";
import cors from "cors";
import router from "./routes/candidate.routes";
import * as dotenv from "dotenv";
import smsRouter from "./routes/sms.routes";

dotenv.config();

const PORT = 6000;
const app = express();

// add middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/candidate", router);
app.use("/api/sms", smsRouter);

// create the server
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
