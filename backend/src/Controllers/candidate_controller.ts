import { sign } from "jsonwebtoken";
import { compare, hash } from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export type candidateType = {
  candidateId: number;
  fullName: string;
  email: string;
  password: string;
};

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
      fullName,
      email,
      password: hashedPassword,
      verified: false,
    },
  });

  if (newCandidate) {
    return res.status(201).json({
      msg: "Account created successefuly",
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

  const passwordsMatching = await compare(password, existedCandidate!.password);
  if (existedCandidate && passwordsMatching) {
    return res.status(200).json({
      candidate: {
        email,
        fullName: existedCandidate.fullName,
        token: await generateToken(existedCandidate.candidateId),
        verified: false,
      },
    });
  }
};

const verifyCandidate = async (req: Request, res: Response) => {
  const { verificationNumber, RandomNumber } = req.body;

  if (verificationNumber === RandomNumber) {
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

const generateToken = async (id: number): Promise<string> => {
  return sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
};

export { createCandidate, loginCandidate, verifyCandidate };
