import { Prisma, PrismaClient } from "@prisma/client";
import { IPost } from "../../utils/types";

const prisma = new PrismaClient();

export const add = async (postData: IPost) => {
  const { title, content, authorId } = postData;

  const post = await prisma.post.create({
    data: {
      title,
      content,
      authorId,
    },
  });

  return {
    id: post.id,
    authorId,
    title,
    content,
  };
};

export const getAll = async () => prisma.post.findMany({
  include: {
    author: {
      include: {
        posts: true,
      },
    },
    categories: {
      include: {
        post: false,
      },
    },
  },
});

export const getById = async (id: string) => prisma.post.findUnique({
  where: { id: +id },
  include: {
    author: {
      include: {
        posts: true,
      },
    },
    categories: {
      include: {
        post: false,
      },
    },
  },
});

export const update = async (id: string, postData: IPost) => {
  const { title, content } = postData;

  await prisma.post.update({
    where: { id: +id },
    data: {
      title,
      content,
    },
  });

  const post = prisma.post.findUnique({
    where: { id: +id },
    include: {
      categories: {
        include: {
          post: false,
        },
      },
    },
  });

  return post;
}

export const remove = async (id: string) => prisma.post.delete({ where: { id: +id } });

export const search = async (query: string) => {
  const or: Prisma.PostWhereInput = query
    ? {
      OR: [
        { title: { contains: query } },
        { content: { contains: query } },
      ],
    }
    : {};

  const posts = await prisma.post.findMany({
    where: { ...or },
    include: {
      author: {
        include: {
          posts: true,
        },
      },
      categories: {
        include: {
          post: false,
        },
      },
    },
  });

  return posts;
}