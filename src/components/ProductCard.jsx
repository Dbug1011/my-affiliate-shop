"use client";

import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import { createPortal } from "react-dom";

export default function ProductCard({ name, description, images, link }) {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (active) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const product = {
    title: name,
    description: description,
    src: images[0],
    images: images,
    link: link,
  };

  return (
    <>
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
              />
            )}
          </AnimatePresence>,
          document.body
        )}

      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence mode="wait">
            {active && (
              <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                <button
                  className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white/90 backdrop-blur-sm rounded-full h-8 w-8 shadow-lg hover:bg-white transition-colors duration-200 z-50"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </button>
                <div
                  ref={ref}
                  className="w-full max-w-[600px] md:h-fit md:max-h-[85vh] flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                >
                  {product.images.length > 1 ? (
                    <div className="px-6 pt-6">
                      <ImageSlider
                        images={product.images}
                        title={product.title}
                      />
                    </div>
                  ) : (
                    <div className="px-6 pt-6">
                      <div className="relative h-64 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                        <Image
                          priority
                          width={800}
                          height={800}
                          src={product.src}
                          alt={product.title}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start p-6 pb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-neutral-800 text-xl tracking-wide mb-2">
                          {product.title}
                        </h3>
                        <p className="text-neutral-600 text-sm font-medium tracking-wide leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 text-sm rounded-full font-bold bg-gradient-to-r from-techy to-pinky text-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ml-4"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}

      <div
        onClick={() => setActive(product)}
        className="bg-white rounded-2xl shadow-lg overflow-hidden m-4 transition-all duration-300 hover:shadow-xl cursor-pointer hover:scale-[1.02]"
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            width={800}
            height={800}
            src={product.src}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="p-4 text-center">
          <h3 className="font-bold text-gray-800 text-lg tracking-wide mb-2">
            {product.title}
          </h3>
        </div>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.05 },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const ImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative mb-4">
      <div className="relative h-64 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
        <Image
          width={400}
          height={300}
          src={images[currentIndex]}
          alt={`${title} ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain transition-transform duration-300"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <svg
                className="w-4 h-4 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <svg
                className="w-4 h-4 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center mt-3 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-techy" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
