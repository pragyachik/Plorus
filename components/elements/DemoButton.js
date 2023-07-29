export default function DemoButton({label}){
    return (
        <>
            <div className="h-full w-full border border-gray-300 rounded p-1 m-1 flex justify-center items-center">
                {label}
            </div>
        </>
    );
}