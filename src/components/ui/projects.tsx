import { ProjectCard } from "./project-card";
import { ScrollArea, ScrollBar } from "./scroll-area";

export default function Projects() {
  const frontendProjects = [
    {
      title: "Roarington",
      description:
        "Roarington is a digital platform for classic car enthusiasts, where iconic cars from the 20th century are given a new life online. I contributed to building the platform frontend using Angular, Tailwind for styling, and GraphQL for data fetching. One of my main contributions was embedding 3D showrooms with Pixel Streaming, allowing users to explore detailed digital replicas of these classic cars directly in their browser.",
      image: "/images/roarington.webp",
      link: "https://roarington.com/",
      toolsUsed: ["Angular", "Tailwind", "GraphQL"],
    },
    {
      title: "OVRLAY",
      description:
        "OVRLAY offers immersive, technology-driven experiences that help businesses engage with customers in innovative ways. My role involved developing the frontend using Remix, implementing a 3D showroom with AI-driven digital human, and bringing it to the frontend using Pixel Streaming. I also worked with GraphQL to optimize data flow, while utilizing Tailwind for clean and responsive design.",
      image: "/images/ovrlay.png",
      link: "https://ovrlay.world/",
      toolsUsed: ["Remix", "Tailwind", "GraphQL"],
    },
    {
      title: "BANZAI COLLECTION",
      description:
        "BANZAI COLLECTION is all about blending innovation and heritage, offering exclusive services and events under the theme of preserving the past while embracing the future. I was responsible for building the frontend using Remix, ensuring that the platform is both visually appealing and user-friendly.",
      image: "/images/banzai.png",
      link: "https://banzai-collection.com/en/",
      toolsUsed: ["Remix", "GraphQL", "Tailwind"],
    },
  ];

  const AIProjects = [
    {
      title: "AI-Powered Marketing Automation",
      description:
        "Creating content for traditional marketing channels such as newsletter and podcasts can be time-consuming and poses a challenge. I developed an AI-powered solution using OpenAI and make.com for automation, that automates that process using generative AI. For newsletters, the automation includes everything from creating the content, generating a suitable image for each article, to sending out the newsletter. For podcasts, the automation includes creating the content, generating an AI-based speech synthesis, and even publication of the podcast.",
      image: "/images/marketing-automation.png",
      link: "https://ovrlay.world/en/services/interaction",
      toolsUsed: ["OpenAI", "make.com"],
    },
    {
      title: "Showroom with AI-driven Digital Human",
      description:
        "Built an AI-powered digital human showroom featuring a digital twin of a car. The goal was to create an interactive experience where users could communicate with a lifelike avatar. I developed the showroom using Unreal Engine, and integrated OpenAI to give the digital human knowledge and a voice.",
      image: "/images/showroom.webp",
      link: "https://ovrlay.world/en/services/interaction#sonya",
      toolsUsed: ["OpenAI", "Unreal Engine", "Pixel Streaming"],
    },
  ];
  const mobileProjects = [
    {
      title: "Welcome to Konjic",
      description:
        "A tourist app created using React Native, that offers an all-in-one guide to Konjic, featuring Tito's Bunker, museums, local restaurants, accommodation options, and traditional crafts. It offers insights into Konjic's cultural and historical landmarks.",
      image: "/images/konjic.jpg",
      link: "",
      toolsUsed: ["React Native"],
    },
    {
      title: "STOLAC - Open Air Museum",
      description:
        "This is a tourist app designed for Stolac, known for its rich cultural and historical heritage. The app was developed using React Native and it serves as a guide, allowing users to explore the town's open-air museum and learn more about its historical sites and natural beauty.",
      image: "/images/stolac.png",
      link: "",
      toolsUsed: ["React Native"],
    },
    {
      title: "Experience Jablanica",
      description:
        "I developed the app using React Native to let users explore the cultural, historical, and natural significance of Jablanica by interacting with different features the app offers.",
      image: "/images/jablanica.png",
      link: "",
      toolsUsed: ["React Native"],
    },
    {
      title: "Moji Lijekovi",
      description:
        "Upgraded an existing mobile app focused on helping users manage their medications. I implemented new features like user authentication and account management, and medication intake tracking with reminders. The app was developed using React Native.",
      image: "/images/medicine-mobile.png",
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
          <div className="flex w-max space-x-4 p-2 md:p-4">
            {frontendProjects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <h2 className="text-2xl mt-12">AI Projects</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-4 p-2 md:p-4">
            {AIProjects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <h2 className="text-2xl mt-12">React Native Projects</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-4 p-2 md:p-4">
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
