"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { deleteArticle } from "../api/articles";

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteArticle(id);

    router.push("/");
    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-700 hover:bg-red-800 inline py-3 px-5 rounded-md"
    >
      削除
    </button>
  );
};

export default DeleteButton;
