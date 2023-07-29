import React, { useState } from 'react';
import TextBoxWithLimit from '../elements/Textbox';

export default function Bert () {
  return (
    <>
      <div className='flex flex-row p-2 w-full h-full '> {/*bg-red-500*/}
        <div className='flex flex-col w-[80%] h-full  p-2 align-center justify-around'>{/*bg-blue-500*/}
          <div className='h-[55%] w-full '>{/*bg-yellow-500*/}
            <div className='flex h-[4rem] w-full '>{/*bg-slate-500*/}
              
            </div>
            <div className='h-[calc(100%-4rem)] w-full  p-1'>{/*bg-stone-500*/}
              <TextBoxWithLimit />
            </div>
          </div>
          <div className='h-[45%] w-full  p-1'>{/*bg-green-500*/}
              <TextBoxWithLimit />
          </div>
        </div>
        <div className='w-[20%] h-full  p-2'>{/*bg-orange-500*/}
          <div className=" p-2 h-full w-full"></div>{/*bg-pink-500*/}
        </div>
      </div>
    </>
  );
};