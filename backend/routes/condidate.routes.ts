import { Router } from "express";
import {
  createCondidate,
  loginCondidate,
} from "../Controllers/condidate_controller";

const router = Router();

router.post("/create", createCondidate).post("/login", loginCondidate);
export default router;
