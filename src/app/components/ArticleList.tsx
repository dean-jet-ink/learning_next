import Image from "next/image";
import Link from "next/link";
import React from "react";

import { getArticles } from "../api/articles";
import { Article } from "../types";
import ArticleCard from "./ArticleCard";

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
