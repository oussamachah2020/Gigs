import { sign } from "jsonwebtoken";
import * as enc from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

type Condidate = {
  condidateId: number;
  fullName: string;
  email: string;
  password: string;
};

const createCondidate = async (
  req: Request,
  res: Response
): Promise<Response<Condidate> | undefined> => {
  const { fullName, email, password }: Condidate = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ msg: "Informations are required" });
  }

  const hashedPassword: string = await enc.hash(password, 10);

  const existedCondidate: Condidate | null = await prisma.condidate.findUnique({
    where: {
      email,
    },
  });

  if (existedCondidate) {
    return res.status(200).json({ msg: "This email is already in use" });
  }

  const newCondidate = await prisma.condidate.create({
    data: {
      fullName,
      email,
      password: hashedPassword,
    },
  });

  if (newCondidate) {
    return res.status(201).json({
      msg: "Account created successefuly",
      token: generateToken(newCondidate.condidateId),
    });
  }
};

const loginCondidate = async (
  req: Request,
  res: Response
): Promise<Response<Condidate> | undefined> => {
  const { email, password }: Condidate = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Informations are required" });
  }

  const existedCondidate: Condidate | null = await prisma.condidate.findUnique({
    where: {
      email,
    },
  });

  const passwordsMatching = await enc.compare(
    password,
    existedCondidate!.password
  );
  if (existedCondidate && passwordsMatching) {
    return res
      .status(200)
      .json({
        condidate: {
          email,
          fullName: existedCondidate.fullName,
          token: generateToken(existedCondidate.condidateId),
        },
      });
  }
};

const generateToken = async (id: number): Promise<string | void> => {
  return sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
};

export { createCondidate, loginCondidate };
