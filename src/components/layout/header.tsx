import { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const userScrolled = () => {
    setHasScrolled(true);
  };

  const userBackToTop = () => {
    setHasScrolled(false);
    if (open) {
      setOpen(false);
    }
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  const onSetActive = () => {
    if (open) {
      setOpen(false);
    }
  };
  const headerLinks = ["home", "about me", "projects", "skills", "contact"];
  return (
    <header className="h-20 flex items-center gap-4 z-[1] bg-[#25202F] sticky top-0">
      <div className="container h-16 flex items-center justify-between">
        <Link to="/">
          <img src="/logo.svg" alt="logo" className="h-6" />
        </Link>
        <nav className="hidden flex-col gap-6 text-base md:flex md:flex-row md:items-center md:gap-10">
          {headerLinks.map((link) => (
            <Link
              to={link}
              className="btn mr-4 sm:mr-12 cursor-pointer text-[#7E7F86] capitalize hover:text-white"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
