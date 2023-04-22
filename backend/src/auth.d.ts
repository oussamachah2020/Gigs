import { candidateType } from "./Controllers/candidate_controller";

declare global {
  namespace Express {
    interface Request {
      candidateId?: candidateType["candidateId"];
    }
  }
}
