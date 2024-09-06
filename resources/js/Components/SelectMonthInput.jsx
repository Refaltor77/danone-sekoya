export default function SelectMonthInput({ className = "", value, onChange })
{
    const months = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    return (
        <select
            className={`text-gray-500 rubik rounded-3xl border-blue p-2.5 px-8 ${className}`}
            value={value}
            onChange={onChange}
            required
        >
            {months.map((month, index) => (
                <option key={index} value={index + 1}>
                    {month}
                </option>
            ))}
        </select>
    );
}
