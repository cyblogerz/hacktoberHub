

import GradientText from '../components/GradientText';
import MockupWindow from '../components/UI/MockupWindow';
import OtherLangButton from '../components/modals/OtherLangButton';
import {AiOutlineArrowRight} from 'react-icons/ai'




const Home = () => {

  return (
    <div className='container mx-auto w-full h-full '>
  
    <div className="flex  flex-row items-center justify-center min-h-screen  gap-10 ">
    
    <div className="  w-[80%]">
    <div>
    <a href="https://hacktoberfest.com"className="badge badge-neutral rounded-4xl font-mono">hacktoberfest.com</a>
    <p className="text-6xl text-left font-bold text-white">
    Find your perfect <br/>
    <GradientText text={'Hacktoberfest Project'}/>  <br />
    and contribute today
    </p>
    </div>
    
       
   
        <p className="mt-4 text-lg w-[95%]  ">Discover exciting repositories to contribute to in this year&apos;s<span className="underline "> Hacktoberfest! </span> </p>
        <div className="flex flex-row mt-16 gap-4 w-[80%] ">
        <OtherLangButton /><button className="btn  btn normal-case text-xl w-1/2">Resources <AiOutlineArrowRight /></button></div>
</div>
<MockupWindow />


    </div>
    </div>
  )
}

export default Home