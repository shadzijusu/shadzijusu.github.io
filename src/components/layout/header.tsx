import { Link } from "react-scroll";
import { SideNav } from "./sidenav";

export default function Header() {
  return (
    <header className="h-20 flex items-center gap-4 z-[1] bg-[#25202F] sticky top-0 z-10">
      <div className="container h-16 flex items-center justify-between">
        <Link to="/">
          <img src="/logo.svg" alt="logo" className="h-8" />
        </Link>
        <nav className="hidden flex-col gap-6 text-base lg:flex lg:flex-row lg:items-center lg:gap-10 text-lg">
          <Link
            to="home"
            smooth
            spy
            activeClass="active"
            className="text-[#7E7F86] capitalize hover:text-white hover:cursor-pointer"
            offset={-80}
          >
            Home
          </Link>
          <Link
            to="about-me"
            smooth
            spy
            activeClass="active"
            className="text-[#7E7F86] capitalize hover:text-white hover:cursor-pointer"
            offset={-80}
          >
            About Me
          </Link>
          <Link
            to="experience"
            smooth
            spy
            activeClass="active"
            className="text-[#7E7F86] capitalize hover:text-white hover:cursor-pointer"
            offset={-80}
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth
            spy
            activeClass="active"
            className="text-[#7E7F86] capitalize hover:text-white hover:cursor-pointer"
            offset={-80}
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth
            spy
            activeClass="active"
            className="text-[#7E7F86] capitalize hover:text-white hover:cursor-pointer"
            offset={-80}
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth
            spy
            activeClass="active"
            className="text-[#7E7F86] capitalize hover:text-white hover:cursor-pointer"
            offset={-80}
          >
            Contact
          </Link>
        </nav>
      </div>

      <div className="flex lg:hidden pl-2">
        <SideNav />
      </div>
    </header>
  );
}
