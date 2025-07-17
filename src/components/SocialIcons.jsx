import {
  SiInstagram,
  SiFacebook,
  SiLinkedin,
  SiYoutube,
  SiDiscord,
  SiGithub,
  SiX,
} from "react-icons/si";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <div className="flex gap-2 md:gap-6 text-techy text-lg md:text-2xl mx-auto w-full justify-center flex-wrap">
      {[
        {
          icon: SiInstagram,
          href: "https://www.instagram.com/kiii__ki11/",
          color: "hover:text-pinky",
        },
        {
          icon: SiFacebook,
          href: "https://www.facebook.com/kikii1011/",
          color: "hover:text-blue-400",
        },
        {
          icon: SiX,
          href: "https://x.com/kikiii__ki11",
          color: "hover:text-blue-300",
        },
        {
          icon: SiYoutube,
          href: "https://www.youtube.com/channel/UCW801YOi_oZCHsWBRCv7Kpg",
          color: "hover:text-red-400",
        },
        {
          icon: SiLinkedin,
          href: "https://www.linkedin.com/in/karis-ruth-jumawan/",
          color: "hover:text-blue-500",
        },
        {
          icon: SiGithub,
          href: "https://github.com/Dbug1011",
          color: "hover:text-techy",
        },
        {
          icon: SiDiscord,
          href: "https://discordapp.com/users/dbug1011",
          color: "hover:text-indigo-400",
        },
      ].map(({ icon: Icon, href, color }, index) => (
        <Link key={index} href={href}>
          <div className="relative group">
            <div className="w-8 md:w-12 h-8 md:h-12 bg-black border-2 border-techy flex items-center justify-center transition-all duration-200 group-hover:bg-techy group-hover:border-techy">
              <Icon
                className={`transition-all duration-200 ${color} group-hover:text-black`}
              />
            </div>
            {/* Cute pixel decoration */}
            <div className="absolute -top-1 -right-1 w-1 md:w-2 h-1 md:h-2 bg-pinky opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
