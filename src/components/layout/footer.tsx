import { LinkedinIcon, MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 md:py-16 border-t md:px-12 bg-gradient-to-b from-[#25202F] to-[#000000]">
      <div className="container text-white">
        <h1>Contact me</h1>
        <div className="flex flex-row">
          <MailIcon />
          <p>hadzijusufovicselma@gmail.com</p>
        </div>
        <div className="flex flex-row">
          <LinkedinIcon />
          <p>link</p>
        </div>
        <p className="text-sm text-center text-white md:text-left">
          © 2024 Selma Hadžijusufović. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
