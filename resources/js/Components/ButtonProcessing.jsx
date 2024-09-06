export default function ButtonProcessing({processing = false, id = "", children})
{
    return (
        <button className="buttonProcessing" id={id}>
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
