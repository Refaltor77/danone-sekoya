// @sekoyaDigitalTech
// https://www.sekoya.digital/

import "../../../css/sections/footer.css";

// Footer component displaying links to regulations, data protection, and legal mentions.
export default function Footer() {
    return (
        <footer
            id={"footer_section"}
            className="text-white flex flex-col"
        >
            <img
                src={"/storage/images/last_ladybird.svg"}
                className="absolute -translate-y-20 element"
                alt={"second-ladybird"}
                id={"ladyfooter"}
            />
            <div className="p-6 sm:p-10 lg:px-32 text-white flex items-center justify-between flex-wrap">
                {/* Navigation links */}
                <nav className="flex items-center gap-2 flex-wrap">
                    <a className="rubik text_nav_footer" href={"/storage/rules.pdf"} target={"_blank"}>Règlement et conditions¹</a>
                    <p className="rubik text_nav_footer">|</p>
                    <a className="rubik text_nav_footer"
                       href={"https://shop.bledina.com/content/13-politique-de-protection-de-la-vie-privee"}
                       target={"_blank"}>Protection des données</a>
                    <p className="rubik text_nav_footer">|</p>
                    <a className="rubik text_nav_footer" href={"https://shop.bledina.com/content/12-mentions-legales"}
                       target={"_blank"}>Mentions légales</a>
                </nav>

                {/* Sekoya logo with link */}
                <a href={"https://www.sekoya.digital/"} target={"_blank"}>
                    <img
                        src={"/storage/images/sekoya_logo.svg"}
                        alt={"sekoya_logo"}
                        className="mt-10 lg:mt-0"
                    />
                </a>
            </div>
            <div className={"p-6 sm:p-10 lg:px-32 flex flex-col gap-0 sm:gap-0"}>
                <p className="rubik text_nav_footer">¹ La composition des paniers gourmands est détaillée dans le <a className={"underline"} href={"/storage/rules.pdf"}>règlement du jeu.</a></p>
                <span className="rubik text_nav_footer mt-4">Jeu sans obligation d'achat du 16/09/2024 au 16/10/2024 réservé aux personnes physiques majeures
                    résidant en France (Corse comprise). Voir détails du <a className={"underline"} href={"/storage/rules.pdf"}>règlement du jeu ici.</a></span>
                <span className="rubik text_nav_footer mt-4">² Blédina SAS, RCS de Lyon 301 374 922</span>
                <span className="rubik text_nav_footer">³ RIBAMBEL SA, RCS de Nanterre 538 929 076</span>
                <span className="rubik text_nav_footer">"BOUGER, JOUER EST INDISPENSABLE AU DÉVELOPPEMENT DE VOTRE ENFANT"</span>
            </div>
        </footer>
    );
}
