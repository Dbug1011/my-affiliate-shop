import React from "react";
import {
  SiInstagram,
  SiFacebook,
  SiTwitter,
  SiLinkedin,
  SiTiktok,
  SiYoutube,
  SiDiscord,
  SiGithub,
  SiX,
} from "react-icons/si";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <div className="flex gap-4 text-gray-600 text-xl mx-auto w-full justify-center">
      <Link href={"https://www.instagram.com/kiii__ki11/"}>
        <SiInstagram className="hover:scale-150 hover:text-pinky transition-all duration-200" />
      </Link>
      <Link href={"https://www.facebook.com/kikii1011/"}>
        <SiFacebook className="hover:scale-150 hover:text-blue-600 transition-all duration-200" />
      </Link>
      <Link href={"https://x.com/kikiii__ki11"}>
        <SiX className="hover:scale-150 hover:text-blue-400 transition-all duration-200" />
      </Link>
      <Link href={"https://www.youtube.com/channel/UCW801YOi_oZCHsWBRCv7Kpg"}>
        <SiYoutube className="hover:scale-150 hover:text-red-600 transition-all duration-200" />
      </Link>
      <Link href={"https://www.linkedin.com/in/karis-ruth-jumawan/"}>
        <SiLinkedin className="hover:scale-150 hover:text-blue-700 transition-all duration-200" />
      </Link>
      <Link href={"https://github.com/Dbug1011"}>
        <SiGithub className="hover:scale-150 hover:text-techy transition-all duration-200" />
      </Link>
      <Link href={"https://discordapp.com/users/dbug1011"}>
        <SiDiscord className="hover:scale-150 hover:text-indigo-600 transition-all duration-200" />
      </Link>
    </div>
  );
};

export default SocialIcons;
