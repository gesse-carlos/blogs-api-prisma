import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const data = [
  {
    name: 'Horror',
  },
  {
    name: 'Action'
  },
]

async function main() {
  await prisma.category.createMany({
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