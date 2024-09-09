/**
 * Checkbox component.
 *
 * A custom checkbox with a label. The label's font size can be adjusted via the `pixelLabel` prop.
 *
 * @param {string} className - Additional CSS classes for the checkbox.
 * @param {string} value - The value of the checkbox.
 * @param {function} onClick - The function to call when the checkbox is clicked.
 * @param {string} label - The text label for the checkbox.
 * @param {string} id - The ID of the checkbox and label.
 * @param {number} pixelLabel - The font size of the label in pixels.
 *
 * @example
 * <Checkbox
 *     className="custom-checkbox"
 *     value="example"
 *     onClick={handleCheckboxClick}
 *     label="Example Checkbox"
 *     id="exampleCheckbox"
 *     pixelLabel={16}
 * />
 */
export default function Checkbox({ className, value, onClick, label, id, pixelLabel }) {
    return (
        <div className={"flex gap-2"}>
            <input
                id={id}
                type="checkbox"
                className={" " + className}
                value={value}
                onClick={onClick}
            />
            <label
                style={{ fontSize: pixelLabel + "px" }}
                className={"text-gray-500 rubik"}
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    );
}
