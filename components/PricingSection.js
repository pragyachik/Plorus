

const PricingSection = () => {
  return (
    <>
      <div className="flex flex-col h-[300vh] w-full">
        <div className='h-[100vh] bg-slate-200 w-full flex flex-col'>
          <div className="w-full text-4xl text-slate-800 font-semibold font-mono text-center mt-[30vh]">Pricing</div>
          <div className="w-full flex flex-row justify-between mt-[10vh] h-[40vh] text-center">
            <div className="h-full rounded-lg shadow bg-slate-800 text-white flex flex-col w-full mx-8">
              Free Tier
              <hr />
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
            <div className="h-full rounded-lg shadow bg-slate-800 text-white flex flex-col w-full mx-8">
              Team Plan
              <hr />
              <ul class>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
            <div className="h-full rounded-lg shadow bg-slate-800 text-white flex flex-col w-full mx-8">
              Enterprice Plan
              <hr />
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='h-[100vh] bg-slate-400 w-full flex flex-col'></div>
        <div className='h-[100vh] bg-slate-200 w-full flex flex-col'></div>
      </div>
    </>
  )
}

export default PricingSection;