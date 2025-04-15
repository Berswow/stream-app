export const MovieDescription = ({overview}) => {
    return (
        <div className='flex flex-col max-w-[1057px] w-full rounded-xl p-12.5 gap-3.5' style={{ backgroundColor: "var(--black-15)" }}>
            <h4 style={{ color: "var(--grey-60)" }}>Description</h4>
            <div>
                <p>{overview}</p>
            </div>
        </div>
    );
};