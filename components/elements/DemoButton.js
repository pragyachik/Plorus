export default function DemoButton({label, onClickFn=null}){
    return (
        <>
            <div onClick={onClickFn} className="h-full w-full border border-gray-300 rounded p-1 m-1 flex justify-center items-center hover:bg-slate-100 active:bg-slate-300">
                {label}
            </div>
        </>
    );
}