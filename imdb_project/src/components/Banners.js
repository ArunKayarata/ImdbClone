import React from 'react'

function Banners() {
  return (
    <div  className='h-[20vh]  md:h-[80vh] bg-center bg-no-repeat flex items-end'
        style={{
             backgroundImage:`url(https://assets-in.bmscdn.com/discovery-catalog/events/et00311714-ewdhvajezf-landscape.jpg)`
         }}>
            <div className=' text-xl md:text-3xl bg-gray-900 text-white  text-center bg-opacity-60 w-full p-2'>
                John Wick
            </div>

    </div>
  )
}

export default Banners