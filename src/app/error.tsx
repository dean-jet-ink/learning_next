"use client";

import React from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="py-8 flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Error</h1>
      <p>予期せぬエラーが発生しました。</p>
      <p className="text-red-600">{error.message}</p>
      <div>
        <button
          onClick={reset}
          className="bg-amber-600 bg-opacity-60 py-3 px-7 rounded-md hover:bg-amber-700 text-white font-bold"
        >
          再試行
        </button>
      </div>
    </div>
  );
};

export default Error;
