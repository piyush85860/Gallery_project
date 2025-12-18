import React from 'react'

const Intro_card = ({idx,key,data}) => {
  return (
    <div className="relative w-[300px] h-[300px] rounded-xl overflow-hidden shrink-0
                shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                border border-white/5">
        {/* {if (idx>9 && idx<20){

        }} */}

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
        

        <img className="w-full h-full object-cover" src={data.small} alt="" />
    </div>
  )
}

export default Intro_card