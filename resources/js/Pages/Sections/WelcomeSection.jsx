/*
 * Première section du site, qui contient le formulaire.
 * @sekoyaDev
 */

/* Fichier css qui contient le style de la section,       */
/* toute les sections du site possède leurs propre css    */
/* afin de facilité le responsive (propre !)              */
import "../../../css/sections/welcomeSection.css";
import Logo from "@/Components/Logo.jsx";
import Form from "@/Components/Form.jsx";

export default function WelcomeSection()
{
    return (
        <div id={"welcome_section"} className={""}>
            <section
                id={""}
                className={"container_center"}
            >
                <Logo classNameDiv={"py-4"}/>
                <section
                    id={"form-container"}
                    className={"flex justify-end px-14"}
                >
                    <Form/>
                </section>
            </section>
        </div>
    );
}
