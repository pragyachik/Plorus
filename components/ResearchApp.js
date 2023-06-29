import React, { useState } from 'react';

const ComponentSelector = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

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
        return null;
    }
  };

  return (
    <div className="h-[92vh] w-full bg-white p-auto flex flex-col font-mono font-semibold text-black">
      <div className='h-[7vh] p-2'>
        <select value={selectedComponent} onChange={handleComponentChange}>
          <option value="">Select a Model</option>
          <option value="Bert">Bert</option>
          <option value="Red Pajama">Red Pajama</option>
          <option value="Stable Diffusion">Stable Diffusion</option>
          <option value="Wav2">Wav2</option>
        </select>
      </div>
      <div className='h-[85vh] text-center pt-12'>
        {renderComponent()}
      </div>
    </div>
  );
};

// Example components
const RedPajama = () => {
  return <div>Red Pajama</div>;
};

const StableDiffusion = () => {
  return <div>Stable Diffusion</div>;
};

const Wav2 = () => {
  return <div>Wav2</div>;
};


const Bert = () => {
  return <div>Bert</div>;
};

export default ComponentSelector;
