"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import DropdownButton from "@/components/DropdownButton";

const products = [
  {
    name: "Differential & Integral Calculus",
    description:
      "By Feliciano and Uy - Comprehensive calculus textbook for engineering students!",
    images: [
      "/products/IMG_1992.JPG",
      "/products/IMG_1993.JPG",
      "/products/IMG_1994.JPG",
    ],
    link: "https://s.shopee.ph/7fOsw1Zgo7",
    category: "Computer Engineering",
  },
  {
    name: "CALCULUS With Analytic Geometry By:Thurman S.Peterson",
    description:
      "By peterson - Comprehensive calculus textbook for engineering students!",
    images: ["/products/IMG_1995.JPG"],
    link: "https://s.shopee.ph/7Km2Z48cU7",
    category: "Computer Engineering",
  },

  {
    name: "Engineering Economy Third Edition",
    description:
      "Essential textbook for engineering students - comprehensive and well-structured!",
    images: ["/products/IMG_1939.JPG", "/products/IMG_1940.JPG"],
    link: "https://s.shopee.ph/6Aa4vhXXf8",
    category: "Computer Engineering",
  },
  {
    name: "Elementary Differential Equation Seventh Edition",
    description:
      "by Rainville - Classic mathematics textbook for differential equations!",
    images: ["/products/IMG_1937.JPG", "/products/IMG_1938.JPG"],
    link: "https://s.shopee.ph/2g0ClQ7QGq",
    category: "Computer Engineering",
  },
  {
    name: "Plastic Storage Box Transparent Enclosure",
    description:
      "Clear Organizer Box / Casing - Perfect for electronics and small parts organization!",
    images: [
      "/products/IMG_1941.JPG",
      "/products/IMG_1942.JPG",
      "/products/IMG_1943.JPG",
      "/products/IMG_1944.JPG",
      "/products/IMG_1945.JPG",
      "/products/IMG_1946.JPG",
    ],
    link: "https://s.shopee.ph/7ASc7orBW8",
    category: "Computer Engineering",
  },

  {
    name: "Aid Hand Clip LED Magnifying Stand",
    description:
      "Soldering Iron Stand Lens Magnifier for Jewelry - Essential for precision work! Thi sis very helpful especially i have no steady hands and no one can assist me with soldering.",
    images: [
      "/products/IMG_1960.JPG",
      "/products/IMG_1961.JPG",
      "/products/IMG_1962.JPG",
      "/products/IMG_1963.JPG",
    ],
    link: "https://s.shopee.ph/5fdoLU00Jd",
    category: "Computer Engineering",
  },
  {
    name: "15in1 Original AD 220V 60W Soldering Iron",
    description:
      "Temperature adjustable set - Complete soldering solution for electronics work!",
    images: [
      "/products/IMG_1968.JPG",
      "/products/IMG_1969.JPG",
      "/products/IMG_1970.JPG",
      "/products/IMG_1971.JPG",
      "/products/IMG_1972.JPG",
      "/products/IMG_1973.JPG",
      "/products/IMG_1974.JPG",
      "/products/IMG_1975.JPG",
    ],
    link: "https://s.shopee.ph/4L8QwljNOE",
    category: "Computer Engineering",
  },
  {
    name: "Mini Electric Drill Set 12V DC",
    description:
      "Mini Electric Grinder Power Tool for Milling Cutting Polishing - Versatile tool!",
    images: [
      "/products/IMG_1976.JPG",
      "/products/IMG_1977.JPG",
      "/products/IMG_1978.JPG",
    ],
    link: "https://s.shopee.ph/LcIBWeS77",
    category: "Computer Engineering",
  },
  {
    name: "LCD Digital Multimeter XL830L",
    description:
      "Voltmeter Ammeter Ohmmeter HOLDPEAK Manual Multi Tester - Essential for electronics!",
    images: [
      "/products/IMG_1997.JPG",
      "/products/IMG_1998.JPG",
      "/products/IMG_1999.JPG",
    ],
    link: "https://s.shopee.ph/3LFtne7S4t",
    category: "Computer Engineering",
  },
  {
    name: "SN74LS08N 74LS Series IC",
    description:
      "10/5Pcs 74LS08 7408 DIP14 IC NEW - Perfect for digital electronics projects!",
    images: ["/products/IMG_2001.JPG"],
    link: "https://s.shopee.ph/LcIBf9wBJ",
    category: "Computer Engineering",
  },

  {
    name: "Circuitrocks Breadboard 400/830 Points",
    description:
      "Solderless PCB Test Board Mb-102 Syb-120 Syb-46 Arduino - Essential for prototyping!",
    images: ["/products/IMG_1980.JPG"],
    link: "https://s.shopee.ph/8AL9WAmqQG",
    category: "Computer Engineering",
  },
  {
    name: "Circuitrocks Solder Wire 30g",
    description:
      "Welding High Purity Low Fusion Spot 0.8mm Rosin Soldering Wire - Quality soldering!",
    images: ["/products/IMG_1981.JPG"],
    link: "https://s.shopee.ph/1g7fmHjAA4",
    category: "Computer Engineering",
  },
  {
    name: "Circuitrocks Soldering Flux 150g",
    description:
      "Rosin Paste Solder Welding Grease For Mobile Phone PC Card BGA - Professional grade flux!",
    images: ["/products/IMG_1996.JPG"],
    link: "https://s.shopee.ph/50O7kRIXE6",
    category: "Computer Engineering",
  },
  {
    name: "Raspberry Pi 5 Board BCM2712",
    description:
      "Arm Cortex-A76 MicroSD, Wifi, HDMI, Power Button - Latest Pi with amazing performance!",
    images: [
      "/products/IMG_1982.JPG",
      "/products/IMG_1983.JPG",
      "/products/IMG_1984.JPG",
    ],
    link: "https://s.shopee.ph/3LFtlSe2wK",
    category: "Computer Engineering",
  },
  {
    name: "52Pi Raspberry Pi 5 Power Supply",
    description:
      "5V 5A USB Type-c Power Supply AC/DC Power Adapter - Official power adapter for Pi 5!",
    images: ["/products/IMG_1985.JPG"],
    link: "https://s.shopee.ph/4L8QxOGYp7",
    category: "Computer Engineering",
  },
  {
    name: "Zeus K Series Gaming Keyboard",
    description:
      "Wired Creamy Keyboard With Rainbow RGB Backlit Media Knob 98 Keys - Perfect for gaming and productivity!",
    images: ["/products/IMG_1990.JPG", "/products/IMG_1991.JPG"],
    link: "https://s.shopee.ph/801jKIGVNO",
    category: "Setup & Accessories",
  },
  {
    name: "Nvision 22 24 27 Inch IPS Monitor",
    description:
      "100Hz Frameless Flat FHD Gaming Monitor Computer PC Monitor - Crystal clear display for work and gaming!",
    images: [
      "/products/IMG_1986.JPG",
      "/products/IMG_1987.JPG",
      "/products/IMG_1988.JPG",
      "/products/IMG_1989.JPG",
    ],
    link: "https://s.shopee.ph/gF8aibZ7j",
    category: "Setup & Accessories",
  },
  {
    name: "Ergonomic Office Chair Gaming Chair",
    description:
      "Computer Chair Mesh Chair Home Office Study Chair High Back ch001 - Comfortable for long sessions!",
    images: [
      "/products/IMG_1953.JPG",
      "/products/IMG_1948.JPG",
      "/products/IMG_1949.JPG",
      "/products/IMG_1950.JPG",
      "/products/IMG_1951.JPG",
      "/products/IMG_1952.JPG",
      "/products/IMG_1947.JPG",
    ],
    link: "https://s.shopee.ph/5pxEXZDY8K",
    category: "Setup & Accessories",
  },
  {
    name: "Wireless Bluetooth Mouse 2.4GHz",
    description:
      "Optical Rechargeable Ultra Thin Silent Mice for PC Laptop Tablet - Great for productivity!",
    images: ["/products/IMG_1959.JPG"],
    link: "https://s.shopee.ph/1VoFNkkted",
    category: "Setup & Accessories",
  },
  {
    name: "Study Table Computer Desk",
    description:
      "Office Table with Bookshelf 80/100/120 CM - Great workspace solution!",
    images: ["/products/IMG_1979.JPG"],
    link: "https://s.shopee.ph/2qJdAJGo6f",
    category: "Setup & Accessories",
  },
];

const categories = [
  "All",
  "Computer Engineering",
  "Setup & Accessories",
  "Fashion",
  "Home & Living",
  "Sports & Outdoors",
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Category Filter */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              Shop by Category
            </h2>
            <DropdownButton
              label={selectedCategory}
              options={categories}
              onSelect={setSelectedCategory}
            />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {filteredProducts.map((prod, idx) => (
            <ProductCard key={idx} {...prod} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found in this category yet.
            </p>
            <p className="text-gray-400 mt-2">More items coming soon! 🚀</p>
          </div>
        )}
      </div>
    </div>
  );
}
