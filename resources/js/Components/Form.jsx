/**
 * Form component for the website.
 *
 * This component handles form submission using `useForm()` from Inertia to send data to the backend via the route "form.post".
 *
 * @param {boolean} showPopup - Boolean to control the display of the popup.
 * @param {function} setShowPopup - Function to update the `showPopup` state.
 *
 * @example
 * <Form showPopup={showPopup} setShowPopup={setShowPopup} />
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
import { useForm } from "@inertiajs/react";

export default function Form({ showPopup, setShowPopup }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: "",
        lastname: "",
        email: "",
        day: "28",
        month: "10",
        year: "2014",
        optinBledina: false,
        optinKiri: false
    });

    /**
     * Handles form submission.
     *
     * Prevents default form submission and sends data to the backend using Inertia's `post` method.
     * On success, it triggers `successHandle`. On error, it logs errors to the console.
     *
     * @param {Event} e - The event object for the form submission.
     */
    const submit = (e) => {
        e.preventDefault();
        post(route("lead.store"), {
            onSuccess: successHandle,
            onError: (errors) => {
                console.log(errors);
            }
        });
    }

    /**
     * Handles successful form submission.
     *
     * Sets the `showPopup` state to `true` to display the popup.
     */
    const successHandle = () => {
        setShowPopup(true);
    }

    return (
        <div
            id={"form_container"}
            className={"-translate-y-14"}
        >
            <NewGameImg />
            <form onSubmit={submit} className={"px-4 -translate-y-10 flex-col flex"}>
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
                <section id={"section_inputs"} className={"w-full px-4 mt-1 flex-col flex gap-2"}>
                    <InputText
                        placeholder={"Prénom*"}
                        className={"w-full inputs"}
                        value={data.firstname}
                        onChange={(e) => {
                            setData('firstname', e.target.value);
                        }}
                        error={errors.firstname}
                    />
                    <InputText
                        placeholder={"Nom*"}
                        className={"w-full inputs"}
                        value={data.lastname}
                        onChange={(e) => {
                            setData('lastname', e.target.value);
                        }}
                        error={errors.lastname}
                    />
                    <InputEmail
                        placeholder={"Adresse mail*"}
                        className={"w-full inputs"}
                        value={data.email}
                        onChange={(e) => {
                            setData('email', e.target.value);
                        }}
                        error={errors.email}
                    />
                </section>
                <p
                    className={"rubik secondary-color font-semibold px-4 mt-4"}
                    id={"text_secondary"}
                >
                    Date d’anniversaire de bébé
                </p>
                <div id={"sections_selects"} className={"items-center flex justify-between px-4 mt-1"}>
                    <SelectDayInput
                        className={"select_inputs"}
                        value={data.day}
                        onChange={(e) => {
                            setData('day', e.target.value);
                        }}
                        error={errors.day}
                    />
                    <SelectMonthInput
                        className={"select_inputs"}
                        value={data.month}
                        onChange={(e) => {
                            setData('month', e.target.value);
                        }}
                        error={errors.month}
                    />
                    <SelectYearInput
                        className={"select_inputs"}
                        value={data.year}
                        onChange={(e) => {
                            setData('year', e.target.value);
                        }}
                        error={errors.year}
                    />
                </div>
                <div id={"div_checkbox"} className={"px-4 mt-6 flex flex-col gap-2"}>
                    <Checkbox
                        className={"rounded-full"}
                        pixelLabel={14}
                        id={"promos_bledina"}
                        label={"Je souhaite recevoir les offres promotionnelles de Blédina"}
                        value={data.optinBledina}
                        onClick={(e) => {
                            setData('optinBledina', e.target.checked);
                        }}
                    />
                    <Checkbox
                        className={"rounded-full"}
                        pixelLabel={14}
                        id={"promos_kiri"}
                        label={"Je souhaite recevoir les offres promotionnelles de Ribambel (dont Kiri)"}
                        value={data.optinKiri}
                        onClick={(e) => {
                            setData('optinKiri', e.target.checked);
                        }}
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
                        processing={processing}
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
            </form>
        </div>
    )
}
