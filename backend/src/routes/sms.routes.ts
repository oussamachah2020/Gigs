import { Router } from "express";
import sendSMS from "../Controllers/sms.controller";

const smsRouter = Router();

smsRouter.post("/", sendSMS);
export default smsRouter;
