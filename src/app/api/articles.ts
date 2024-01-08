import { Article } from "../types";
import { notFound } from "next/navigation";

const baseURL = "http://localhost:3001";

export const getArticles = async (): Promise<Article[]> => {
  const res = await fetch(`${baseURL}/posts`, { cache: "no-store" }); //SSR

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const articles = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 500));

  return articles;
};

export const getArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`${baseURL}/posts/${id}`, {
    next: { revalidate: 60 }, //ISR
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const article = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 500));

  return article;
};

export const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDate = new Date().toISOString();

  const res = await fetch(`${baseURL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, title, content, created_at: currentDate }),
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const article = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 500));

  return article;
};

export const deleteArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`${baseURL}/posts/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const article = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 500));

  return article;
};
