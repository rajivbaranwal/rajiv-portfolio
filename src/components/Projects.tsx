export default function Projects() {
  const projects = [
    {
      title: "AI Portfolio Chatbot",
      description: "AI chatbot that answers questions about me using OpenAI.",
      tech: "Next.js, Node.js, OpenAI",
      live: "#",
      github: "#",
    },
    {
      title: "DevOps CI/CD Pipeline",
      description: "Automated deployment using Docker and GitHub Actions.",
      tech: "Docker, AWS, GitHub Actions",
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>

            <p className="text-gray-400 mt-4">{project.description}</p>

            <p className="text-sm text-gray-500 mt-2">{project.tech}</p>

            <div className="mt-6 flex gap-4">
              <a
                href={project.live}
                className="px-4 py-2 bg-blue-600 rounded-lg"
              >
                Live
              </a>

              <a
                href={project.github}
                className="px-4 py-2 border border-gray-500 rounded-lg"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
