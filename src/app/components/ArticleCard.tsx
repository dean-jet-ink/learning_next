import React from "react";
import { Article as ArticleCard } from "../types";
import Link from "next/link";
import Image from "next/image";

type ArticleCardProps = {
  article: ArticleCard;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  const { id, title, content, created_at } = article;

  return (
    <article className="shadow my-4 text-zinc-700" key="id">
      <Link href={`/articles/${id}`} className="hover:opacity-75">
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${id}`}
          alt=""
          width={1280}
          height={300}
        />
      </Link>
      <div className="bg-white flex flex-col gap-4 p-5">
        <Link href="#" className="text-blue-700">
          Technology
        </Link>
        <Link href={`/articles/${id}`} className="text-3xl font-bold">
          {title}
        </Link>
        <small>
          By Kenta Jinde, Published on {new Date(created_at).toLocaleString()}
        </small>
        <Link href={`/articles/${id}`}>
          {content.length > 70 ? content.substring(0, 70) + "..." : content}
        </Link>
        <Link href={`/articles/${id}`} className="text-pink-700">
          続きを読む
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
