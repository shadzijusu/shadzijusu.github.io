import { MailIcon } from "lucide-react";
import { LinkedinIcon } from "../icons/linkedin-icon";
import ContactForm from "../forms/contact-form";

export default function Footer() {
  return (
    <footer className="py-48 border-t md:px-12 bg-[#25202F] relative">
      <div className="container">
        <h1 className="text-5xl w-full border-b pb-6 border-[#7E7F86] text-white">
          Contact Me
        </h1>

        <div className="md:w-[40%] mt-4">
          <ContactForm />
        </div>
        <div className="flex flex-row gap-4 items-center justify-center pt-10 md:pt-20 text-white">
          <a href="mailto:hadzijusufovicselma@gmail.com">
            <MailIcon size={36} />
          </a>
          <a
            href="https://linkedin.com/in/selmahadzijusufovic"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
        </div>
        <p className="text-md text-white absolute bottom-2 right-4 font-light">
          © 2024 Selma Hadžijusufović. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
