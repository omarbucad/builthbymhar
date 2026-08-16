const projects = [
    {
        year: "2026 - Present",
        name: "AnongSabi",
        description:
            "A customer feedback platform that helps businesses collect honest feedback through a conversational experience instead of traditional survey forms.",
        href: "https://anongsabi.com",
    },
    {
        year: "2018 - 2026",
        name: "Visual Workflow Platform",
        description:
            "A visual workflow platform built using Angular and CodeIgniter.",
    },
    {
        year: "2018 - 2026",
        name: "Sales Deal Tracking & Scoring",
        description:
            "A web-based application for tracking and scoring sales deals to support business decision-making.",
    },
    {
        year: "2018 - 2026",
        name: "Consultant Assistant",
        description:
            "A web-based assistant built with Laravel and React to help streamline consultant workflows.",
    },
];

export default function Projects() {
    return (
        <section className="mt-20">
            <h2 className="mb-8 text-lg font-semibold">
                Projects
            </h2>

            <div className="space-y-10">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="grid grid-cols-1 gap-6 md:grid-cols-[180px_1fr]"
                    >
                        <div className="text-gray-500">
                            {project.year}
                        </div>

                        <div>
                            <h3 className="font-medium">
                                {project.href ? (
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {project.name} ↗
                                    </a>
                                ) : (
                                    project.name
                                )}
                            </h3>

                            <p className="mt-2 max-w-2xl leading-7 text-gray-600">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}