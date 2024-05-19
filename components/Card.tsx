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
          <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative" style={{ width: '200px', height: '173.2px' }}>
          {/* Triangle shape */}
          <div className="absolute" style={{ width: 0, height: 0, borderLeft: '100px solid transparent', borderRight: '100px solid transparent', borderBottom: '173.2px solid blue' }}></div>
          {/* Circle 1: Top Vertex */}
          <div className="absolute w-16 h-16 bg-red-500 rounded-full" style={{ top: '-32px', left: 'calc(50% - 32px)' }}></div>
          {/* Circle 2: Bottom-Left Vertex */}
          <div className="absolute w-16 h-16 bg-green-500 rounded-full" style={{ bottom: '-32px', left: '-32px' }}></div>
          {/* Circle 3: Bottom-Right Vertex */}
          <div className="absolute w-16 h-16 bg-yellow-500 rounded-full" style={{ bottom: '-32px', right: '-32px' }}></div>
        </div>
      </main>
        </div>
      </div>
    </>
  );
}
