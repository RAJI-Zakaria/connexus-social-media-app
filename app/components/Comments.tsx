import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div>
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/16176400/pexels-photo-16176400/free-photo-of-maisons-art-arbres-herbe.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 rounded-full"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="">
        {/* COMMENTS */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src="https://images.pexels.com/photos/16176400/pexels-photo-16176400/free-photo-of-maisons-art-arbres-herbe.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          {/* DESC */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Zakaria RAJI</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, sit? Corporis placeat similique totam voluptas vitae
              ea dignissimos quaerat maxime aliquid soluta. Minima corporis a
              assumenda voluptates aliquid magni animi?
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={16}
                  height={16}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span>123 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/* ICON */}
          <Image
            src="/more.png"
            className="cursor-pointer w-4 h-4"
            width={16}
            height={16}
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
