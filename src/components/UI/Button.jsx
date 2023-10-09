/* eslint-disable react/prop-types */
// import {AiFillHtml5} from 'react-icons/ai';
// import {RiJavascriptFill} from 'react-icons/ri';
// import {FaPython,FaRust} from 'react-icons/fa';
// import {SiCodio,SiTypescript,SiDart,SiElixir,SiRuby} from 'react-icons/si';
// import {TbBrandCpp,TbBrandGolang} from 'react-icons/tb';
// import {BiLogoJava} from 'react-icons/bi';

import { Link } from "react-router-dom"

const Button = ({lang}) => { 
    // const IconComponent = getIconComponent(lang)
  return (

  <Link to={`/repos/${lang}`}>
  <button
    className='btn btn-neutral font-mono text-lg transform hover:scale-110 '
  >
    {lang}
  </button>
  </Link>


  )
}

export default Button