import { Request, Response } from "express";
const { Vonage } = require("@vonage/server-sdk");

interface smsTypes {
  userPhoneNumber: string;
  RandomNumber: string;
}

const vonage = new Vonage({
  apiKey: "88782ba3",
  apiSecret: "bd15ffM3MDloniCb",
});

async function sendSMS(req: Request, res: Response) {
  const { userPhoneNumber, RandomNumber }: smsTypes = req.body;

  const splitterPhoneNumber = userPhoneNumber.split("06")[1];
  const formattedPhoneNumber = `2126${splitterPhoneNumber}`;

  const from = "Vonage APIs";
  const to = formattedPhoneNumber;
  const text = `${RandomNumber} is your verification code`;
  await vonage.sms
    .send({ to, from, text })
    .then((response: object) => {
      console.log(response);
      return res.status(200).json({ msg: "Message sent successfully" });
    })
    .catch((err: object) => {
      console.error(err);
      return res
        .status(500)
        .json({ msg: "There was an error sending the messages." });
    });
}

export default sendSMS;
