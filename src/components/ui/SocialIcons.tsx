import { Mail } from "lucide-react";
import Image from "next/image";

// type SocialIconsProps = {
//   width: number;
//   height: number;
// };

export default function SocialIcons() {
  return (
    <div className="flex items-center space-x-6">
      <a href="https://www.linkedin.com/in/cevin-albert-yonathan/">
        <Image
          src="/linkedin.png"
          alt="LinkedIn Logo White"
          width={840}
          height={779}
          className="w-9 h-8.5 xl:h-10.5 xl:w-11.5"
        />
      </a>
      <a href="https://github.com/Vinn-Yonathan">
        <Image
          src="/github.svg"
          alt="GitHub Invertocat Logo White Clearspace"
          className="w-12 h-12 xl:w-14 xl:h-14"
          width={1}
          height={1}
        />
      </a>
      <a href="mailto:cevinalbertyonathan@gmail.com">
        <Mail className="w-10 h-10 xl:w-12 xl:h-12" color="white" />
      </a>
    </div>
  );
}
