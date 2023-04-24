import { Router } from "express";
import {
  createCandidate,
  getUserDataWithToken,
  loginCandidate,
  verifyCandidate,
} from "../Controllers/candidate_controller";
import authMiddleware from "../middleware/user.middelware";

const router = Router();

router
  .post("/create", createCandidate)
  .post("/login", loginCandidate)
  .post("/verify", authMiddleware, verifyCandidate)
  .get("/", authMiddleware, getUserDataWithToken);
export default router;
