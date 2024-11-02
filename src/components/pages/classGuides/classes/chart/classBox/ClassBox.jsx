const ClassBox = ({clase, config, setClass, itemsRef}) => {

    const goToClass = async (data) => {
        await setClass(data)
        itemsRef.current.scrollIntoView({behavior: 'smooth'});
    }

    return(
        <button onClick={() => goToClass(config)} className="class__btn">
            
            <div className="class__names">
                <img src={`/classIcons/${clase[0]}.png`} className="class__logo" alt="class logo"/>
                <span>{clase[0]}</span>
            </div>
            <div className="class__names">
                <img src={`/classIcons/${clase[1]}.png`} className="class__logo" alt="class logo"/>
                <span>{clase[1]}</span>
            </div>
        </button>
    )
}
 
export default ClassBox




// onClick={ ()=> setClass(name) }