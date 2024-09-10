// @sekoyaDigitalTech
// https://www.sekoya.digital/

import "../../../css/sections/secondSection.css";
import Post from "@/Components/Post.jsx";
import ButtonLink from "@/Components/ButtonLink.jsx";

export default function SecondSection() {
    return (
        <section className={"container_center"}>
            {/* Decorative image */}
            <img
                src={"/storage/images/first_ladybird.svg"}
                className={"relative -translate-y-24 element"}
                alt={"first-ladybird"}
            />

            <div className={"-translate-y-20 py-8"}>
                {/* Section title */}
                <h1
                    className={"kga primary-color text-center px-2 element"}
                    id={"title_second_section"}
                >
                    Nos 3 nouvelles recettes gourmandes au fromage Kiri
                </h1>

                {/* Grid layout for posts */}
                <section
                    id={"posts_section"}
                    className={"grid w-full gap-12 sm:gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center px-4 sm:px-12 lg:px-36 mt-10"}
                >
                    {/* Post components */}
                    <Post
                        title={"Crémeux de potiron et panais, boulghour"}
                        secondTitle={"Crémeux de potiron et panais, boulghour"}
                        text={"L'association du potiron et du panais avec une note crémeuse apportée par le fromage Kiri® qui plaira aux papilles de bébé ! Ce plat Blédichef avec de petits morceaux est sans conservateur et adapté aux besoins de bébé dès 12 mois."}
                        id={"post_one"}
                        className={"element"}
                    />
                    <Post
                        title={"Risotto aux épinards"}
                        secondTitle={"Risotto aux épinards"}
                        text={"L'association des épinards avec la douceur du fromage Kiri® pour un repas du soir gourmand qui plaira aux papilles de bébé.  Avec une faible teneur en sel, des petits morceaux adaptés, et des ingrédients 100% d'origine naturelle, ce plat Blédichef est adapté aux besoins nutritionnels de bébé dès 12 mois."}
                        id={"post_two"}
                        className={"element"}
                    />
                    <Post
                        title={"Petites pâtes aux poireaux"}
                        secondTitle={"Petites pâtes aux poireaux"}
                        text={"De délicieuses pâtes fondantes accompagnées de poireaux, avec une touche de douceur et une note crémeuse apportées par le fromage Kiri® pour un repas du soir gourmand qui plaira aux papilles de bébé. Avec une faible teneur en sel, des petits morceaux adaptés, et des ingrédients 100% d'origine naturelle, ce plat du soir Blédichef est adapté aux besois nutritionnels de bébé dès 15 mois."}
                        id={"post_three"}
                        className={"element"}
                    />
                </section>

                {/* Button to discover more */}
                <div className={"flex items-center justify-center mt-16 flex-col"}>
                    <ButtonLink
                        href={"https://shop.bledina.com/coeur-de-repas/89130-bledichef-lot-multi-varietes-du-soir-au-fromage-kiri-lot-x6.html"}
                        basicLink={true}
                        className={"element"}
                    >
                        Je découvre
                    </ButtonLink>
                </div>
            </div>
        </section>
    );
}
