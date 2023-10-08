

import { Link } from 'react-router-dom';
import GradientText from '../components/GradientText';
import MockupWindow from '../components/UI/MockupWindow';
import OtherLangButton from '../components/modals/OtherLangButton';
import { AiOutlineArrowRight } from 'react-icons/ai'




const Home = () => {

  return (


      <div className="flex  flex-row items-center justify-between  w-screen min-h-screen  ">

        <div className="  px-20">
          <div>
            <a href="https://hacktoberfest.com" className="badge badge-neutral rounded-4xl font-mono">hacktoberfest.com</a>
            <p className="2xl:text-6xl text-left text-5xl font-bold dark:text-[white] light:">
              Find your perfect <br />
              <GradientText text={ 'Hacktoberfest Project' } />  <br />
              and contribute today
            </p>
          </div>



          <p className="mt-4 text-lg w-[95%]  ">Discover exciting repositories to contribute to in this year&apos;s<a href='https://hacktoberfest.com/' target='blank' className="underline hover:text-blue-500"> Hacktoberfest! </a> </p>
          <div className="flex flex-row mt-16 gap-4 w-[80%] ">
            <OtherLangButton />
            <Link to="/blogs" className="btn  btn normal-case text-xl w-1/2">Resources <AiOutlineArrowRight /></Link></div>
        </div>
        <MockupWindow />


      </div>

  )
}

export default Home