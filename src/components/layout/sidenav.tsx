import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Link } from "react-scroll";

export function SideNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="sidenav__trigger text-muted-foreground" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="sidenav flex flex-col justify-between bg-black/50 backdrop-blur-lg supports-[backdrop-filter]:bg-black/10 border-r border-muted-foreground/40 shadow-lg"
      >
        <div>
          <SheetHeader>
            <SheetTitle className="sidenav_title">
              <div className="sidenav_logo__container">
                <Link to="/">
                  <img src="/logo.svg" alt="logo" className="h-8" />
                </Link>
              </div>
            </SheetTitle>
          </SheetHeader>
          <nav>
            <SheetClose asChild>
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
            </SheetClose>
            <SheetClose asChild>
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
            </SheetClose>
            <SheetClose asChild>
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
            </SheetClose>
            <SheetClose asChild>
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
            </SheetClose>
            <SheetClose asChild>
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
            </SheetClose>
            <SheetClose asChild>
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
            </SheetClose>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
