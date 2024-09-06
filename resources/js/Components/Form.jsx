/*
 * Formulaire du site internet, le fonctionnement est uniquement dans
 * ce composant avec useForm() qui est relié a Innertia pour allez
 * envoyé les données coté backend via la route "form.post"
 * @sekoyaDev
 */

import "../../../resources/css/components/form.css";
import NewGameImg from "@/Components/NewGameImg.jsx";
import InputText from "@/Components/InputText.jsx";
import InputEmail from "@/Components/InputEmail.jsx";
import SelectDayInput from "@/Components/SelectDayInput.jsx";
import SelectMonthInput from "@/Components/SelectMonthInput.jsx";
import SelectYearInput from "@/Components/SelectYearInput.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import ButtonProcessing from "@/Components/ButtonProcessing.jsx";

export default function Form()
{
    return (
        <form
            id={"form_container"}
            className={"-translate-y-14"}
        >
            <NewGameImg/>
            <section className={"px-4 -translate-y-10 flex-col flex"}>
                <h1
                    id={"title_form"}
                    className={"kga text-center primary-color -translate-y-2"}
                >
                    Jouez pour remporter
                </h1>
                <span
                    id={"span_form"}
                    className={"primary-color kga self-center -translate-y-2"}
                >
                    l’un des 5 paniers gourmands¹
                </span>
                <section className={"w-full px-4 mt-1 flex-col flex gap-2"}>
                    <InputText
                        placeholder={"Prénom*"}
                        className={"w-full"}
                    />
                    <InputText
                        placeholder={"Nom*"}
                        className={"w-full"}
                    />
                    <InputEmail
                        placeholder={"Adresse mail*"}
                        className={"w-full"}
                    />
                </section>
                <p
                    className={"rubik secondary-color font-semibold px-4 mt-4"}
                    id={"text_secondary"}
                >
                    Date d’anniversaire de bébé
                </p>
                <div className={"items-center flex justify-between px-4 mt-1"}>
                    <SelectDayInput/>
                    <SelectMonthInput/>
                    <SelectYearInput/>
                </div>
                <div className={"px-4 mt-6 flex flex-col gap-2"}>
                    <Checkbox
                        className={"rounded-full"}
                        pixelLabel={14}
                        id={"promos_bledina"}
                        label={"Je souhaite recevoir les offres promotionnelles de Blédina"}
                    />
                    <Checkbox
                        className={"rounded-full"}
                        pixelLabel={14}
                        id={"promos_kiri"}
                        label={"Je souhaite recevoir les offres promotionnelles de Ribambel (dont Kiri)"}
                    />
                </div>
                <span
                    id={"span_click"}
                    className={"text-center mt-4"}
                >
                    En cliquant sur “Je participe”, vous acceptez les <a href={"#"} className={"underline"}>conditions du jeu.</a>
                </span>
                <div className={"flex items-center justify-center mt-1"}>
                    <ButtonProcessing
                        processing={false}
                        id={"button_send"}
                    >
                        <span className={"kga"}>Je participe</span>
                    </ButtonProcessing>
                </div>
                <div className={"px-2 flex flex-col mt-2"}>
                    <span className={"span_line_bottom rubik"}>* Champs obligatoires</span>
                    <span className={"span_line_bottom rubik"}>
                        ¹ La composition des paniers gourmands est détaillée dans le <a href={"#"} className={"underline"}>règlement du jeu</a>
                    </span>
                </div>
            </section>
        </form>
    )
}
