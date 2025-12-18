
import Heading from './Heading'
import Navbar from './Navbar'

const Intro = () => {

  return (
    <div className='absolute z-2 w-full h-screen flex flex-col overflow-hidden py-5 px-5'>
        <Navbar/>
        <Heading/>    
    </div>
  )
}

export default Intro