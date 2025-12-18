import React from 'react'
import Intro_card from './Intro_card'


const Image_header = ({task1}) => {
  return (
    <div className="w-full h-screen flex flex-col justify-between overflow-hidden gap-12">
      
      <div className="w-full h-[140px] flex justify-center items-center gap-15 translate-x-[-15%]">
        {task1.slice(0,10).map((elem,idx)=>{
            return <Intro_card key={elem.id} data={elem.urls}/>
        })}

      </div>

      <div className="w-full h-[140px] flex justify-center items-center gap-15 translate-x-[-10%]">
        {task1.slice(10,20).map((elem,idx)=>{
            return <Intro_card key={elem.id} data={elem.urls}/>
        })}
        
      </div>

      <div className="w-full h-[140px] flex justify-center items-center gap-15 translate-x-[-15%]">
        {task1.slice(20,30).map((elem,idx)=>{
            return <Intro_card key={elem.id} data={elem.urls}/>
        })}
        
      </div>

    </div>
  )
}





// const Image_header = () => {
//   return (
//     <div className='w-full h-screen flex flex-col justify-between items-center gap-10 py-5'>
//         <div className='w-full h-auto bg-amber-200 overflow-x-auto shrink-0'>
//             <Intro_card/>
//         </div>
//         <div className='w-full h-[50px] bg-amber-200 overflow-x-auto shrink-0'>
//             <Intro_card/>
//         </div>
//         <div className='w-full h-[50px] bg-amber-200 overflow-x-auto shrink-0'>
//             <Intro_card/>
//         </div>
//         <div className='w-full h-[50px] bg-amber-200 overflow-x-auto shrink-0'>
//             <Intro_card/>
//         </div>
//     </div>
//   )
// }

export default Image_header