/*
 * Page d'accueil du site internet.
 * @sekoyaDev
 */


import WelcomeSection from "@/Pages/Sections/WelcomeSection.jsx";
import SecondSection from "@/Pages/Sections/SecondSection.jsx";
import ThreeSections from "@/Pages/Sections/threeSection.jsx";
import Footer from "@/Pages/Sections/Footer.jsx";

export default function Index()
{
    return (
        <main>
            <WelcomeSection />
            <SecondSection />
            <ThreeSections />
            <Footer />
        </main>
    );
}
