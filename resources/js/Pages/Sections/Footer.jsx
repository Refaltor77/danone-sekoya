// @sekoyaDigitalTech
// https://www.sekoya.digital/

import "../../../css/sections/footer.css";

// Footer component displaying links to regulations, data protection, and legal mentions.
export default function Footer() {
    return (
        <footer
            id={"footer_section"}
            className="p-6 sm:p-10 lg:px-32 text-white flex items-center justify-between flex-wrap"
        >
            {/* Decorative image */}
            <img
                src={"/storage/images/last_ladybird.svg"}
                className="absolute -translate-y-20"
                alt={"second-ladybird"}
                id={"ladyfooter"}
            />

            {/* Navigation links */}
            <nav className="flex items-center gap-2 flex-wrap">
                <a className="rubik text_nav_footer" href={"#"} target={"_blank"}>Règlement et conditions¹</a>
                <p className="rubik text_nav_footer">|</p>
                <a className="rubik text_nav_footer" href={"#"} target={"_blank"}>Protection des données</a>
                <p className="rubik text_nav_footer">|</p>
                <a className="rubik text_nav_footer" href={"#"} target={"_blank"}>Mentions légales</a>
            </nav>

            {/* Sekoya logo with link */}
            <a href={"https://www.sekoya.digital/"} target={"_blank"}>
                <img
                    src={"/storage/images/sekoya_logo.svg"}
                    alt={"sekoya_logo"}
                    className="mt-10 lg:mt-0"
                />
            </a>
        </footer>
    );
}
