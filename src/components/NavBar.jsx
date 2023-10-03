/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { useClickAway } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";
const NavBar = (props) => {
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
    <div className="navbar bg-base-100 fixed shadow-md p-1 z-10 ">
      <div className="flex-1">
        <Link for="/" className="btn btn-ghost normal-case text-xl">
        <h1>
    
  Hacktober
  <span className="text-accent">Hub</span>
</h1>

        </Link>
      </div>

      <div className="menu menu-horizontal px-1">
        <Link to="/blogs/" className="btn  normal-case btn-ghost">
          Blogs
        </Link>
        <a
          className="btn  normal-case btn-ghost"
          href={"https://github.com/cyblogerz/hacktoberHub"}
          target="_blank"
        >
          Contribute
        </a>
        <li>
          <details id="detailElem" ref={ref}>
            <summary>Themes</summary>
            <ul className="p-2 bg-base-100">
              <li>
                <button className="" onClick={clickHandler} name="dark">
                  Dark
                </button>
              </li>
              <li>
                <button className="" onClick={clickHandler} name="light">
                  Light
                </button>
              </li>
              <li>
                <button className="" onClick={clickHandler} name="cupcake">
                  Cupcake
                </button>
              </li>
            </ul>
          </details>
        </li>
      </div>
    </div>
  );
};

export default NavBar;
