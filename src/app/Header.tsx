import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="py-5 px-10 border-b flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href={"/"}>Next blog</Link>
        </h1>
        <nav className="text-sm font-medium">
          <Link
            href={"/articles/new"}
            className=" bg-amber-600 bg-opacity-60 py-3 px-7 rounded-md hover:bg-amber-700"
          >
            記事を書く
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
