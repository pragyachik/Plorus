export default function DemoDropdown({selectedComponent, setSelectedComponent}){
  
  return (
      <>
      <select value={selectedComponent} onChange={(e)=>{setSelectedComponent(e.target.value)}} className="h-full w-full border border-gray-300 rounded p-1 m-1 flex justify-center items-center hover:bg-slate-100 active:bg-slate-300">
        <option value="Bert">Bert</option>
        <option value="Red Pajama">Red Pajama</option>
        <option value="Stable Diffusion">Stable Diffusion</option>
        <option value="Wav2">Wav2</option>
      </select>
      </>
  );
}