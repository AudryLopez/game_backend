import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "./user.entity";

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await getRepository(User).save(req.body);
  const response = await getRepository(User).save(newUser);
  if (!response) throw console.log("error");
  return response;
};
