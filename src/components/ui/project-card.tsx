import { Link } from "lucide-react";

export const ProjectCard = ({
  project,
}: {
  project: {
    title: string;
    description: string;
    image: string;
    link: string;
    toolsUsed: string[];
  };
}) => {
  return (
    <div className="p-2 md:p-6 relative flex flex-col items-center">
      <h1 className="text-lg md:text-2xl mb-4 text-center font-medium">
        {project.title}
      </h1>
      <div className="w-[400px] md:w-auto h-[200px] md:h-[360px]">
        <img
          src={project.image}
          className="rounded-md w-full h-full object-cover object-center"
          alt={project.title}
        ></img>
      </div>

      <p className="max-w-[350px] md:max-w-xl whitespace-normal py-4 md:text-center ">
        {project.description}
      </p>
      <div className="flex flex-row py-2 space-x-4 mb-4">
        {project.toolsUsed.map((tool) => (
          <div
            className="rounded-md p-2 w-fit h-fit text-sm bg-[#25202F] bg-opacity-60 text-white"
            key={tool}
          >
            {tool}
          </div>
        ))}
      </div>
      {project.link !== "" && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center gap-2 hover:underline text-[#8643DC] absolute bottom-0"
        >
          <Link size={20} />
          {project.link}
        </a>
      )}
    </div>
  );
};
