import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="font-sans h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="hidden lg:block">
        <Link href="" className="font-bold text-xl text-blue-600">
          CONNEXUS
        </Link>
      </div>
      {/* CENTER */}
      <div className="flex gap-6 text-grey-600 text-small  ">
        <Link href="" className="flex items-center gap-2">
          <Image
            src="/home.png"
            alt=""
            className="w-4 h-4"
            width={16}
            height={16}
          />
          <span>HomePage</span>
        </Link>
        <Link href="" className="flex items-center gap-2">
          <Image
            src="/friends.png"
            alt=""
            className="w-4 h-4"
            width={16}
            height={16}
          />
          <span>Friends</span>
        </Link>
        <Link href="" className="flex items-center gap-2">
          <Image
            src="/stories.png"
            alt=""
            className="w-4 h-4"
            width={16}
            height={16}
          />
          <span>Stories</span>
        </Link>
      </div>
      {/* RIGHT */}
      <div className="flex  gap-4 xl:gap-8">
        <MobileMenu />
      </div>
    </div>
  );
};

export default NavBar;
