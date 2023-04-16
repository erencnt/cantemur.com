import Link from "next/link";
import { experiences } from "./experiences";

export default function Experiences() {
    return (
        <section className="bg-blue-500 py-32">
            <h1 className="text-center text-5xl text-white font-light mb-16">İş deneyimlerim</h1>
            <div className="grid gap-8 grid-cols-2 m-auto max-w-screen-lg">
                {experiences.map(experience => (
                    <div>
                        <div className="flex flex-row">
                            {experience.icon}
                            <Link href={experience.companyLink} className="text-white text-lg my-auto ml-2">
                                {experience.company}
                            </Link>
                        </div>
                        <p className="text-white">
                            <b>{experience.role}, {experience.location}</b>, ({experience.start}, {experience.end})
                        </p>
                        <p className="text-white text-sm font-light">
                            {experience.detail}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}