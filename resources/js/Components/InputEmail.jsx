export default function InputEmail({className, value, onChange, placeholder})
{
    return (
        <input
            type="email"
            className={"placeholder:text-gray-600 rubik rounded-3xl border-blue p-2.5 px-8 " + className}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={true}
        />
    );
}
