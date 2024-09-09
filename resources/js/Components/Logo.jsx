/**
 * Logo component for displaying the main logo of the site (Blédichef x Kiri).
 *
 * This component renders a logo image inside a div container. The `classNameDiv` and `classNameImg` props
 * allow customization of the styling for the container and the image respectively.
 *
 * @param {string} classNameDiv - Additional CSS classes to apply to the div container.
 * @param {string} classNameImg - Additional CSS classes to apply to the image.
 * @param {string} idDiv - The id attribute for the div container.
 *
 * @example
 * <Logo
 *   classNameDiv="logo-container"
 *   classNameImg="logo-image"
 *   idDiv="main-logo"
 * />
 */
export default function Logo({ classNameDiv, classNameImg, idDiv }) {
    return (
        <div
            className={classNameDiv}
            id={idDiv}
        >
            <img
                src={"/storage/images/logo.svg"}
                alt={"bledichef-x-kiri-logo"}
                className={classNameImg}
            />
        </div>
    );
}
