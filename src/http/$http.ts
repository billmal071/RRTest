import axios from "axios";
import { ArticleType } from "../validation/article.zod";

const $http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 6000,
});

$http.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);

async function fetcher(url: string) {
  return await $http.get(url);
}

export async function fetcherPost(url: string, { arg }: { arg: ArticleType }) {
  return await $http.post(url, arg);
}

export default fetcher;
