// @sekoyaDigitalTech
// https://www.sekoya.digital/

import "../../../css/sections/welcomeSection.css";
import Logo from "@/Components/Logo.jsx";
import Form from "@/Components/Form.jsx";

export default function WelcomeSection({ showPopup, setShowPopup }) {
    return (
        <div id={"welcome_section"}>
            {/* Container for centering the content */}
            <section
                id={"container_center"}
                className={"container_center"}
            >
                {/* Logo for desktop view */}
                <Logo classNameDiv={"py-4"} idDiv={"logo_desktop"} />

                {/* Form container with flex layout */}
                <section
                    id={"form-container"}
                    className={"flex justify-end px-14"}
                >
                    {/* Logo for mobile view */}
                    <Logo classNameDiv={""} idDiv={"logo_mobile"} />
                    {/* Form component with popup control props */}
                    <Form showPopup={showPopup} setShowPopup={setShowPopup} />
                </section>
            </section>
        </div>
    );
}
