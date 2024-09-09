/**
 * PopupSend component displays a popup message after a form submission.
 *
 * The popup provides a thank you message, promotional offers, and social sharing options. It is conditionally
 * rendered based on the `showPopup` prop. The component also handles desktop and mobile views differently.
 *
 * @param {boolean} showPopup - Determines if the popup is visible.
 * @param {function} setShowPopup - Function to toggle the visibility of the popup.
 * @example
 * <PopupSend showPopup={true} setShowPopup={setShowPopup} />
 */
import "../../css/components/popup.css";
import ButtonLink from "@/Components/ButtonLink.jsx";

export default function PopupSend({ showPopup, setShowPopup }) {
    return (
        <section id={"popup"} className={showPopup ? "p-20 px-40 relative" : "hidden"}>
            {/* Main popup container with conditional visibility */}
            <section id={"section_article_wrap"} className={"flex justify-between bg-white p-8"}>
                {/* Decorative images within the popup */}
                <img id={"ladybird"} style={{ transform: "translateY(300px)" }} className={"absolute right-40"}
                     src={"/storage/images/ladybird_popup.svg"} alt={"ladybird"} />
                <img id={"baby"} src={"/storage/images/baby_popup.png"} className={"object-cover"} alt={"baby_popup"}
                     width={"50%"} />

                {/* Content of the popup for desktop view */}
                <article id={"desktop"} className={"flex flex-col items-center justify-between"}>
                    <h1 className={"kga primary-color text-center"}>Merci d’avoir participé !</h1>
                    <p id={"text_inc"} className={"rubik text-center"}>
                        Votre inscription est bien prise en compte. Bénéficiez
                        dès maintenant d’un <span className={"font-bold"}>bon de réduction utilisable en
                        magasin pour l’achat de deux nouvelles recettes.</span>
                    </p>
                    <div id={"container_popup_in_popup"} className={"flex justify-between mt-4"}>
                        {/* First promotional offer */}
                        <div id={"first_artticle"} className={"flex flex-col p-4 gap-1"}>
                            <h1 className={"kga primary-color text-center"}>-1,10€</h1>
                            <p className={"kga primary-color text-center"}>
                                de réduction sur
                                Blédichef x Kiri
                            </p>
                            <ButtonLink>
                                J’en profite
                            </ButtonLink>
                        </div>
                        {/* Separator line */}
                        <div id={"lign_container"} className={"p-4"}>
                            <div className={"h-full lign"}></div>
                        </div>
                        {/* Second promotional offer */}
                        <div id={"second_article"} className={"flex flex-col p-4 gap-1"}>
                            <h2 className={"rubik text-center primary-color"}>
                                Pour l’achat de 2 produits
                                de la nouvelle gamme :
                            </h2>
                            <div id={"images_pots"} className={"flex items-center mt-4"}>
                                <img width={54} src={"/storage/images/pot1.png"} alt={"image_pot_one.png"} />
                                <img width={54} src={"/storage/images/pot2.png"} alt={"image_pot_two"} />
                                <img width={54} src={"/storage/images/pot3.png"} alt={"image_pot_three"} />
                            </div>
                        </div>
                    </div>
                    <h1 className={"kga primary-color text-center mt-8 w-3/5"}>
                        Augmentez vos chances
                        de gagner
                    </h1>
                    <article id={"popup_links_shares"} className={"mt-4 flex flex-col p-4 px-8 items-center"}>
                        <h2 className={"rubik primary-color text-center"}>Invitez des ami(e)s</h2>
                        <p className={"rubik primary-color text"}>1 ami inscrit = 5 chances supplémentaires</p>
                        <div id={"links"} className={"flex items-center mt-4 justify-between w-2/4"}>
                            <img width={48} src={"/storage/images/links/facebook.svg"} alt={"facebook_share"} />
                            <img width={48} src={"/storage/images/links/mail.svg"} alt={"mail_share"} />
                            <img width={48} src={"/storage/images/links/link.svg"} alt={"link_share"} />
                        </div>
                    </article>
                </article>

                {/* Content of the popup for mobile view */}
                <article id={"mobile_version"} className={"flex flex-col items-center w-full"}>
                    <h1 className={"kga primary-color text-center"}>Merci d’avoir participé !</h1>
                    <p id={"text_inc_mobile"} className={"rubik text-center"}>
                        Votre inscription est bien prise en compte. Bénéficiez
                        dès maintenant d’un <span className={"font-bold"}>bon de réduction utilisable en
                        magasin pour l’achat de deux nouvelles recettes.</span>
                    </p>
                    <div id={"container_popup_in_popup"} className={"flex justify-between mt-4"}>
                        {/* First promotional offer for mobile view */}
                        <div id={"first_artticle"} className={"flex flex-col p-4 gap-1"}>
                            <h1 className={"kga primary-color text-center"}>-1,10€</h1>
                            <p id={"reduc"} className={"kga primary-color text-center"}>
                                de réduction sur
                                Blédichef x Kiri
                            </p>
                            <ButtonLink>
                                J’en profite
                            </ButtonLink>
                        </div>
                        {/* Separator line for mobile view */}
                        <div id={"lign_container"} className={"p-4"}>
                            <div className={"h-full lign"}></div>
                        </div>
                        {/* Second promotional offer for mobile view */}
                        <div id={"second_article"} className={"flex flex-col p-4 gap-1"}>
                            <h2 className={"rubik text-center primary-color"}>
                                Pour l’achat de 2 produits
                                de la nouvelle gamme :
                            </h2>
                            <div id={"images_pots"} className={"flex items-center mt-4"}>
                                <img width={54} src={"/storage/images/pot1.png"} alt={"image_pot_one.png"} />
                                <img width={54} src={"/storage/images/pot2.png"} alt={"image_pot_two"} />
                                <img width={54} src={"/storage/images/pot3.png"} alt={"image_pot_three"} />
                            </div>
                        </div>
                    </div>
                    <h1 id={"title_mobile_popup"} className={"kga primary-color text-center mt-8 w-3/5"}>
                        Augmentez vos chances
                        de gagner
                    </h1>
                    <article id={"popup_links_shares"} className={"mt-4 flex flex-col p-4 px-8 items-center"}>
                        <h2 className={"rubik primary-color text-center"}>Invitez des ami(e)s</h2>
                        <p className={"rubik primary-color text"}>1 ami inscrit = 5 chances supplémentaires</p>
                        <div id={"links"} className={"flex items-center mt-4 justify-between w-2/4"}>
                            <img width={48} src={"/storage/images/links/facebook.svg"} alt={"facebook_share"} />
                            <img width={48} src={"/storage/images/links/mail.svg"} alt={"mail_share"} />
                            <img width={48} src={"/storage/images/links/link.svg"} alt={"link_share"} />
                        </div>
                    </article>
                </article>
            </section>
        </section>
    );
}
