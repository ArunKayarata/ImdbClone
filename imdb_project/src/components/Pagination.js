import React from 'react'

function Pagination(props) {
    let {pagenum,setpage}=props
    const onnext=()=>{
        setpage(pagenum+1)
      }
      const onprev=()=>{
        if(pagenum>1){
          setpage(pagenum-1);
        }
      }
  return (
    <div className=' flex justify-center my-4 '>
        <div onClick={onprev} className=' text-xl  border-2 rounded-l-xl p-2   border-blue-400 border-l-0'> Prev</div>
        <div  className=' text-xl  border-2  p-2 border-blue-400  '> {pagenum}</div>
        <div onClick={onnext} className=' text-xl  border-2 rounded-r-xl p-2 border-blue-400 border-r-0'> Next</div>
    </div>
  )
}

export default Pagination