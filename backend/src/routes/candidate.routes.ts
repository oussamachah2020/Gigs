import { Router } from "express";
import {
  createCandidate,
  loginCandidate,
  verifyCandidate,
} from "../Controllers/candidate_controller";
import authMiddleware from "../middleware/user.middelware";

const router = Router();

router
  .post("/create", createCandidate)
  .post("/login", loginCandidate)
  .post("/verify", authMiddleware, verifyCandidate);
export default router;
