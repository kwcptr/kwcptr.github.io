    import ReactGA from "react-ga4";
/* Data */
    import classGuides from '../../../data/classGuides/classGuides'
/* React */
    import {useState, useEffect, useRef} from 'react'
/* Component */
    import ItemsByClass from './itemsByClass/ItemsByClass'
    import Classes from './classes/Classes'

export const ClassGuides = () => {

    const [raceActive, setRaceActive] = useState([0, 'humans']) // RACE
    const [classActive, setClassActive] = useState([0, 'Select Race and Class']) // CLASS

    const [heroSetted, setHeroSetted] = useState(null)

    const itemsList = useRef(null);

    useEffect(() => {   
        // Detectamos los cambios de la raza.
        if (raceActive[1] !== null) {
            setHeroSetted(classGuides[0][raceActive[1]])
        }
    },[setHeroSetted, raceActive])

    ReactGA.send("pageviewclassguides");

    return(
        <section className="section__classGuides">

            {/* Orgranigrama de las razas  */}
            <Classes race={raceActive} setRace={setRaceActive} setClass={setClassActive} itemsRef={itemsList}/>

            {/* Nombre de la clase seleccionada */}
            <div ref={itemsList} className="items__list">
                {
                    heroSetted !== null ?
                    <>
                        <h2>
                            { classActive[1] !== "Select Race and Class" && <img src={`/classIcons2/${classActive[1]}.png`} className="class__logo" alt="class logo"/> }      
                            {`${classActive[1][0].toUpperCase()}${classActive[1].substring(1)}`}
                        </h2>
                    </>
                    :
                    <></>
                }  

                {/* Items recomendados de la clase seleccionada */}
                {
                    heroSetted !== null ? 
                        heroSetted.map((clase,i) => 
                                (Object.keys(clase)[0] === classActive[1]) ? 
                                    <ItemsByClass
                                        key={i}
                                        dyes={clase[classActive[1]][0].dyes}
                                        weaponB={clase[classActive[1]][1].weaponB}
                                        armorB={clase[classActive[1]][2].armorB}
                                        weaponA={clase[classActive[1]][3].weaponA}
                                        armorA={clase[classActive[1]][4].armorA}
                                    />                    
                                : 
                                <div key={i}></div>
                            
                        )
                    : 
                        <p key="nf"> Select Race and Class </p>
                }
            </div>
        </section> 
    )
}
