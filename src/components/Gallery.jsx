"use client";

// components/Gallery.jsx
import { useState } from "react";

export default function Gallery({ images }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative">
      <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
        <img
          src={images[index]}
          alt={`Product image ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-techy scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}

      {images.length > 1 && (
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
          <button
            onClick={() => setIndex(index > 0 ? index - 1 : images.length - 1)}
            className="w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all duration-300"
          >
            ‹
          </button>
          <button
            onClick={() => setIndex(index < images.length - 1 ? index + 1 : 0)}
            className="w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all duration-300"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
