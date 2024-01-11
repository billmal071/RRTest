import { useEffect, useMemo } from "react";
import fetcher from "../http/$http";
import useSWR from "swr";

export function useGetResult() {
  const { data: users, error: usersError, isLoading: usersLoading } = useSWR("/users", fetcher);
  const { data: posts, error: postsError, isLoading: postsLoading } = useSWR("/posts", fetcher);

  const { data, isLoading, error } = useMemo(() => {
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
    return { isLoading, error, data };
  }, [usersLoading, postsLoading, postsError, usersError, posts, users]);

  return { data, isLoading, error };
}
