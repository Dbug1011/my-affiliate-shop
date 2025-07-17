// components/Header.jsx
import SocialIcons from "./SocialIcons";

export default function Header() {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-24 h-24 rounded-full border-4 border-techy shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">KiSelects</h1>
          <p className="text-gray-600 text-lg mb-4">
            Hi there! I'm kiki, a computer engineering student and these are my
            trusted shops & products since Year 1, please support me by buying
            through my links!
          </p>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
