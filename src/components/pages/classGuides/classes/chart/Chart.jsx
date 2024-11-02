/* React */
    import {useState, useEffect} from 'react'
/* Component */
    import ClassBox from './classBox/ClassBox'

    const Chart = ({race, setClass, itemsRef}) => {
    
    const [raceClasses, setRaceClasses] = useState(<>Clases</>)

    
    useEffect(() => { 

        // ! IMPORTANTE: 
            // La prop config de ClassBox debe contener un array, respetando el orden y los valores (id y classname) del objeto (data) classGuides. El id corresponde a la posición de la clase (respecto a su raza)

        switch (race[1]) {
            case "humans":
                setRaceClasses(
                    <>
                        <h3>Human Fighter</h3>
                        <div className="classes__container"> 
                            <ClassBox 
                                clase={["Gladiator","Duelist"]} 
                                config={[0, "Gladiator • Duelist"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Warlord","Dreadnought"]}
                                config={[1, "Warlord • Dreadnought"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Paladin","Phoenix Knight"]} 
                                config={[2, "Paladin • Phoenix Knight"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Dark Avenger","Hell Knight"]} 
                                config={[3, "Dark Avenger • Hell Knight"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Treasure Hunter","Adventurer"]} 
                                config={[4, "Treasure Hunter • Adventurer"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Hawkeye","Sagittarius"]} 
                                config={[5, "Hawkeye • Sagittarius"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                        </div>

                        <h3>Human Mystic</h3>
                        <div className="classes__container"> 
                            <ClassBox 
                                clase={["Sorcerer","Archmage"]} 
                                config={[6, "Sorcerer • Archmage"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Necromancer","Soultaker"]}
                                config={[7, "Necromancer • Soultaker"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Warlock","Arcana Lord"]} 
                                config={[8, "Warlock • Arcana Lord"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Bishop","Cardinal"]} 
                                config={[9, "Bishop • Cardinal"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Prophet","Hierophant"]} 
                                config={[10, "Prophet • Hierophant"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                        </div>

                        <div className="last_classes">
                            <div>
                                <h3>Human Death Pilgrim</h3>
                                <div className="classes__container"> 
                                    <ClassBox 
                                        clase={["Death Messenger","Death Knight"]} 
                                        config={[11, "Human Death Messenger • Human Death Knight"]}
                                        setClass={setClass}
                                        itemsRef={itemsRef}
                                    /> 
                                </div>
                            </div>
                            <div>
                                <h3>Human Assassin</h3>
                                <div className="classes__container"> 
                                    <ClassBox 
                                        clase={["Assassin","Assassin"]} 
                                        config={[12, "Human Assassin • Human Assassin"]}
                                        setClass={setClass}
                                        itemsRef={itemsRef}
                                    /> 
                                </div>
                            </div>
                        </div>
                    </>
                )
                break;
            case "elfs":
                setRaceClasses(
                    <>
                        <h3>Elven Fighter</h3>
                        <div className="classes__container"> 
                            <ClassBox 
                                clase={["Temple Knight","Eva's Templar"]} 
                                config={[13, "Temple Knight • Eva's Templar"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Swordsinger","Sword Muse"]}
                                config={[14, "Swordsinger • Sword Muse"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Plains Walker","Wind Rider"]} 
                                config={[15, "Plains Walker • Wind Rider"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Silver Ranger","Moonlight Sentinel"]} 
                                config={[16, "Silver Ranger • Moonlight Sentinel"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                        </div>

                        <h3>Elven Mystic</h3>
                        <div className="classes__container"> 
                            <ClassBox 
                                clase={["Spellsinger","Mystic Muse"]} 
                                config={[17, "Spellsinger • Mystic Muse"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Elemental Summoner","Elemental Master"]}
                                config={[18, "Elemental Summoner • Elemental Master"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Elven Elder","Eva's Saint"]} 
                                config={[19, "Elven Elder • Eva's Saint"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                        </div>

                        <h3>Elf Death Pilgrim</h3>
                        <div className="classes__container"> 
                            <ClassBox 
                                clase={["Death Messenger","Death Knight"]} 
                                config={[20, "Elf Death Messenger • Elf Death Knight"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                        </div>
                    </>
                )
                break;
            case "darkelfs":
                setRaceClasses(
                    <>
                        <h3>Dark Fighter</h3>
                        <div className="classes__container"> 
                            <ClassBox 
                                clase={["Shillien Knight","Shillien Templar"]} 
                                config={[21, "Shillien Knight • Shillien Templar"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Bladedancer","Spectral Dancer"]}
                                config={[22, "Bladedancer • Spectral Dancer"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Abyss Walker","Ghost Hunter"]} 
                                config={[23, "Abyss Walker • Ghost Hunter"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Phantom Ranger","Ghost Sentinel"]} 
                                config={[24, "Phantom Ranger • Ghost Sentinel"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                        </div>

                        <h3>Dark Mystic</h3>
                        <div className="classes__container"> 
                            <ClassBox 
                                clase={["Spellhowler","Storm Screamer"]} 
                                config={[25, "Spellhowler • Storm Screamer"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Phantom Summoner","Spectral Master"]}
                                config={[26, "Phantom Summoner • Spectral Master"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Shillien Elder","Shillien Saint"]} 
                                config={[27, "Shillien Elder • Shillien Saint"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                        </div>

                        <div className="last_classes">
                            <div>
                                <h3>Dark Elf Death Pilgrim</h3>
                                <div className="classes__container"> 
                                    <ClassBox 
                                        clase={["Death Messenger","Death Knight"]} 
                                        config={[28, "Dark Elf Death Messenger • Dark Elf Death Knight"]}
                                        setClass={setClass}
                                        itemsRef={itemsRef}
                                    /> 
                                </div>
                            </div>
                            <div>
                                <h3>Dark Elf Assassin</h3>
                                <div className="classes__container"> 
                                    <ClassBox 
                                        clase={["Assassin","Assassin"]} 
                                        config={[29, "Dark Elf Assassin • Dark Elf Assassin"]}
                                        setClass={setClass}
                                        itemsRef={itemsRef}
                                    /> 
                                </div>
                            </div>
                        </div>

                    </>
                )
                break;
            case "orcs":
                setRaceClasses(
                    <>
                        <h3>Orc Fighter</h3>
                        <div className="classes__container"> 
                            <ClassBox 
                                clase={["Destroyer","Titan"]} 
                                config={[30, "Destroyer • Titan"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Tyrant","Grand Khavatari"]}
                                config={[31, "Tyrant • Grand Khavatari"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Dragoon","Vanguard Rider"]}
                                config={[32, "Dragoon • Vanguard Rider"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                        </div>

                        <h3>Orc Mystic</h3>
                        <div className="classes__container"> 
                            <ClassBox 
                                clase={["Overlord","Dominator"]} 
                                config={[33, "Overlord • Dominator"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Warcryer","Doomcryer"]}
                                config={[34, "Warcryer • Doomcryer"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                        </div>
                    </>
                )
                break;
            case "dwarfs":
                setRaceClasses(
                    <>
                        <h3>Dwarven Fighter</h3>
                        <div className="classes__container"> 
                            <ClassBox 
                                clase={["Bounty Hunter","Fortune Seeker"]} 
                                config={[35, "Bounty Hunter • Fortune Seeker"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Warsmith","Maestro"]}
                                config={[36, "Warsmith • Maestro"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                        </div>
                    </>
                )
                break;
            case "kamael":
                setRaceClasses(
                    <>
                        <h3>Kamael Soldier</h3>
                        <div className="classes__container"> 
                            <ClassBox 
                                clase={["Berserker","Doombringer"]} 
                                config={[37, "Berserker • Doombringer"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Soul Ranger","Trickster"]} 
                                config={[38, "Soul Ranger • Trickster"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                            <ClassBox 
                                clase={["Soul Breaker","Soul Hound"]}
                                config={[39, "Soul Breaker • Soul Hound"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                        </div>
                    </>
                )
                break;
            case "sylph":
                setRaceClasses(
                    <>
                        <h3>Sylph Gunner</h3>
                        <div className="classes__container"> 
                            <ClassBox 
                                clase={["Wind Sniper","Storm Blaster"]} 
                                config={[40, "Wind Sniper • Storm Blaster"]}
                                setClass={setClass}
                                itemsRef={itemsRef}
                            /> 
                        </div>
                    </>
                )
                break;
            default:
                return
        } 
    },[setClass, race])
    

    return(  
        <div>
            {raceClasses}
        </div> 
    )
}

export default Chart