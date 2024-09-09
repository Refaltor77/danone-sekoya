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

export default function ButtonLink({ id = "", className = "", children }) {
    return (
        <Link className={"text_button_link p-4 px-24 " + className} id={id}>
            <p className={"kga text-white"}>
                {children}
            </p>
        </Link>
    );
}
