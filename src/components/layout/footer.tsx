import { MailIcon } from "lucide-react";
import { LinkedinIcon } from "../icons/linkedin-icon";

export default function Footer() {
  return (
    <footer className="py-6 md:py-16 border-t md:px-12 bg-gradient-to-b from-[#25202F] to-[#000000] relative">
      <div className="container text-white">
        <div className="flex flex-row gap-4 items-center justify-center">
          <a href="mailto:hadzijusufovicselma@gmail.com">
            <MailIcon size={48} />
          </a>
          <a href="www.linkedin.com/in/selmahadzijusufovic">
            <LinkedinIcon />
          </a>
        </div>
        <p className="text-md text-white absolute bottom-2">
          © 2024 Selma Hadžijusufović. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
