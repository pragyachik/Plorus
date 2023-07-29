import React, { useState } from 'react';
import StableDiffusion from "./models/StableDiffusion"
import RedPajama from "./models/RedPajama"
import TokenOutput from "./models/TokenOutput"
import Wav2 from "./models/Wav2"
import Bert from "./models/Bert"


//http://127.0.0.1:5000
const apiIp = "http://172.105.52.83"

const ComponentSelector = () => {
  const [selectedComponent, setSelectedComponent] = useState('token');

  const handleComponentChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Red Pajama':
        return <RedPajama />;
      case 'Stable Diffusion':
        return <StableDiffusion />;
      case 'Wav2':
        return <Wav2 />;
      case 'Bert':
        return <Bert />;
      default:
        return <Bert></Bert>
        // return <TokenOutput />;
    }
  };

  return (
    <div className="h-[92vh] w-full bg-white p-auto flex flex-col font-mono font-semibold text-black">
      <div className='h-[7vh] p-2'>
        <select value={selectedComponent} onChange={handleComponentChange}>
          <option value="token">Select a Model</option>
          <option value="Bert">Bert</option>
          <option value="Red Pajama">Red Pajama</option>
          <option value="Stable Diffusion">Stable Diffusion</option>
          <option value="Wav2">Wav2</option>
        </select>
      </div>
      <div className='h-[85vh] text-center'>
        {renderComponent()}
      </div>
    </div>
  );
};

export default ComponentSelector;
