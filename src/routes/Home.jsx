

import GradientText from '../components/GradientText';
import MarqueeButtons from '../components/UI/MarqueeButtons';
import OtherLangButton from '../components/modals/OtherLangButton';




const Home = () => {
    

  return (
    <div className='container mx-auto w-full h-full pt-20'>
  
    <div className="flex flex-col  items-center justify-center min-h-screen relative ">
    
    <div className="mb-20 text-center w-[80%]">
    <p className="text-6xl">🧑🏻‍💻</p>
        <h1 className="text-5xl  ">Select your </h1>
        <GradientText text="programming language" />
   
        <p className="mt-4 text-sm ">Discover exciting repositories to contribute to in this year&apos;s<span className="underline "> Hacktoberfest! </span> 🚀🌟</p>
</div>
 
<MarqueeButtons />
<OtherLangButton />

    </div>
    </div>
  )
}

export default Home