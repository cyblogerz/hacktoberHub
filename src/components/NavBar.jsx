import {BsGithub} from 'react-icons/bs'
const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">hacktoberHub 🏆 </a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="btn btn-ghost ">
        <BsGithub className='w-7 h-7'/>
    </div>
  </div>
</div>
  )
}

export default NavBar