import { fetcherPost } from "../http/$http";
import useSWRMutation from "swr/mutation";

export function usePostArticle() {
  return useSWRMutation("/posts", fetcherPost);
}
