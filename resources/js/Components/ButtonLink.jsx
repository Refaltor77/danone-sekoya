/**
 *   _____
 *  /     \
 * |  o o  |
 * |   >   |
 * |  \_/  |
 *  \_____/
 *
 * @sekoyaTech
 * @author SekoyaDigital
 */

import { Link } from "@inertiajs/react";
import "../../css/components/buttonLink.css";
export default function ButtonLink({basicLink = false, href = "", id = "", className = "", children}) {

    if (basicLink)
    {
        return (
            <a href={href} target={"_blank"} className={"text_button_link p-4 px-24 " + className} id={id}>
                <p className={"kga text-white"}>
                    {children}
                </p>
            </a>
        );
    }

    return (
        <Link href={href} className={"text_button_link p-4 px-24 " + className} id={id}>
            <p className={"kga text-white"}>
                {children}
            </p>
        </Link>
    );
}
