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
    <div className="p-6 relative flex flex-col items-center">
      <h1 className="text-2xl mb-4 text-center font-semibold">
        {project.title}
      </h1>
      <div className="md:h-[460px]">
        <img
          src={project.image}
          className="rounded-md w-full h-full object-cover object-center"
          alt={project.title}
        ></img>
      </div>

      <p className="max-w-xl whitespace-normal py-2 text-center">
        {project.description}
      </p>
      <div className="flex flex-row py-2">
        {project.toolsUsed.map((tool) => (
          <div className="rounded-md p-2 w-fit h-fit text-sm" key={tool}>
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
          <Link />
          {project.link}
        </a>
      )}
    </div>
  );
};
