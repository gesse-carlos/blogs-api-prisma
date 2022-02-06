import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const add = async (name: string) => prisma.category.create({ data: { name } });

export const getAll = async () => prisma.category.findMany();