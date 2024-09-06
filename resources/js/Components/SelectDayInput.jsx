export default function SelectDayInput({ className = "", value, onChange })
{
    return (
        <select
            className={`text-gray-500 rubik rounded-3xl border-blue p-2.5 px-8 ${className}`}
            value={value}
            onChange={onChange}
            required
        >
            {[...Array(31)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                    {index + 1}
                </option>
            ))}
        </select>
    );
}
