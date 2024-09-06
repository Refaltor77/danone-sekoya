export default function Checkbox({className, value, onClick, label, id, pixelLabel})
{
    return (
        <div className={"flex gap-2"}>
            <input
                id={id}
                type="checkbox"
                className={" " + className}
                value={value}
                onClick={onClick}
                required={true}
            />
            <label
                style={{fontSize: pixelLabel + "px"}}
                className={"text-gray-500 rubik"}
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    );
}
