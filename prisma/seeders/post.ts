import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const data = [
  {
    title: 'All F1 Champions',
    content: 'Best post of the year',
    authorId: 1,
  },
  {
    title: 'Why Rubinho Barrichello is the greatest F1 driver in history',
    content: 'This is absolutely true',
    authorId: 2,
  },
]

async function main() {
  await prisma.post.createMany({
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