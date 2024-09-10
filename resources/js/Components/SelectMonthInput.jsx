/**
 * SelectMonthInput component provides a dropdown for selecting a month.
 *
 * Props:
 * - className: Optional CSS class(es) to apply to the select element.
 * - value: The current selected value (month).
 * - onChange: Function to handle changes in selection.
 * - error: Optional error message to display.
 *
 * The component renders a select element with options for each month from January to December.
 */
export default function SelectMonthInput({ className = "", value, onChange, error }) {
    // Array of month names in French
    const months = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

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
            >
                <option value={""}>

                </option>
                {/* Generate options for each month */}
                {months.map((month, index) => (
                    <option key={index} value={index + 1}>
                        {month}
                    </option>
                ))}
            </select>
        </div>
    );
}
