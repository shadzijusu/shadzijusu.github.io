import { cn } from "../../lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Lenis from "lenis";
import { Link } from "lucide-react";
import { useEffect } from "react";

export type VerticalCardSliderItem = {
  title: string | undefined | null;
  description: string | undefined | null;
  image?: string | undefined | null;
  toolsUsed: string[];
  link?: string | undefined | null;
};

export type VerticalCardSliderProps = {
  className?: string;
  linkClassColor?: string;
  title: string | undefined | null;
  rotateImg?: boolean;
  slides: VerticalCardSliderItem[];
  type?: string;
};

export const VerticalCardSlider = ({
  className,
  rotateImg = false,
  title,
  slides,
  type = "default",
}: VerticalCardSliderProps) => {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 0px)", () => {
      gsap.registerPlugin(ScrollTrigger);
      const elements = [...document.querySelectorAll(".v-card")];
      const totalElements = elements.length;

      const lenis = new Lenis({
        lerp: 0.2,
        smoothWheel: true,
        syncTouch: true,
      });

      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time: any) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      elements.forEach((el, position) => {
        const isLast = position === totalElements - 1;
        gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              start: "top top",
              end: "+=100%",
              scrub: true,
            },
          })
          .to(
            el,
            {
              ease: "none",
              startAt: { filter: "brightness(100%) contrast(100%)" },
              filter: isLast ? "none" : "brightness(60%) contrast(135%)",
              yPercent: isLast ? 0 : -2,
            },
            0
          )
          .to(
            el.querySelector(".v-img"),
            {
              ease: "power1.in",
              yPercent: rotateImg ? -20 : -90,
              rotation: rotateImg ? -60 : 0,
            },
            0
          );
      });
    });
  }, [rotateImg]);

  return (
    <div className="relative">
      <div
        className={cn(
          "v-card h-dvh sticky top-0 flex flex-col justify-center",
          className
        )}
      >
        <div className="page">
          <h2 className="landscape:text-[5rem] text-center landscape:text-left">
            {title}
          </h2>
        </div>
      </div>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "v-card h-dvh sticky top-0 flex flex-col justify-center overflow-x-hidden overflow-y-hidden bg-[#25202F]",
            className
          )}
        >
          <div className="page grid landscape:grid-cols-2 gap-10 landscape:gap-20">
            <div className="flex flex-col">
              <h2 className="text-[1.6rem] landscape:text-[2.625rem]">
                {slide.title}
              </h2>
              <p className="text-lg font-light">{slide.description}</p>
              <div className="flex flex-row py-2 space-x-4 my-2">
                {slide.toolsUsed.map((tool) => (
                  <div
                    className="rounded-md p-2 w-fit h-fit text-sm bg-[#8643DC] bg-opacity-60 text-white"
                    key={tool}
                  >
                    {tool}
                  </div>
                ))}
              </div>
              {slide.link !== "" && (
                <a
                  href={slide.link || ""}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row items-center gap-2 hover:underline text-white"
                >
                  <Link size={20} />
                  {slide.link}
                </a>
              )}
            </div>
            <div className="">
              {slide.image && (
                <img
                  className={`v-img rounded-md  ${
                    rotateImg
                      ? "w-[300px] landscape:w-full mx-auto landscape:transform landscape:-translate-y-1/3"
                      : "aspect-portrait"
                  }`}
                  src={slide.image || ""}
                  alt="project"
                  title={slide.title || ""}
                  loading="lazy"
                  width="auto"
                  height="auto"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
