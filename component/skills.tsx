const skills = [
    {
        category: "Backend",
        items: "PHP, Laravel, CodeIgniter, Java, Python",
    },
    {
        category: "Frontend",
        items: "React, Angular, Tailwind CSS, Bootstrap",
    },
    {
        category: "AI & Integrations",
        items: "OpenAI API, Agentic/Automation Systems",
    },
    {
        category: "CMS",
        items: "WordPress, Shopify",
    },
    {
        category: "Databases & Caching",
        items: "MySQL, PostgreSQL, MongoDB, Redis",
    },
    {
        category: "Cloud & Storage",
        items: "AWS S3",
    },
    {
        category: "DevOps & Deployment",
        items: "CI/CD, Docker, Git",
    },
    {
        category: "Version Control",
        items: "GitHub, Bitbucket",
    },
    {
        category: "Tools & Collaboration",
        items: "Jira, Confluence",
    },
    {
        category: "Queue & Processing",
        items: "Laravel Horizon",
    },
];

export default function Skills() {
    return (
        <section className="mt-20">
            <h2 className="mb-8 text-lg font-semibold">
                Skills
            </h2>

            <div className="space-y-6">
                {skills.map((skill) => (
                    <div
                        key={skill.category}
                        className="grid grid-cols-1 gap-2 md:grid-cols-[180px_1fr] md:gap-6"
                    >
                        <div className="text-gray-500">
                            {skill.category}
                        </div>

                        <div className="font-medium">
                            {skill.items}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}