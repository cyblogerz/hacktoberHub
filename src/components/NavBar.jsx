/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { RxHamburgerMenu } from "react-icons/rx"
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi"

import { useClickAway } from "@uidotdev/usehooks";
import React from "react";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  const [navOpen, setNavOpen] = React.useState(false)
  const [themOpen, setthemOpen] = React.useState(false)

  function navOpenHandler () {
    setNavOpen(!navOpen)
    setthemOpen(false)
  }

  const clickHandler = (e) => {
    const { value: val, name } = e.target;
    props.onThemeChange(val, name);
    // eslint-disable-next-line no-undef
    detailElem.removeAttribute("open");
  };

  const ref = useClickAway(() => {
    const detailElem = document.querySelector("#detailElem");
    if (detailElem.hasAttribute("open")) {
      detailElem.removeAttribute("open");
    }
  });

  return (
    <>
      <div className="navbar bg-base-100 justify-between fixed shadow-md p-1 z-10 ">



        <Link for="/" className="btn btn-ghost normal-case text-xl">
          <h1 className="">
            Hacktober
            <span className="text-accent">Hub</span>
          </h1>

        </Link>


        <div className="menu md:menu-horizontal hidden">
          <Link to="/blogs/" className="btn  normal-case btn-ghost">
            Blogs
          </Link>
          <a
            className="btn  normal-case btn-ghost"
            href={ "https://github.com/cyblogerz/hacktoberHub" }
            target="_blank"
          >
            Contribute
          </a>
          <li>
            <details id="detailElem" ref={ ref }>
              <summary >Themes</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <button className="" onClick={ clickHandler } name="dark">
                    Dark
                  </button>
                </li>
                <li>
                  <button className="" onClick={ clickHandler } name="light">
                    Light
                  </button>
                </li>
                <li>
                  <button className="" onClick={ clickHandler } name="cupcake">
                    Cupcake
                  </button>
                </li>
              </ul>
            </details>
          </li>
        </div>
        <div className="md:hidden ">
          <div className="md:hidden mr-5  relative" onClick={ navOpenHandler }><RxHamburgerMenu size={ 26 } /></div>
          { navOpen &&
            <div className="absolute left-[71%] top-16 flex flex-col translate-x-10 transition-transform">
              <Link to="/blogs/" className=" font-semibold normal-case btn-ghost">
                Blogs
              </Link>
              <a
                className="font-semibold normal-case btn-ghost"
                href={ "https://github.com/cyblogerz/hacktoberHub" }
                target="_blank"
              >
                Contribute
              </a>

              <details open={ themOpen }>
                <summary className='font-semibold flex justify-center items-center gap-1 list-none' onClick={ () => setthemOpen(!themOpen) }  >Themes{ !themOpen ? <BiSolidDownArrow size={ 12 } /> : <BiSolidUpArrow size={ 12 } /> } </summary>
                <ul className=" bg-slate-200">
                  <li>
                    <button className="" onClick={ clickHandler } name="dark">
                      Dark
                    </button>
                  </li>
                  <li>
                    <button className="" onClick={ clickHandler } name="light">
                      Light
                    </button>
                  </li>
                  <li>
                    <button className="" onClick={ clickHandler } name="cupcake">
                      Cupcake
                    </button>
                  </li>
                </ul>
              </details>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default NavBar;
