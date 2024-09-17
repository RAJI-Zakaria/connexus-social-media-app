import Image from "next/image";
import React from "react";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
            alt=""
            src="https://images.pexels.com/photos/25811334/pexels-photo-25811334/free-photo-of-jardin-centrale-plante-beaute.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          />
          <span className="font-medium">Zakaria RAJI</span>
        </div>
        <Image
          className="w-5 h-5 rounded-full"
          width={16}
          height={16}
          alt=""
          src="/more.png"
        />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            className="object-cover rounded-md"
            fill
            alt=""
            src="https://images.pexels.com/photos/27981151/pexels-photo-27981151/free-photo-of-fleurs-livres-decoration-instrument-de-musique.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          sit? Corporis placeat similique totam voluptas vitae ea dignissimos
          quaerat maxime aliquid soluta. Minima corporis a assumenda voluptates
          aliquid magni animi?
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              className="cursor-pointer"
              width={16}
              height={16}
              alt=""
              src="/like.png"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              className="cursor-pointer"
              width={16}
              height={16}
              alt=""
              src="/share.png"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
