/* Img */
import logo from "./img/logo.png";
/* Routes */
import { Link } from "react-router-dom";
/* Data */
import {optionsMenu} from "./options"
/* Components */
import { Search } from "components";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import MenuItems from "./Dropdown/MenuItems"


export const Nav = () => {
 useEffect(() => {
  ReactGA.initialize("G-9C90DY9K65");
  ReactGA.event({
    category: "test",
    action: "probando",
    label: "hola",
});

  }, []);

  return (
    <>
      <nav className="navigation">
        <div className="navigation__container">

          <div className="container__menu">
            <ol className="menu__list">
              {
                optionsMenu.map((menu, i) => {
                  const depthLvl = 0;
                  return <MenuItems items={menu} key={i} depthLvl={depthLvl}/>
                })
              }
            </ol>
          </div>

          <div className="container__logo">
            <Link to="/">
              <img src={logo} alt="bg" />
            </Link>
          </div>
          
          <Search />
        </div>
      </nav>
    </>
  );
};




//<li>
//                <NavLink to="/home"> Home </NavLink>
//              </li>
//
//              <div style={{ position: 'relative'}}>
//                <li onClick={
//                    () => setShowItemsMenu(true)
//                  } className="items">
//                  <NavLink to="/">Items</NavLink>
//                </li>
//              </div>
//
//              <li>
//                <NavLink to="/class_guides"> Class guides </NavLink>
//              </li>  