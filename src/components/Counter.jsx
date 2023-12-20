import React from 'react'

function Counter({counter, setCounter, item}) {

    

  return (
    <div className="w-full h-full flex justify-center xl:justify-start items-center">
    <div
      className="w-[172px] h-[36px] text-center flex justify-between
                           items-center relative
                           mt-5 mb-5
                           "
    >
      <div
        className="bg-[#054A59] w-[36px] h-[36px] flex items-center justify-center
                              text-white text-[30px] pb-2 hover:bg-[#21ECB5] cursor-pointer
                              "
        onClick={() => counter > 0 && setCounter(counter - 1)}
      >
        -
      </div>
      <div
        className="bg-[#D9D9D9] w-[100px] h-[36px] flex justify-center items-center font-lato font-bold
                                  "
      >
        {counter}
      </div>
      <div
        className="bg-[#054A59] w-[36px] h-[36px] flex items-center justify-center
                              text-white text-[30px] pb-2
                              hover:bg-[#21ECB5] cursor-pointer
                              "
        onClick={() => setCounter(counter + 1)}
      >
        +
      </div>
    </div>
  </div>
  )
}

export default Counter