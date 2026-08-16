import Image from "next/image";

export default function Profile() {
    return (
        <div className="flex items-center gap-5">
            <Image
                src="/profile.png"
                alt="Romar Bucad"
                width={100}
                height={100}
                className="h-20 w-20 rounded-full object-cover"
                priority
            />

            <div>
                <h1 className="text-3xl font-semibold">
                    Romar Bucad
                </h1>

                <p className="mt-1 text-gray-500">
                    Full Stack Developer in the Philippines
                </p>

                <a
                    href="mailto:omarbucad@gmail.com"
                    className="mt-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 hover:underline"
                >
                    omarbucad@gmail.com
                </a>
            </div>
        </div>
    );
}