export interface IUser {
  name: string,
  email: string,
  password: string,
  image: string,
}

export interface IPost {
  title: string,
  content: string,
  authorId: number,
}

export type User = {
  id: string,
  email: string,
}