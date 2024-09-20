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
    <div className="border-2 border-white rounded-3xl p-6">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <img src={project.image} className="rounded-md h-48"></img>
      <p className="max-w-2xl whitespace-normal">{project.description}</p>
      <a href={project.link} target="_blank">
        {project.link}
      </a>
      <div className="flex flex-col">
        {project.toolsUsed.map((tool) => (
          <div className="rounded-md text-white p-2 border border-white w-fit h-fit text-xs">
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
};
