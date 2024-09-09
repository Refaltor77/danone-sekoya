/**
 * SelectDayInput component provides a dropdown for selecting a day of the month.
 *
 * Props:
 * - className: Optional CSS class(es) to apply to the select element.
 * - value: The current selected value.
 * - onChange: Function to handle changes in selection.
 * - error: Optional error message to display.
 *
 * The component renders a select element with options for each day from 1 to 31.
 */
export default function SelectDayInput({ className = "", value, onChange, error }) {
    return (
        <div className={"flex flex-col"}>
            {/* Display error message if present */}
            {error !== "" ? (
                <p className={"text-red-500"}>{error}</p>
            ) : ""}
            <select
                className={`text-gray-500 rubik rounded-3xl border-blue p-2.5 px-8 ${className}`}
                value={value}
                onChange={onChange}
                required
            >
                {/* Generate options for days 1 through 31 */}
                {[...Array(31)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                        {index + 1}
                    </option>
                ))}
            </select>
        </div>
    );
}
