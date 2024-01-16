"use client";

export default function RecommendationListItem({
  name,
  email,
  image,
  index,
  onAdd,
}: {
  name: string;
  email: string;
  image: string;
  index: number;
  onAdd: () => void;
}) {
  return (
    <li
      className={`flex items-center gap-2 cursor-pointer px-3 py-1 mb-2 ${
        index === 0 ? "bg-gray-300" : "bg-white"
      }`}
      onClick={onAdd}
    >
      <div className="flex items-center gap-3">
        <img
          src={image}
          className="h-10 w-10 rounded-full object-cover"
          alt={name}
        />
        <div>
          <p className="text-base font-medium text-gray-600">{name}</p>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>
    </li>
  );
}
