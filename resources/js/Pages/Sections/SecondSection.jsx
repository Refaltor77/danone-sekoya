import "../../../css/sections/secondSection.css";
import Post from "@/Components/Post.jsx";
import ButtonLink from "@/Components/ButtonLink.jsx";

export default function SecondSection()
{
    return (
        <section className={"container_center"}>
            <img src={"/storage/images/first_ladybird.svg"} className={"relative -translate-y-24"} alt={"first-ladybird"}/>
            <div className={"-translate-y-4 py-8"}>
                <h1 className={"kga primary-color text-center"} id={"title_second_section"}>
                    Nos 3 nouvelles recettes gourmandes au fromage Kiri
                </h1>
                <section id={"posts_section"} className={"grid w-full grid-cols-3 justify-items-center px-36 mt-10"}>
                    <Post
                        title={"Crémeux de potiron et panais, boulghour"}
                        secondTitle={"Crémeux de potiron et panais, boulghour"}
                        text={"L'association du potiron et du panais avec une note crémeuse apportée par le fromage Kiri® qui plaira aux papilles de bébé ! Ce plat Blédichef avec de petits morceaux est sans conservateur et adapté aux besoins de bébé dès 12 mois."}
                    />
                    <Post
                        title={"Crémeux de potiron et panais, boulghour"}
                        secondTitle={"Crémeux de potiron et panais, boulghour"}
                        text={"L'association du potiron et du panais avec une note crémeuse apportée par le fromage Kiri® qui plaira aux papilles de bébé ! Ce plat Blédichef avec de petits morceaux est sans conservateur et adapté aux besoins de bébé dès 12 mois."}
                    />
                    <Post
                        title={"Crémeux de potiron et panais, boulghour"}
                        secondTitle={"Crémeux de potiron et panais, boulghour"}
                        text={"L'association du potiron et du panais avec une note crémeuse apportée par le fromage Kiri® qui plaira aux papilles de bébé ! Ce plat Blédichef avec de petits morceaux est sans conservateur et adapté aux besoins de bébé dès 12 mois."}
                    />
                </section>
                <div className={"flex items-center justify-center mt-16 flex-col"}>
                    <ButtonLink>
                        Je découvre
                    </ButtonLink>
                 </div>
            </div>
        </section>
    );
}
