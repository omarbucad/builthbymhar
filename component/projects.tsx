export default function Projects() {
    return <>
        <section className="mt-20">

            <h2 className="font-semibold text-lg mb-8">
                Side Projects
            </h2>

            <div className="space-y-8">

                <div className="grid grid-cols-[130px_1fr] gap-6">
                    <div className="text-gray-500">2021</div>
                    <div>
                        <h3 className="font-medium">Nature walks ↗</h3>
                    </div>
                </div>

                <div className="grid grid-cols-[130px_1fr] gap-6">
                    <div className="text-gray-500">2020</div>
                    <div>
                        <h3 className="font-medium">Plant-based cookware ↗</h3>
                    </div>
                </div>

                <div className="grid grid-cols-[130px_1fr] gap-6">
                    <div className="text-gray-500">2019</div>
                    <div>
                        <h3 className="font-medium">Interactive art installation ↗</h3>
                    </div>
                </div>

            </div>

        </section>

    </>
}