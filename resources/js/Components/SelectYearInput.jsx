export default function SelectYearInput({ className = "", value, onChange }) {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2014 + 1 }, (_, i) => 2014 + i);

    return (
        <select
            className={`text-gray-500 rubik rounded-3xl border-blue p-2.5 px-8 ${className}`}
            value={value}
            onChange={onChange}
            required
        >
            {years.map((year) => (
                <option key={year} value={year}>
                    {year}
                </option>
            ))}
        </select>
    );
}
