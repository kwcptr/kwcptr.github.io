import MenuItems from './MenuItems'

const Dropdown = ({submenus, dropdown, depthLvl}) => {

    depthLvl = depthLvl + 1;
    const dropdownClass = depthLvl > 1 ? "dropdown-submenu" : "";

    return (
        <ol className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {
                submenus.map((submenu, i) => (
                    <MenuItems items={submenu} key={i} depthLvl={depthLvl} />
                ))
            }
        </ol>
    )   
}

export default Dropdown
