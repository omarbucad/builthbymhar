import Image from "next/image";

export default function Profile() {
    return <>
        <div className="flex items-center gap-5">

            <Image src="/profile.png" alt="Romar Bucad" title="Romar Bucad" width={100} height={100} className="w-20 h-20 rounded-full object-cover"/>

            <div>

                <h1 className="text-3xl font-semibold">
                    Romar Bucad
                </h1>

                <p className="text-gray-500 mt-1">
                     Web Developer in the Philippines | Laravel, WordPress & React
                </p>

                <span className="inline-block mt-2 bg-gray-100 rounded-full px-3 py-1 mr-2 text-sm text-gray-600">
                    hello@builtbymhar.tech
                </span>

                <span className="inline-block mt-2 bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-600">
                    omarbucad@gmail.com
                </span>

            </div>

        </div>
    </>
}