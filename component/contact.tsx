const contacts = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mhar-bucad",
        text: "mhar-bucad",
    },
    {
        label: "GitHub",
        href: "https://github.com/omarbucad",
        text: "omarbucad",
    },
    // {
    //     label: "YouTube",
    //     href: "https://www.youtube.com/@mhar",
    //     text: "@mhar",
    // },
    // {
    //     label: "Facebook",
    //     href: "https://www.facebook.com/omarbucad/",
    //     text: "omarbucad",
    // },
];

export default function Contact() {
    return (
        <section className="mt-20 mb-24">
            <h2 className="mb-8 text-lg font-semibold">
                Contact
            </h2>

            <div className="space-y-5">
                {contacts.map((contact) => (
                    <div
                        key={contact.label}
                        className="grid grid-cols-[110px_1fr] gap-4"
                    >
                        <div className="text-gray-500">
                            {contact.label}
                        </div>

                        <a
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            {contact.text} ↗
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}