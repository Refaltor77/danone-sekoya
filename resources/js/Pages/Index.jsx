// @sekoyaDigitalTech
// https://www.sekoya.digital/

import { useState } from "react";
import WelcomeSection from "@/Pages/Sections/WelcomeSection.jsx";
import SecondSection from "@/Pages/Sections/SecondSection.jsx";
import ThreeSection from "@/Pages/Sections/ThreeSection.jsx";
import Footer from "@/Pages/Sections/Footer.jsx";
import PopupSend from "@/Components/PopupSend.jsx";

export default function Index() {
    // State to control the visibility of the popup
    const [showPopup, setShowPopup] = useState(false);

    return (
        <main>
            {/* Popup component, only visible when showPopup is true */}
            <PopupSend showPopup={showPopup} setShowPopup={setShowPopup} />

            {/* WelcomeSection is passed props to control the popup visibility */}
            <WelcomeSection showPopup={showPopup} setShowPopup={setShowPopup} />

            {/* Additional sections of the page */}
            <SecondSection />
            <ThreeSection />

            {/* Footer component */}
            <Footer />
        </main>
    );
}
