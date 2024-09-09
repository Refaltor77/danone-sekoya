/**
 * ButtonProcessing component.
 *
 * A button that displays a loading spinner when `processing` is true.
 *
 * @param {boolean} processing - Whether the button is in a loading state.
 * @param {string} id - The ID of the button.
 * @param {function} onClick - The function to call when the button is clicked.
 * @param {ReactNode} children - The content to display inside the button.
 *
 * @example
 * <ButtonProcessing processing={true} id="submitButton" onClick={handleSubmit}>
 *     Submit
 * </ButtonProcessing>
 */
export default function ButtonProcessing({ processing = false, id = "", onClick, children }) {
    return (
        <button onClick={onClick} type="submit" className="buttonProcessing" id={id}>
            {processing ? (
                <i className="fa-solid fa-circle-notch animate-spin"></i>
            ) : (
                <>
                    {children}
                </>
            )}
        </button>
    );
}
