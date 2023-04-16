import Link from "next/link";
import { links } from "./links";

export default function Header() {
    return (
        <header>
            <ul>
                {links.map(({ link, label }) => (
                    <li key={label}>
                        <Link href={link}>{label}</Link>
                    </li>
                ))}
            </ul>
        </header>
    )
}

