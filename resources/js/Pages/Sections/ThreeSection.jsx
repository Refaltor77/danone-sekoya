// @sekoyaDigitalTech
// https://www.sekoya.digital/

import "../../../css/sections/threeSection.css";
import ButtonLink from "@/Components/ButtonLink.jsx";
import { Link } from "@inertiajs/react";

export default function ThreeSections() {
    return (
        <section id={"three_section"} className="w-full">
            <div className={"container_center w-full"}>
                {/* Decorative image with specific positioning */}
                <img
                    src={"/storage/images/second_ladybird.svg"}
                    className="relative left-1/2 -top-16 -translate-y-2 -translate-x-8 element"
                    alt={"second-ladybird"}
                />

                <div className="-translate-y-14">
                    {/* Section title */}
                    <h1
                        id={"title_three_section"}
                        className="text-center kga primary-color text-lg sm:text-xl lg:text-2xl element"
                    >
                        Le fromage Kiri pour régaler bébé
                    </h1>

                    {/* Content section with responsive layout */}
                    <section
                        id={"section_article_instructions"}
                        className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 px-2 sm:px-16 lg:px-40 translate-y-24 sm:translate-y-0 lg:mt-16"
                    >
                        {/* Image of a baby */}
                        <img
                            src={"/storage/images/baby.png"}
                            alt={"image_baby"}
                            id={"image_baby"}
                            className="w-full sm:w-1/2 lg:w-auto element"
                        />

                        {/* Article content */}
                        <article className="text-center lg:text-left">
                            <p className="rubik text_article_three_section element">
                                Chez Blédina, nous connaissons les enjeux d’une <span className="primary-color font-bold">alimentation variée et équilibrée</span> durant les toutes premières années de bébé, c’est pourquoi chacun de nos plats Blédichef x Kiri® a une faible teneur en sel et est <span className="primary-color font-bold">sans colorants ni conservateurs</span> (mais conditionnés sous atmosphère protectrice).
                            </p>
                            <p className="rubik mt-6 mb-10 text_article_three_section element">
                                Comme d’autres fromages, il est possible de proposer du <span className="primary-color font-bold">fromage Kiri® en quantité adaptée lors de la diversification alimentaire de bébé</span>. Blédina a élaboré une gamme de plats complets du soir au fromage Kiri®, faible teneur en sel et source de calcium, qui contribue au développement normal des os des enfants.
                            </p>

                            {/* Link to learn more */}
                            <a target={"_blank"} href={"https://www.ribambel.com/article/kiri-et-bledichef-sassocient-pour-proposer-3-recettes-pour-bebe/521467"} className="text_button_link w-full kga text-white p-3 px-10 sm:px-20 element">
                                En savoir plus
                            </a>
                        </article>
                    </section>
                </div>
            </div>
        </section>
    );
}
