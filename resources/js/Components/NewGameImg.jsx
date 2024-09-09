/**
 * NewGameImg component for displaying an image related to new games.
 *
 * This component renders an image with a specific positioning applied. The image source and alt text are set
 * to display the "new game" graphic.
 *
 * @example
 * <NewGameImg />
 */
export default function NewGameImg() {
    return (
        <div className={"relative -translate-y-6 -translate-x-7"}>
            <img src={"/storage/images/new_game.svg"} alt={"img-new-game"} />
        </div>
    );
}
