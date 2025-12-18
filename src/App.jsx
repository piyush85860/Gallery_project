import axios from "axios";
import { useEffect, useState } from 'react'
import Image_header from './components/Image_header'
import Intro from './components/Intro'

const App = () => {


  const [task1, settask1] = useState([])
  const ass="NoI4EFHEhw76VVLks92Hrs_T0CetVLs3ycq-0GipoJc"
  const res= async ()=>{
      const response= await axios.get("https://api.unsplash.com/photos",{params: {per_page: 30},headers:{Authorization:`Client-ID ${ass}`}})
      console.log(response.data);
      settask1(response.data);
  }

  useEffect(()=>{
      res();
  },[])
  


return (
  <div className='flex relative h-full w-full bg-gray-800'>
    <Intro/>
    <div className="absolute z-1 w-full h-screen bg-gradient-to-t 
  from-blue-950 
  via-black/25 
  to-purple-600 opacity-30 pointer-events-none"></div>
    <Image_header task1={task1}/>
  </div>
  )
}

export default App