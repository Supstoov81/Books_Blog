"use client";
import React, { useState } from "react";

export default function Test() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Page</h1>
      <div className="bg-yellow-100 p-4 rounded">
        <p>Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
