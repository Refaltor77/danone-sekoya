export default function Post({ title, secondTitle, text }) {
    return (
        <article className="relative post">
            <div className={"box"}>
                <div className={"box-inner"}>
                    <div id={"post_one"} className="h-full flex flex-col justify-end items-center box-front">
                        <img src={"/storage/images/new_text.svg"} alt={"new_text"} className={"relative z-50 top-0 img_new"}/>
                        <div
                            className={"bg-primary w-4/5 kga text-white text-center py-2 translate-y-6 group-hover:opacity-0 transition-opacity popup_post z-50"}>
                            {title}
                        </div>
                    </div>
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
