import { getArticle } from "@/app/api/articles";
import DeleteButton from "@/app/components/DeleteButton";
import Image from "next/image";
import React from "react";

const Article = async ({ params }: { params: { id: string } }) => {
  const article = await getArticle(params.id);

  const { id, title, content, created_at } = article;

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${id}`}
        alt=""
        width={1280}
        height={300}
      />
      <h1 className="text-3xl font-bold text-center mb-10 mt-10">{title}</h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{content}</p>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={id} />
      </div>
    </div>
  );
};

export default Article;
