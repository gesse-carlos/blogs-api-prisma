import { PrismaClient } from '@prisma/client';
import { sign } from '../../utils/jwt';
import { IUser } from '../../utils/types';

const prisma = new PrismaClient();

export const add = async (userData: IUser) => {
  const { name, email, password, image } = userData;

  await prisma.user.create({
    data: {
      name,
      email,
      password,
      image,
    },
  });

  const token = sign(name);

  return token;
};

export const getAll = async () => prisma.user.findMany();

export const getById = async (id: string) => prisma.user.findUnique({ where: { id: +id } });

export const getByEmail = async (email: string) => prisma.user.findUnique({ where: { email } });

export const remove = async (id: string) => prisma.user.delete({ where: { id: +id } });