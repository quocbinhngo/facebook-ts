import * as React from "react";
import StoryCard from "./StoryCard";

const arr = Array(8).fill(1);

export interface StoriesProps {}

export default function Stories(props: StoriesProps) {
  return (
    <div className="grid grid-cols-5 gap-x-2">
      {arr.map((story, idx) => (
        <StoryCard
          avatar="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          img="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          username={"Nhu Doan"}
          key={idx}
        />
      ))}
    </div>
  );
}
