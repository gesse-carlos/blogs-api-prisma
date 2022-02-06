import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const data = [
  {
    postId: 1,
    categoryId: 1,
  },
  {
    postId: 2,
    categoryId: 2,
  },
]

async function main() {
  await prisma.postCategory.createMany({
    data,
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });