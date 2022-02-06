import { PrismaClient } from "@prisma/client";
import { userData, categoryData, postData, postCategoryData } from './seeders';

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.createMany({ data: userData });
  const categories = await prisma.category.createMany({ data: categoryData });
  const posts = await prisma.post.createMany({ data: postData });
  const postsCategories = await prisma.postCategory.createMany({ data: postCategoryData });

  return { users, categories, posts, postsCategories };
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });