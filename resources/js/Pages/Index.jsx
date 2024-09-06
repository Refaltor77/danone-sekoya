/*
 * Page d'accueil du site internet.
 * @sekoyaDev
 */


import WelcomeSection from "@/Pages/Sections/WelcomeSection.jsx";
import SecondSection from "@/Pages/Sections/SecondSection.jsx";
import ThreeSections from "@/Pages/Sections/threeSection.jsx";
import Footer from "@/Pages/Sections/Footer.jsx";
import {useState} from "react";
import PopupSend from "@/Components/PopupSend.jsx";

export default function Index()
{
    const [showPopup, setShowPopup] = useState(false);

    return (
        <main>
            <PopupSend showPopup={showPopup} setShowPopup={setShowPopup} />
            <WelcomeSection showPopup={showPopup} setShowPopup={setShowPopup} />
            <SecondSection />
            <ThreeSections />
            <Footer />
        </main>
    );
}
