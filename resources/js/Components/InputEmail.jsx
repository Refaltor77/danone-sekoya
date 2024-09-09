/**
 * InputEmail component for rendering an email input field with validation.
 *
 * This component displays an email input field with error handling and custom styling.
 *
 * @param {string} className - Additional CSS classes to apply to the input field.
 * @param {string} value - The current value of the input field.
 * @param {function} onChange - Event handler function for the input field's change event.
 * @param {string} placeholder - Placeholder text for the input field.
 * @param {string} error - Error message to display if there is a validation error.
 *
 * @example
 * <InputEmail
 *   className="custom-class"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 *   placeholder="Enter your email"
 *   error={emailError}
 * />
 */
export default function InputEmail({ className, value, onChange, placeholder, error }) {
    return (
        <div className={"flex flex-col"}>
            {error ? (
                <p className={"text-red-500 rubik"}>{error}</p>
            ) : ""}
            <input
                type="email"
                className={"placeholder:text-gray-600 rubik rounded-3xl border-blue p-2.5 px-8 " + className}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={true}
            />
        </div>
    );
}
