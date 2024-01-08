"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

import { createArticle } from "@/app/api/articles";

const CreateBlogPage = () => {
  const router = useRouter();
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    await createArticle(id, title, content);

    setLoading(false);

    router.push("/");
    router.refresh();
  };

  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h1 className="text-2xl mb-6 font-bold">ブログ新規作成</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="url">URL</label>
          <input
            type="text"
            name="url"
            className="w-full border rounded focus:outline-none text-zinc-700 py-2 px-3"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">タイトル</label>
          <input
            type="text"
            name="title"
            className="w-full border rounded focus:outline-none text-zinc-700 py-2 px-3"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">本文</label>
          <textarea
            name="body"
            className="w-full border rounded focus:outline-none text-zinc-700 py-2 px-3"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className={`${
              loading || "hover:bg-amber-700"
            } bg-amber-600 bg-opacity-60 py-3 px-7 rounded-md text-white w-24 h-12`}
            disabled={loading}
          >
            {loading ? (
              <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mx-auto"></div>
            ) : (
              "投稿"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogPage;
