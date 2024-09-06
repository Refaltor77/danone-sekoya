export default function ButtonProcessing({processing = false, id = "", onClick, children})
{
    return (
        <button onClick={onClick} type={"button"} className="buttonProcessing" id={id}>
            {processing ? (
                <i className="fa-solid fa-circle-notch animate-spin"></i>
            ) : (
                <>
                    {children}
                </>
            )}
        </button>
    );
}
