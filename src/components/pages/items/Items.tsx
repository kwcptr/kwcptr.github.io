/* Routes */
//    import { Link } from "react-router-dom";

export const Items = ({children}:any) => {

    return(
        <section className="section__items">
            <div className="line"/>
            {children}
        </section>
    )
}



// <div style={{/* display:'none' */}}>
// {/* Optimizar las urls */}
// <Link to={"talismans/talisman-of-aden"}>Talisman of Aden</Link>
// <Link to={"talismans/blessed-talisman-of-aden"}>Blessed Talisman of Aden</Link>
// <Link to={"talismans/talisman-of-eva"}>Talisman of Eva</Link>
// <Link to={"talismans/blessed-talisman-of-eva"}>Blessed Talisman of Eva</Link>
// <Link to={"talismans/talisman-of-speed"}>Talisman of Speed</Link>
// <Link to={"talismans/blessed-talisman-of-speed"}>Blessed Talisman of Speed</Link>
// <Link to={"talismans/talisman-of-authority"}>Talisman of Authority</Link>
// <Link to={"talismans/blessed-talisman-of-authority"}>Blessed Talisman of Authority</Link>        
// <Link to={"talismans/venirs-talisman"}>Venir's Talisman</Link>        
// <Link to={"talismans/talisman-of-baium"}>Talisman of Baium</Link>        
// <Link to={"talismans/talisman-of-hellbound"}>Talisman of Hellbound</Link>        
// <Link to={"weapon/anakim"}>Anakim Pistols</Link>
// </div>