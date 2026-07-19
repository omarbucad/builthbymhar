import Image from "next/image";

export default function Skills() {
    return <>
        <section className="mt-20">

            <h2 className="font-semibold text-lg mb-8">
                Skills
            </h2>

            <div className="space-y-10">



                <div className="grid grid-cols-[180px_1fr] gap-6">

                    <div className="text-gray-500">
                        Backend:
                    </div>

                    <div>

                        <h3 className="font-medium">
                            PHP (Laravel, CodeIgniter), Java, Python , NodeJs
                        </h3>

                    </div>

                    <div className="text-gray-500">
                        Frontend:
                    </div>

                    <div>

                        <h3 className="font-medium">
                            React.js, Angular, Tailwind CSS, Bootstrap , Next.js
                        </h3>

                    </div>

                    <div className="text-gray-500">
                        AI & Integrations:
                    </div>

                    <div>

                        <h3 className="font-medium">
                            OpenAI API, Agentic/Automation Systems
                        </h3>

                    </div>


                    <div className="text-gray-500">
                        CMS Platforms:
                    </div>

                    <div>

                        <h3 className="font-medium">
                            WordPress, Shopify
                        </h3>

                    </div>


                    <div className="text-gray-500">
                        Databases & Caching:
                    </div>

                    <div>

                        <h3 className="font-medium">
                            MySQL, PostgreSQL, MongoDB, Redis
                        </h3>

                    </div>


                    <div className="text-gray-500">
                        Cloud & Storage:
                    </div>

                    <div>

                        <h3 className="font-medium">
                            AWS S3
                        </h3>

                    </div>


                    <div className="text-gray-500">
                        DevOps & Deployment:
                    </div>

                    <div>

                        <h3 className="font-medium">
                            CI/CD, Docker, Git
                        </h3>

                    </div>


                    <div className="text-gray-500">
                        Version Control Platforms:
                    </div>

                    <div>

                        <h3 className="font-medium">
                            GitHub, Bitbucket
                        </h3>

                    </div>

                    <div className="text-gray-500">
                        Tools & Collaboration
                    </div>

                    <div>

                        <h3 className="font-medium">
                            Jira, Confluence
                        </h3>

                    </div>

                    <div className="text-gray-500">
                        Queue & Processing:
                    </div>

                    <div>

                        <h3 className="font-medium">
                            Laravel Horizon
                        </h3>

                    </div>


                </div>

            </div>

        </section>

    </>
}