
import {useState, useEffect, useRef} from 'react'
import Dropdown from './Dropdown'
import {NavLink} from 'react-router-dom'

const MenuItems = ({items, depthLvl}) => {

    const [dropdown, setDropdown] = useState(false)
    const [showItems, setShowItems] = useState(false)
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup
            document.removeEventListener("mousedown", handler)
            document.removeEventListener("touchstart", handler)
        };
    },[dropdown])

    const onMouseEnter = () => {
      window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    }

    return (
        <li
          className="menu-items"
          ref={ref}
          onMouseEnter={() => onMouseEnter()}
          onMouseLeave={() => onMouseLeave()}
          onClick={() => onMouseLeave()}
        >
          {
              items.subMenu ? (
                  <>
                    <NavLink
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={dropdown ? "true" : "false"}
                      onClick={() => setDropdown((prev) => !prev)}
                      >
                      {items.title}{" "}
                      {depthLvl > 0 && <>&raquo;</>}
                    </NavLink>
                    <Dropdown
                      depthLvl={depthLvl}
                      submenus={items.subMenu}
                      dropdown={dropdown}
                    />
                  </>
              ) : (
                  <NavLink to={items.url} onClick={() => setDropdown(false)}>
                      {items.title}
                  </NavLink>
              )
            }
        </li>
      );
    };
    
export default MenuItems;




// <Link to={menu.url}>{menu.title}</Link>