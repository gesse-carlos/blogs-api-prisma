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
  id: number,
  email: string,
}

export type Category = {
  id: number,
  name: string,
};

export interface IPayload {
  id?: number,
  email?: string,
}