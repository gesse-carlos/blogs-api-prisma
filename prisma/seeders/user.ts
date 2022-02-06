import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const data = [
  {
    name: 'Lewis Hamilton',
    email: 'lewishamilton@gmail.com',
    password: '123456',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
  },
  {
    name: 'Michael Schumacher',
    email: 'michaelschumacher@gmail.com',
    password: '123456',
    image: 'https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg',
  }
]

async function main() {
  await prisma.user.createMany({
    data,
  })
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });