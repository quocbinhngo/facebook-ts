import * as React from "react";

export interface StoryCardProps {
  img?: string;
  avatar?: string;
  username?: string;
}

export default function StoryCard({ img, avatar, username }: StoryCardProps) {
  return (
    <div className="relative">
      {/* background */}
      <img
        src={img}
        className="h-44 w-full object-cover object-center rounded-lg"
        alt=""
      />

      {/* avatar */}
      <img
        className="h-12 w-12 rounded-full top-0 left-0 absolute border-blue-500 border-2"
        src={avatar}
        alt="avatar"
      />

      {/* userName */}
      <div className="absolute bottom-0 p-2 px-3">
        <p className="text-white">{username}</p>
      </div>
    </div>
  );
}
