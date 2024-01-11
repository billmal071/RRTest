import { z } from "zod";

export const articleSchema = z.object({
  userInfo: z
    .string()
    .min(3, {
      message: "User info must contain atleast 3 characters",
    })
    .max(30, {
      message: "User info cannot be more than 30 characters",
    }),
  content: z
    .string()
    .min(5, {
      message: "Content must contain atleast 5 characters",
    })
    .max(450, {
      message: "Content cannot be more than 450 characters",
    }),
});

export type ArticleType = z.infer<typeof articleSchema>;

export type PostType = {
  id: number;
  body: string;
  title: string;
  userId: number;
  user: {
    id: number;
    name: string;
    email: string;
    username: string;
  };
};
