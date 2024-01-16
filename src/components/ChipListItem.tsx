"use client";

import { XIcon } from "lucide-react";

export default function ChipListItem({
  name,
  image,
  isHighlighted,
  onRemove,
}: {
  name: string;
  image: string;
  isHighlighted: boolean;
  onRemove: () => void;
}) {
  return (
    <li
      className={`flex flex-row items-center gap-2 bg-gray-200 text-gray-600 pr-3 rounded-full border-2 ${
        isHighlighted && "border-red-500"
      }`}
    >
      <img src={image} className="h-8 w-8 p-1 rounded-full" alt="" />

      <span>{name}</span>

      <span
        onClick={onRemove}
        className="cursor-pointer rounded-full hover:text-red-500 hover:bg-gray-300"
      >
        <XIcon />
      </span>
    </li>
  );
}
