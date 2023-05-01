import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface JwtPayload {
  candidateId: string;
  iat: number;
  exp: number;
}

export interface CustomRequest extends Request {
  token: string | JwtPayload;
  candidateId: string;
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

    const expTimestamp = decoded.exp * 1000;
    const currentTimestamp = new Date().getTime();

    if (expTimestamp < currentTimestamp) {
      return res.status(400).json({ msg: "Token is expired" });
    }

    next();
  } catch (err) {
    return res.status(401).json({ msg: "Not Authorized" });
  }
};

export default authMiddleware;
