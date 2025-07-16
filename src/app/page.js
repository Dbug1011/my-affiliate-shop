import Header from "@/components/Header";
import Gallery from "@/components/Gallery";

// Sample product data - replace with your actual data
const sampleProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    image: "/products/headphones-sample.jpg", // Replace with actual image
    rating: 4,
    reviews: 128,
    discount: 20,
    category: "electronics",
    description:
      "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    affiliateLink: "https://example.com/affiliate-link-1",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    image: "/products/smartwatch-sample.jpg", // Replace with actual image
    rating: 5,
    reviews: 89,
    discount: 20,
    category: "electronics",
    description:
      "Track your fitness goals with GPS, heart rate monitoring, and sleep tracking.",
    affiliateLink: "https://example.com/affiliate-link-2",
  },
  {
    id: 3,
    name: "Premium Coffee Maker",
    price: 129.99,
    originalPrice: null,
    image: "/products/coffee-maker-sample.jpg", // Replace with actual image
    rating: 4,
    reviews: 67,
    discount: null,
    category: "home",
    description:
      "Brew perfect coffee every morning with programmable settings and thermal carafe.",
    affiliateLink: "https://example.com/affiliate-link-3",
  },
  {
    id: 4,
    name: "Comfortable Running Shoes",
    price: 89.99,
    originalPrice: 119.99,
    image: "/products/running-shoes-sample.jpg", // Replace with actual image
    rating: 4,
    reviews: 156,
    discount: 25,
    category: "clothing",
    description:
      "Lightweight and breathable running shoes with excellent cushioning and support.",
    affiliateLink: "https://example.com/affiliate-link-4",
  },
];

const categories = ["electronics", "home", "clothing"];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Discover Amazing Products
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Find the best deals on top-rated products, carefully curated for
                you
              </p>
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-200">
                Shop Now
              </button>
            </div>
          </div>
        </section>

        {/* Products Gallery */}
        <Gallery products={sampleProducts} categories={categories} />

        {/* Footer */}
        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  My Affiliate Shop
                </h3>
                <p className="text-gray-400">
                  Your trusted source for quality products and amazing deals.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Home & Garden
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Clothing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Sports
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>&copy; 2025 My Affiliate Shop. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
