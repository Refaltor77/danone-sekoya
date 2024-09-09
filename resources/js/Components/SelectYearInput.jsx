/**
 * SelectYearInput component provides a dropdown for selecting a year.
 *
 * Props:
 * - className: Optional CSS class(es) to apply to the select element.
 * - value: The currently selected year.
 * - onChange: Function to handle changes in selection.
 * - error: Optional error message to display.
 *
 * The component renders a select element with options for each year from 2014 to the current year.
 */
export default function SelectYearInput({ className = "", value, onChange, error }) {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Generate an array of years from 2014 to the current year
    const years = Array.from({ length: currentYear - 2014 + 1 }, (_, i) => 2014 + i);

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
                {/* Generate options for each year */}
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
}
