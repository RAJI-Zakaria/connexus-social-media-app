import React from "react";
import FriendRequests from "./FriendRequests";
import Ad from "./Ad";
import Birthdays from "./Birthdays";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
