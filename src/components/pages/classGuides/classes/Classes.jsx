/* Component */
    import Chart from './chart/Chart'
 
const Classes = ({race, setRace, setClass, itemsRef}) => {

    const resetRace = (raceData) => {
        setRace(raceData)
        setClass([0, 'Select Race and Class'])
    }


    return(
        <div className="container__races">
            <nav className="races__navigation">
                <ol className="races__list">
                <li onClick={() => {resetRace([0, 'humans'])}}><img src={`/classIcons/human.png`} alt="race logo"/>Human</li>
                <li onClick={() => {resetRace([1, 'elfs'])}}><img src={`/classIcons/elf.png`} alt="race logo"/>Elf</li>
                <li onClick={() => {resetRace([2, 'darkelfs'])}}><img src={`/classIcons/darkelf.png`} alt="race logo"/>Dark Elf</li>
                <li onClick={() => {resetRace([3, 'orcs'])}}><img src={`/classIcons/orc.png`} alt="race logo"/>Orc</li>
                <li onClick={() => {resetRace([4, 'dwarfs'])}}><img src={`/classIcons/dwarf.png`} alt="race logo"/>Dwarf</li>
                <li onClick={() => {resetRace([5, 'kamael'])}}><img src={`/classIcons/kamael.png`} alt="race logo"/>Kamael</li>
                <li onClick={() => {resetRace([6, 'sylph'])}}><img src={`/classIcons/sylph.png`} alt="race logo"/>Sylph</li>
                </ol>
            </nav>

            <div className="classes__container"> 
                <Chart
                    race={race}
                    setClass={setClass}
                    itemsRef={itemsRef}
                />            
            </div>

        </div>
    )
}

export default Classes 