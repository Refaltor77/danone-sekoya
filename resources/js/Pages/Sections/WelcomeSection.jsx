// @sekoyaDigitalTech
// https://www.sekoya.digital/

import "../../../css/sections/welcomeSection.css";
import Logo from "@/Components/Logo.jsx";
import Form from "@/Components/Form.jsx";

export default function WelcomeSection({ showPopup, setShowPopup, setShareIdForPopup}) {
    return (
        <div id={"welcome_section"}>
            {/* Container for centering the content */}
            <section
                id={"container_center"}
                className={"container_center"}
            >
                {/* Logo for desktop view */}
                <Logo classNameDiv={"py-4 element_logo"} idDiv={"logo_desktop"} />

                {/* Form container with flex layout */}
                <section
                    id={"form-container"}
                    className={"flex justify-end px-14"}
                >
                    {/* Logo for mobile view */}
                    <Logo classNameDiv={"element_logo"} idDiv={"logo_mobile"} />
                    {/* Form component with popup control props */}
                    <Form showPopup={showPopup} setShowPopup={setShowPopup} setShareIdForPopup={setShareIdForPopup} />
                </section>
            </section>
        </div>
    );
}
