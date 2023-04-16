import Link from "next/link";
import { certificates } from "./certificates";

export default function Certificates() {
    return (
        <section className="py-32">
            <h1 className="text-center text-5xl text-blue-500 font-light mb-16">Sertifikalarım</h1>
            <div className="grid gap-8 grid-cols-2 m-auto max-w-screen-lg">
                {certificates.map(certificate => (
                    <div>
                        <div className="flex flex-row">
                            {certificate.icon}
                            <div className="ml-2">
                                <Link href={certificate.link} className="text-lg" >
                                    {certificate.name}
                                </Link>
                                <p className="font-thin">
                                    <b>{certificate.from}</b>, ({certificate.date})
                                </p>
                                <p className="text-blue-500 text-sm font-light">
                                    Sertifika kodu: {certificate.code}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}