import { VerticalCardSlider } from "./vertical-card-slider";

export default function Projects() {
  const frontendProjects = [
    {
      title: "Roarington",
      description:
        "Roarington is a digital platform for classic car enthusiasts, where iconic cars from the 20th century are given a new life online. I contributed to building the platform frontend using Angular, Tailwind for styling, and GraphQL for data fetching. One of my main contributions was embedding 3D showrooms with Pixel Streaming, allowing users to explore detailed digital replicas of these classic cars directly in their browser.",
      image: "/images/roarington.webp",
      toolsUsed: ["Angular", "Tailwind", "GraphQL"],
      link: "https://roarington.com/",
    },
    {
      title: "OVRLAY",
      description:
        "OVRLAY offers immersive, technology-driven experiences that help businesses engage with customers in innovative ways. My role involved developing the frontend using Remix, implementing a 3D showroom with AI-driven digital human, and bringing it to the frontend using Pixel Streaming. I also worked with GraphQL to optimize data flow, while utilizing Tailwind for clean and responsive design.",
      image: "/images/ovrlay.png",
      toolsUsed: ["Remix", "Tailwind", "GraphQL"],
      link: "https://ovrlay.world/",
    },
    {
      title: "BANZAI COLLECTION",
      description:
        "BANZAI COLLECTION is all about blending innovation and heritage, offering exclusive services and events under the theme of preserving the past while embracing the future. I was responsible for building the frontend using React, ensuring that the platform is both visually appealing and user-friendly.",
      image: "/images/banzai.png",
      toolsUsed: ["React", "Tailwind", "GraphQL"],
      link: "https://banzai-collection.com/en/",
    },
  ];

  const AIProjects = [
    {
      title: "AI-Powered Marketing Automation",
      description:
        "Creating content for traditional marketing channels such as newsletter and podcasts can be time-consuming and poses a challenge. I developed an AI-powered solution using OpenAI and make.com for automation, that automates that process using generative AI. For newsletters, the automation includes everything from creating the content, generating a suitable image for each article, to sending out the newsletter.",
      image: "/images/marketing-automation.png",
      toolsUsed: ["OpenAI", "make.com"],
      link: "https://ovrlay.world/en/services/interaction",
    },
    {
      title: "Showroom with AI-driven Digital Human",
      description:
        "Built an AI-powered digital human showroom featuring a digital twin of a car. The goal was to create an interactive experience where users could communicate with a lifelike avatar. I developed the showroom using Unreal Engine, and integrated OpenAI to give the digital human knowledge and a voice.",
      image: "/images/showroom.webp",
      toolsUsed: ["OpenAI", "Unreal Engine", "Pixel Streaming"],
      link: "https://ovrlay.world/en/services/interaction#sonya",
    },
  ];

  const mobileProjects = [
    {
      title: "Welcome to Konjic",
      description:
        "A tourist app created using React Native, that offers an all-in-one guide to Konjic, featuring Tito's Bunker, museums, local restaurants, accommodation options, and traditional crafts. It offers insights into Konjic's cultural and historical landmarks.",
      image: "/images/konjic.jpg",
      toolsUsed: ["React Native"],
      link: "",
    },
    {
      title: "STOLAC - Open Air Museum",
      description:
        "This is a tourist app designed for Stolac, known for its rich cultural and historical heritage. The app was developed using React Native and it serves as a guide, allowing users to explore the town's open-air museum and learn more about its historical sites and natural beauty.",
      image: "/images/stolac.png",
      toolsUsed: ["React Native"],
      link: "",
    },
    {
      title: "Experience Jablanica",
      description:
        "I developed the app using React Native to let users explore the cultural, historical, and natural significance of Jablanica by interacting with different features the app offers.",
      image: "/images/jablanica.png",
      toolsUsed: ["React Native"],
      link: "",
    },
    {
      title: "Moji Lijekovi",
      description:
        "Upgraded an existing mobile app focused on helping users manage their medications. I implemented new features like user authentication and account management, and medication intake tracking with reminders. The app was developed using React Native.",
      image: "/images/medicine-mobile.png",
      toolsUsed: ["React Native"],
      link: "",
    },
  ];

  return (
    <div className="bg-[#25202F] py-16 text-white">
      <h1 className="font-bold text-5xl w-full border-b pb-6 border-[#7E7F86] text-white container mx-auto">
        Projects
      </h1>
      <section className="bg-[#25202F]">
        <VerticalCardSlider
          title="Frontend Projects"
          slides={frontendProjects}
        />
      </section>
      <VerticalCardSlider title="AI Projects" slides={AIProjects} />

      <VerticalCardSlider
        title="React Native Projects"
        slides={mobileProjects}
      />
    </div>
  );
}
