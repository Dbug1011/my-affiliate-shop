"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import { createPortal } from "react-dom";

export default function ProductCard({
  name,
  description,
  images,
  link,
  isClickable,
}) {
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
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999]"
              />
            )}
          </AnimatePresence>,
          document.body
        )}

      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence mode="wait">
            {active && (
              <div className="fixed inset-0 z-[10000] flex items-center justify-center p-2 md:p-4">
                <button
                  className="flex absolute top-2 md:top-4 right-2 md:right-4 lg:hidden items-center justify-center bg-techy text-black w-6 md:w-8 h-6 md:h-8 border-2 border-techy hover:bg-black hover:text-techy transition-colors duration-200 z-50"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </button>
                <div
                  ref={ref}
                  className="w-full max-w-[600px] md:h-fit md:max-h-[85vh] flex flex-col bg-black border-4 border-techy overflow-hidden"
                >
                  {product.images.length > 1 ? (
                    <div className="px-3 md:px-6 pt-3 md:pt-6">
                      <ImageSlider
                        images={product.images}
                        title={product.title}
                      />
                    </div>
                  ) : (
                    <div className="px-3 md:px-6 pt-3 md:pt-6">
                      <div className="relative h-48 md:h-64 overflow-hidden bg-gray-900 border-2 border-techy flex items-center justify-center">
                        <Image
                          priority
                          width={800}
                          height={800}
                          src={product.src || "/placeholder.svg"}
                          alt={product.title}
                          className="max-w-full max-h-full object-contain"
                          style={{ imageRendering: "pixelated" }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start p-3 md:p-6 pb-3 md:pb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-techy text-sm md:text-lg tracking-wide mb-2 md:mb-4 font-pixel">
                          {product.title.toUpperCase()}
                        </h3>
                        <p className="text-techy text-xs text md:text-xs leading-relaxed font-pixel">
                          {product.description}
                        </p>
                      </div>

                      <button
                        onClick={() => window.open(product.link, "_blank")}
                        className="pixel-button ml-2 md:ml-4 relative group text-xs md:text-sm"
                      >
                        <span>SHOP NOW</span>
                        <div className="absolute -top-1 -right-1 w-1 md:w-2 h-1 md:h-2 bg-pinky opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </button>
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
        className="bg-black border-3 border-techy overflow-hidden m-1 md:m-2 transition-all duration-300 hover:border-pinky cursor-pointer hover:pixel-glow relative group"
      >
        {isClickable && (
          <div className="absolute top-2 left-2 z-[5] bg-pinky text-black text-xs px-2 py-1 border border-techy font-bold animate-bounce font-pixel">
             CLICK!
          </div>
        )}

        <div className="relative aspect-video overflow-hidden border-b-2 border-techy">
          <Image
            width={800}
            height={800}
            src={product.src || "/placeholder.svg"}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ imageRendering: "pixelated" }}
          />
          {/* Cute pixel overlay */}
          <div className="absolute top-1 md:top-2 right-1 md:right-2 w-2 md:w-3 h-2 md:h-3 bg-pinky opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        <div className="p-2 md:p-4 text-center relative">
          <h3 className="font-bold text-techy text-xs md:text-sm tracking-wide mb-1 md:mb-2 font-pixel leading-tight">
            {product.title.toUpperCase()}
          </h3>
        </div>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.05 },
      }}
      className="w-4 h-4 relative"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3 h-0.5 bg-current transform rotate-45 absolute"></div>
        <div className="w-3 h-0.5 bg-current transform -rotate-45 absolute"></div>
      </div>
    </motion.div>
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
      <div className="relative h-64 overflow-hidden border-2 border-techy bg-gray-900 flex items-center justify-center">
        <Image
          width={400}
          height={300}
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${title} ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain transition-transform duration-300"
          style={{ imageRendering: "pixelated" }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-techy text-black w-8 h-8 border-2 border-techy hover:bg-black hover:text-techy transition-all duration-200 flex items-center justify-center font-pixel"
            >
              {"<"}
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-techy text-black w-8 h-8 border-2 border-techy hover:bg-black hover:text-techy transition-all duration-200 flex items-center justify-center font-pixel"
            >
              {">"}
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
              className={`w-3 h-3 border border-techy transition-all duration-200 ${
                index === currentIndex ? "bg-techy" : "bg-black hover:bg-techy"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
