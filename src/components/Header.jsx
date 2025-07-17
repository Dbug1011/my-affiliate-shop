import SocialIcons from "./SocialIcons";

export default function Header() {
  return (
    <div className="bg-black border-b-4 border-techy pixel-bg relative overflow-hidden">
      {/* Floating pixels */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 md:w-2 h-1 md:h-2 bg-techy opacity-60 pixel-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-2 md:px-4 py-4 md:py-8 relative z-10">
        <div className="text-center">
          {/* Pixelated logo container */}
          <div className="flex justify-center mb-3 md:mb-6">
            <div className="relative">
              {/* Animated rainbow border */}
              <div className="w-16 md:w-24 h-16 md:h-24 bg-gradient-to-r from-pinky via-techy to-yellow-400 p-1 rounded-full">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
              </div>
              {/* Cute pixel decorations */}
              <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2 w-2 md:w-4 h-2 md:h-4 bg-pinky"></div>
              <div className="absolute -bottom-1 md:-bottom-2 -left-1 md:-left-2 w-2 md:w-4 h-2 md:h-4 bg-yellow-400"></div>

              {/* Big Kiki companion on the left */}
              <div className="absolute -left-14 md:-left-22 top-1/2 transform -translate-y-1/2 animate-bounce">
                <img
                  src="/kiki_pixel.png"
                  alt="Kiki"
                  className="w-16 md:w-24 h-16 md:h-24 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Pixelated title */}
          <div className="mb-3 md:mb-6 relative">
            <h1 className="text-2xl md:text-4xl font-bold text-techy mb-1 md:mb-2 tracking-wider font-pixel">
              KISELECTS
            </h1>

            <div className="flex justify-center items-center gap-1 md:gap-2 mb-2 md:mb-4">
              <div className="w-2 md:w-3 h-2 md:h-3 bg-pinky animate-pulse"></div>
              <span className="text-techy text-xs md:text-sm font-pixel">
                {" "}
                SHOP
              </span>
              <div className="w-2 md:w-3 h-2 md:h-3 bg-pinky animate-pulse"></div>
            </div>
          </div>

          {/* Pixelated description box */}
          <div className="bg-black border-2 md:border-3 border-techy p-3 md:p-6 mb-3 md:mb-6 relative">
            <div className="absolute top-1 md:top-2 left-1 md:left-2 w-2 md:w-3 h-2 md:h-3 bg-techy"></div>
            <div className="absolute top-1 md:top-2 right-1 md:right-2 w-2 md:w-3 h-2 md:h-3 bg-techy"></div>
            <div className="absolute bottom-1 md:bottom-2 left-1 md:left-2 w-2 md:w-3 h-2 md:h-3 bg-techy"></div>
            <div className="absolute bottom-1 md:bottom-2 right-1 md:right-2 w-2 md:w-3 h-2 md:h-3 bg-techy"></div>

            <p className="text-techy text-xs md:text-sm leading-relaxed font-pixel">
              {">"} HI THERE! I'M KIKI
              <br />
              {">"} COMPUTER ENGINEERING STUDENT
              <br />
              {">"} THESE ARE MY TRUSTED SHOPS AND PRODUCTS
              <br />
              {">"} SUPPORT ME BY BUYING THROUGH MY LINKS! {"<3"}
            </p>
          </div>

          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
