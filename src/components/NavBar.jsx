import {BsGithub,BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">hacktoberHub 🏆</a>
    </div>
    
      <div className="menu menu-horizontal px-1">
     
     <a className="btn  normal-case">Contribute</a>
        <li>
          <details>
            <summary>
              Themes
            </summary>
            <ul className="p-2 bg-base-100">
              <li><button className=''>Dark</button></li>
              <li><button className=''>Light</button></li>
              <li><button className=''>Cupcake</button></li>
            </ul>
          </details>
        </li>
      </div>
    </div>
  
  )
}

export default NavBar