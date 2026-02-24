import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center font-ubuntu-mono py-4">
      <SocialIcons />
      <p className="text-sm md:text-lg text-center">
        &copy; 2026 Cevin Albert Yonathan. All rights reserved.
      </p>
    </footer>
  );
}
