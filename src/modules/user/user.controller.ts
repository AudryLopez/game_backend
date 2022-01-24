import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "./user.entity";

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await getRepository(User).save(req.body);
  const response = await getRepository(User).save(newUser);
  if (!response) throw Error('User is not added');
  return response;
};

export const getUser = async (id: number): Promise<User> => {
  const response = await getRepository(User).findOne(id)
  if (!response) throw Error(`User ${id} not found`);
  return response;
};

export const getAllUsers = async () : Promise<User[]> => {
  const response = await getRepository(User).find();
  if (!response) throw Error(`Users not found`);
  return response;
};

