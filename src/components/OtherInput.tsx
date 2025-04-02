import React from "react";
import { Input } from "./ui/input";

const OtherInput = ({
  title,
  selectedArray,
  setSelectedArray,
  selectedItem,
  setSelectedItem,
}: {
  title: string,
  selectedArray: string[];
  setSelectedArray: any;
  selectedItem: string;
  setSelectedItem: any;
}) => {
  return (
      <div className="border-2 border-black rounded-lg mt-5 p-4 w-[500px] flex flex-col gap-2">
        <h2 className="text-center font-serif text-lg">
          {title}
        </h2>
        <div>
          {selectedArray?.map((item, index) => (
            <div
              key={index}
              className="flex bg-slate-300 mb-2 text-black p-3 rounded-md gap-2 justify-between items-center"
            >
              <p>{item}</p>
              <button
                onClick={() => {
                  setSelectedArray(selectedArray.filter((_, i) => i !== index));
                }}
                className="bg-red-500 p-2 rounded-lg text-white"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex gap-2 items-center">
            <Input
              className=""
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.target.value)}
            />

            <button
              className=" bg-emerald-600 border-white p-2 rounded-lg"
              onClick={() => {
                if (selectedItem === "") return;
                setSelectedArray([...selectedArray, selectedItem]);
                setSelectedItem("");
              }}
            >
              Add
            </button>
          </div>
        </div>
    </div>
  );
};

export default OtherInput;
