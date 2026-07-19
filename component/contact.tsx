export default function Contact() {
    return <>
        <section className="mt-20 mb-24">

            <h2 className="font-semibold text-lg mb-8">
                Contact
            </h2>

            <div className="space-y-5">

                <div className="grid grid-cols-[110px_1fr]">
                    <div className="text-gray-500">LinkedIn</div>
                    <a href="www.linkedin.com/in/mhar-bucad" className="hover:underline">mhar-bucad ↗</a>
                </div>

                <div className="grid grid-cols-[110px_1fr]">
                    <div className="text-gray-500">Github</div>
                    <a href="https://github.com/omarbucad" className="hover:underline">omarbucad ↗</a>
                </div>

                <div className="grid grid-cols-[110px_1fr]">
                    <div className="text-gray-500">Youtube</div>
                    <a href="https://www.youtube.com/@mhar" className="hover:underline">@mhar ↗</a>
                </div>

                <div className="grid grid-cols-[110px_1fr]">
                    <div className="text-gray-500">Facebook</div>
                    <a href="https://www.facebook.com/omarbucad/" className="hover:underline">omarbucad ↗</a>
                </div>



            </div>

        </section>
    </>
}