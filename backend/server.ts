import express from "express";
import cors from "cors";
<<<<<<< HEAD
import router from "./routes/condidate.routes";
=======
>>>>>>> cc1c08d (start backend)

const PORT = 6000;
const app = express();

// add middelwares
app.use(cors());
app.use(express.json());

// Routes
<<<<<<< HEAD
app.use("/api/condidate", router);
=======
>>>>>>> cc1c08d (start backend)

// create the server
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
