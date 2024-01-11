import { useEffect, useState } from "react";
import fetcher from "../http/$http";
import useSWR from "swr";
import { PostType } from "../validation/article.zod";

export function useGetResult() {
  const { data: users, error: usersError, isLoading: usersLoading } = useSWR("/users", fetcher);
  const { data: posts, error: postsError, isLoading: postsLoading } = useSWR("/posts", fetcher);

  const isLoading = usersLoading && postsLoading;
  const error = {
    postsError,
    usersError,
  };
  if (!users && !posts) return { data: null, isLoading, error };
  const data = posts?.map(post => {
    return {
      ...post,
      user: users?.filter(user => {
        if (user.id === post.userId) {
          return user;
        }
      }),
    };
  });
  return { data, isLoading, error };
}
