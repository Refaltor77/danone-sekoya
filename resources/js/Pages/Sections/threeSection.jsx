import "../../../css/sections/threeSection.css"
import ButtonLink from "@/Components/ButtonLink.jsx";
import {Link} from "@inertiajs/react";

export default function ThreeSections() {
    return (
        <section id={"three_section"}>
            <div>
                <img
                    src={"/storage/images/second_ladybird.svg"}
                    className={"relative left-1/2 -top-16 -translate-y-2 -translate-x-8"}
                    alt={"second-ladybird"}
                />
                <div className={"-translate-y-14"}>
                    <h1
                        id={"title_three_section"}
                        className={"text-center kga primary-color"}>
                        Le fromage Kiri pour régaler bébé
                    </h1>
                    <section id={"section_article_instructions"}
                             className={"flex justify-between items-center gap-10 px-40 mt-16"}>
                        <img src={"/storage/images/baby.png"} alt={"image_baby"} id={"image_baby"}/>
                        <article className={""}>
                            <p className={"rubik text_article_three_section"}>
                                Chez Blédina, nous connaissons les enjeux d’une <span
                                className={"primary-color font-bold"}>alimentation variée et
                                équilibrée</span> durant les toutes premières années de bébé, c’est pourquoi
                                chacun de nos plats Blédichef x Kiri® a une faible teneur en sel et est <span
                                className={"primary-color font-bold"}>sans
                                colorants ni conservateurs</span> (mais conditionnés sous atmosphère
                                protectrice).
                            </p>
                            <p className={"rubik mt-6 mb-10 text_article_three_section"}>
                                Comme d’autres fromages, il est possible de proposer du <span
                                className={"primary-color font-bold"}>fromage Kiri® en
                                quantité adaptée lors de la diversification alimentaire de bébé</span>. Blédina
                                a élaboré une gamme de plats complets du soir au fromage Kiri®, faible
                                teneur en sel et source de calcium, qui contribue au développement normal
                                des os des enfants.
                            </p>
                            <Link className={"text_button_link w-full kga text-white p-3 px-20"}>
                                En savoir plus
                            </Link>
                        </article>
                    </section>
                    <img
                        src={"/storage/images/last_ladybird.svg"}
                        className={"relative -bottom-20"}
                        alt={"second-ladybird"}
                    />
                </div>
            </div>
        </section>
    );
}
