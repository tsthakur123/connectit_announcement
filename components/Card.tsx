import React from "react";

export function Card() {
  return (
    <>
      <div id="Q1" className="w-full h-[80vh]">
        <div id="what" className="w-fit font-semibold text-lg">
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 bg-black inline-block rounded-full"></span>
            WHAT WE DO
          </p>
        </div>
        <div
          id="content"
          className="my-1 md:my-4 text-3xl font-semibold opacity-75 bg-yellow-200 h-full rounded-lg p-4"
        >
          <p>ConnectIT</p>
        </div>
      </div>
    </>
  );
};

