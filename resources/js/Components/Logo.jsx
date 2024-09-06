/*
 * Logo principal du site (Blédichef x Kiri)
 * @sekoyaDev
 */

export default function Logo({classNameDiv, classNameImg})
{
    return (
        <div
            className={classNameDiv}
        >
            <img
                src={"/storage/images/logo.svg"}
                alt={"bledichef-x-kiri-logo"}
                className={classNameImg}
            />
        </div>
    );
}
