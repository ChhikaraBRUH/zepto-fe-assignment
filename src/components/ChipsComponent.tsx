"use client";

import { useEffect, useState } from "react";
import DATA, { dataType } from "@/data";
import ChipListItem from "./ChipListItem";
import RecommendationListItem from "./RecommendationListItem";

export default function ChipsComponent() {
  const [showList, setShowList] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<dataType[]>(DATA);
  const [chips, setChips] = useState<dataType[]>([]);
  const [backspaceCount, setBackspaceCount] = useState<number>(0);

  const filteredData = data.filter((data) =>
    data?.name?.toLowerCase()?.includes(input?.toLowerCase())
  );

  useEffect(() => {
    let newChips = [...chips];
    if (backspaceCount === 1 && chips?.length && !input?.length) {
      newChips[newChips.length - 1].isHighlighted = true;
      setChips(newChips);
    }

    if (backspaceCount === 2 && chips?.length && !input?.length) {
      setData((prevData) => [
        ...prevData,
        { ...newChips[newChips?.length - 1], isHighlighted: false },
      ]);
      newChips.pop();
      setChips(newChips);
      setBackspaceCount(0);
    }
  }, [backspaceCount, chips, input]);

  const handleChipRemoval = (chipToRemove: dataType) => {
    setData((prevData) => [...prevData, chipToRemove]);
    setChips((prevChips) => prevChips?.filter((chip) => chip !== chipToRemove));
    setBackspaceCount(0);
  };

  const handleChipAddition = (chipToAdd: dataType) => {
    setChips((prevChips) => [...prevChips, chipToAdd]);
    setData((prevData) =>
      prevData?.filter((dataItem) => dataItem !== chipToAdd)
    );
    setInput("");
    setShowList(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setShowList(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !input?.length) {
      setBackspaceCount((prevCount) => prevCount + 1);
    } else if (e.key === "Enter" && input?.length && filteredData?.length) {
      handleChipAddition(filteredData[0]);
    }
  };

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap w-[80%] border-gray-300 border-b-2 justify-center gap-2 p-2">
          <ul className="flex flex-wrap gap-2">
            {chips?.map((chip) => (
              <ChipListItem
                key={chip.id}
                onRemove={() => handleChipRemoval(chip)}
                {...chip}
              />
            ))}
            <input
              className="outline-none bg-transparent text-gray-600"
              type="text"
              value={input}
              placeholder="Enter a name"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </ul>
        </div>
      </div>
      {showList && input?.length !== 0 && (
        <div className="flex justify-center">
          <div className="shadow-md mt-1">
            <ul className="w-80">
              {filteredData?.map((recommendation, index) => (
                <RecommendationListItem
                  key={recommendation.id}
                  index={index}
                  onAdd={() => handleChipAddition(recommendation)}
                  {...recommendation}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
