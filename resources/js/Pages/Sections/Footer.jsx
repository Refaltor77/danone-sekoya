import "../../../css/sections/footer.css";

// Règlement et conditions¹
//  |
// Protection des données
//  |
// Mentions légales
export default function Footer()
{
    return (
        <footer id={"footer_section"} className={"p-10 px-32 text-white flex items-center justify-between"}>
            <nav className={"flex items-center gap-2"}>
                <a className={"rubik text_nav_footer"} href={"#"} target={"_blank"}>Règlement et conditions¹</a>
                <p className={"rubik text_nav_footer"}>|</p>
                <a className={"rubik text_nav_footer"} href={"#"} target={"_blank"}>Protection des données</a>
                <p className={"rubik text_nav_footer"}>|</p>
                <a className={"rubik text_nav_footer"} href={"#"} target={"_blank"}>Mentions légales</a>
            </nav>
            <img src={"/storage/images/sekoya_logo.svg"} alt={"sekoya_logo"} />
        </footer>
    );
}
