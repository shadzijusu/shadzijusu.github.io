import { ProjectCard } from "./project-card";
import { ScrollArea, ScrollBar } from "./scroll-area";

export default function Projects() {
  const frontendProjects = [
    {
      title: "Roarington",
      description:
        "Roarington is the virtual ecosystem of classic cars, where automotive cultural assets from the 20th century find a second digital life in the 21st century. Join the petrol head's community and access virtual showrooms, latest news, and get a digital twin of your classic car.",
      image: "/images/roarington.webp",
      link: "https://roarington.com/",
      toolsUsed: ["Angular", "Pixel Streaming", "Tailwind", "GraphQL"],
    },
    {
      title: "OVRLAY",
      description:
        "OVRLAY is your technology-driven immersive experience expert building multi-dimensional relations with your customers.",
      image: "/images/ovrlay.png",
      link: "https://ovrlay.world/",
      toolsUsed: ["React", "GraphQL", "Tailwind", "Pixel Streaming"],
    },
    {
      title: "BANZAI COLLECTION",
      description:
        "BANZAI COLLECTION is the newest addition to BANZAI’s growing family of exclusive services and events bound by one common house motto: “Innovating the past & Preserving the future”.",
      image: "/images/banzai.png",
      link: "https://banzai-collection.com/en/",
      toolsUsed: ["React", "GraphQL", "Tailwind"],
    },
  ];

  const AIProjects = [
    {
      title: "AI-Powered Marketing Automation",
      description: "Developed an AI-driven system for automated marketing",
      image: "/images/marketing-automation.png",
      link: "https://ovrlay.world/en/services/interaction",
      toolsUsed: ["OpenAI", "make.com"],
    },
    {
      title: "Showroom with AI-driven Digital Human",
      description: "Developed an AI-driven digital human showroom",
      image: "/images/showroom.webp",
      link: "https://ovrlay.world/en/services/interaction#sonya",
      toolsUsed: ["OpenAI", "Unreal Engine", "Pixel Streaming"],
    },
  ];
  const mobileProjects = [
    {
      title: "Experience Jablanica",
      description:
        "App developed for smart board in the Museum for the battle.. on Neretva, created with React Native. Experience Jablanica to see cultural-historical and natural potential.",
      image: "/images/jablanica.png",
      link: "",
      toolsUsed: ["React Native"],
    },
    {
      title: "Medicine Mobile",
      description:
        "Upgraded app with new features like authentication creating account, log in sign up. Added tracking medication with reminders, adding different type of medication..",
      image: "/images/medicine-mobile.png",
      link: "",
      toolsUsed: ["React Native"],
    },
    {
      title: "STOLAC - Open Air Museum",
      description: "Tourist app for Stolac, ...",
      image: "/images/stolac.png",
      link: "",
      toolsUsed: ["React Native"],
    },
    {
      title: "Welcome to Konjic",
      description:
        "Tourist apps for Konjic, Titos bunker, reastaurants and acommondations in the city.",
      image: "/images/konjic.jpg",
      link: "",
      toolsUsed: ["React Native"],
    },
  ];
  return (
    <div className="py-16 mb-16">
      <div className="container mx-auto">
        <h1 className="font-bold text-5xl w-full border-b pb-6 border-[#7E7F86]">
          Projects
        </h1>

        <h2 className="text-2xl mt-12">Frontend Projects</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-4 p-4">
            {frontendProjects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <h2 className="text-2xl mt-12">AI Projects</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-4 p-4">
            {AIProjects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <h2 className="text-2xl mt-12">Mobile Projects</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-4 p-4">
            {mobileProjects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
