import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface JwtPayload {
  candidateId: number;
  iat: number;
  exp: number;
}

export interface CustomRequest extends Request {
  token: string | JwtPayload;
  candidateId: number;
}

const authMiddleware = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY) as JwtPayload;
    req.token = decoded;
    req.candidateId = decoded.candidateId;

    next();
  } catch (err) {
    res.status(401).send("Please authenticate");
  }
};

export default authMiddleware;
