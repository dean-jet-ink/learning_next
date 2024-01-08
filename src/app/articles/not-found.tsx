import React from "react";

const NotFound = () => {
  return (
    <div className="fixed inset-0 m-auto w-fit h-fit">
      <div className="flex gap-16 items-center justify-center">
        <h1 className="text-5xl font-bold">404</h1>
        <p>Page not found</p>
      </div>
    </div>
  );
};

export default NotFound;
