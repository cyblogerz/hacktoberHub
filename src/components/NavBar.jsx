import {BsGithub,BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg">
  <div className="flex-1">
    <Link for="/" className="btn btn-ghost normal-case text-xl">hacktoberHub 🏆 </Link>
  </div>
  <div className="flex-none gap-2">
  <a className="btn  normal-case">Contribute</a>
  <button className="btn btn-ghost btn-circle">
      <BsSearch className='w-5 h-5'/>
    </button>
    <div className="btn btn-ghost btn-circle">
        <BsGithub className='w-7 h-7'/>
    </div>
  </div>
</div>
  )
}

export default NavBar