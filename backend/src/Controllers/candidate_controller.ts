import { sign } from "jsonwebtoken";
import { compare, hash } from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { CustomRequest } from "../middleware/user.middelware";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export interface candidateType {
  candidateId: string;
  fullName: string;
  email: string;
  password: string;
}

const createCandidate = async (
  req: Request,
  res: Response
): Promise<Response<candidateType> | undefined> => {
  const { fullName, email, password }: candidateType = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ msg: "Informations are required" });
  }

  const hashedPassword: string = await hash(password, 10);

  const existedCandidate: candidateType | null =
    await prisma.candidate.findFirst({
      where: {
        email: email,
      },
    });

  if (existedCandidate) {
    return res.status(200).json({ msg: "This email is already in use" });
  }

  const newCandidate = await prisma.candidate.create({
    data: {
      candidateId: uuidv4(),
      fullName,
      email,
      password: hashedPassword,
      verified: false,
    },
    select: { candidateId: true },
  });

  if (newCandidate) {
    return res.status(201).json({
      msg: "Account created successfully",
      token: await generateToken(newCandidate.candidateId),
    });
  }
};

const loginCandidate = async (
  req: Request,
  res: Response
): Promise<Response<candidateType> | undefined> => {
  const { email, password }: candidateType = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Informations are required" });
  }

  const existedCandidate: candidateType | null =
    await prisma.candidate.findUnique({
      where: {
        email,
      },
    });

  const passwordsMatching = await compare(password, existedCandidate?.password);
  if (existedCandidate && passwordsMatching) {
    return res.status(200).json({
      token: await generateToken(existedCandidate.candidateId),
    });
  } else {
    return res.status(404).json({ msg: "No user with the following email" });
  }
};

const getUserDataWithToken = async (req: CustomRequest, res: Response) => {
  const candidate = await prisma.candidate.findUnique({
    where: {
      candidateId: req.candidateId,
    },
  });

  if (candidate) {
    return res.status(200).json({
      fullName: candidate.fullName,
      email: candidate.email,
    });
  }
};

const verifyCandidate = async (req: CustomRequest, res: Response) => {
  const { verificationNumber, RandomNumber } = req.body;

  if (Number(verificationNumber) === Number(RandomNumber)) {
    const updateCandidateState = await prisma.candidate.update({
      where: { candidateId: req.candidateId },
      data: {
        verified: true,
      },
    });
    if (updateCandidateState) {
      // Return the updated user object
      const updatedUser = {
        token: await generateToken(updateCandidateState.candidateId),
        verified: true,
      };
      return res
        .status(200)
        .json({ updatedUser, msg: "user verified successfully" });
    } else {
      // Return an error message if the update failed
      return res.status(500).json({ msg: "Failed to update user" });
    }
  }
};

const generateToken = async (candidateId: string): Promise<string> => {
  return sign({ candidateId }, process.env.JWT_PUBLIC_SECRET_KEY, {
    expiresIn: "1d",
  });
};

export {
  createCandidate,
  loginCandidate,
  verifyCandidate,
  getUserDataWithToken,
};
