/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom'
const NavBar = (props) => {

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const clickHandler = (e) => {
    const { value: val, name } = e.target
    props.onThemeChange(val, name)
  }
  return (
    <div className="navbar bg-base-100 fixed shadow-md max-w-[100vw] p-1 z-10 sm:pr-6 ">
      <div className="flex-1">
      <Link for="/"className="btn btn-ghost normal-case text-xl">🏆 hacktoberHub</Link>
    </div>
      <details className="dropdown dropdown-end  hidden sm:inline">
        <summary className="m-1 btn">Menu</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <Link to="/blogs/" className="btn  normal-case btn-ghost">Blogs</Link>
          <li><a className="btn  normal-case btn-ghost">Contribute</a></li>
          <li className='flex items-center'>
            <details>
              <summary>
                Themes
              </summary>
              <ul className="p-2 bg-base-100">
                <li><button className='' onClick={clickHandler} name='dark'>Dark</button></li>
                <li><button className='' onClick={clickHandler} name='light'>Light</button></li>
                <li><button className='' onClick={clickHandler} name='cupcake'>Cupcake</button></li>
              </ul>
            </details>
          </li>
        </ul>
      </details>
      <div className="menu menu-horizontal px-1 sm:hidden">
      <Link to="/blogs/" className="btn  normal-case btn-ghost">Blogs</Link>
     <a className="btn  normal-case btn-ghost">Contribute</a>
        <li>
          <details>
            <summary>
              Themes
            </summary>
            <ul className="p-2 bg-base-100">
              <li><button className='' onClick={clickHandler} name='dark'>Dark</button></li>
              <li><button className='' onClick={clickHandler} name='light'>Light</button></li>
              <li><button className='' onClick={clickHandler} name='cupcake'>Cupcake</button></li>
            </ul>
          </details>
        </li>
      </div>
      
    </div>

  )
}

export default NavBar