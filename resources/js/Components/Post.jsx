/**
 * Post component displays a card with a front and back side.
 *
 * Props:
 * - title: The title text shown on the front side of the card.
 * - secondTitle: The secondary title text shown on the back side of the card.
 * - text: The content text displayed on the back side of the card.
 * - id: An optional ID for the card element.
 *
 * The card has a hover effect that transitions between the front and back sides.
 */
export default function Post({ title, secondTitle, text, id, className}) {
    return (
        <article className={"relative group " + className}>
            <div className={"box"}>
                <div className={"box-inner"}>
                    {/* Front side of the card */}
                    <div id={id} className="h-full flex flex-col justify-end items-center box-front">
                        <img src={"/storage/images/new_text.svg"} alt={"new_text"} className={"z-50 img_new absolute group-hover:opacity-0 transition-opacity"} />
                        <div
                            className={"bg-primary w-4/5 kga text-white text-center py-2 translate-y-6 group-hover:opacity-0 transition-opacity popup_post z-50"}>
                            {title}
                        </div>
                    </div>
                    {/* Back side of the card */}
                    <div className="bg-primary text-white flex items-center justify-center transition box-back">
                        <div className="flex flex-col gap-6 items-center">
                            <h2 className={"kga w-2/3 text-center title_post"}>
                                {secondTitle}
                            </h2>
                            <p className={"w-5/6 text_post_card rubik"}>
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
