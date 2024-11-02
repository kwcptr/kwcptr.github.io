import {useState} from 'react';
import { Tooltip, Whisper } from 'rsuite';

    const initialTooltip = {
        "name": " ",
        "imgName": " ", 
        "type": " ",
        "type2": " ",
        "description": " ",
        "description2": " ",
        "soulcrystalsbar": " ",
        "adensc1": " ",
        "adensc2": " ",
        "hardinsc": " ",
        "setitemsbar": " ",
        "setitems": " ",
        "seteffectbar": " ",
        "seteffect": " ",
        "propertiesbar": " ",
        "properties": " ",
        "hiddenpowerbar": " ",
        "hiddenpower": " ",
        "hiddenpowerpvebar": " ",
        "hiddenpowerpve": " ",
        "hiddenpowerpvpbar": " ",
        "hiddenpowerpvp": " ",
        "optionalbar": " ",
        "optional": " ",
    }


const ItemsByClass = ({dyes, weaponB, armorB, weaponA, armorA}) => {

    const [tooltipInfo, setTooltipInfo] = useState(initialTooltip)
    const [itemType, setItemType] = useState()

    const setInfo = (data, item) => {
        setTooltipInfo(data)
        setItemType(item)
    }
 
    const tooltip = (
        <Tooltip className="tooltip">
            <div className="item__main">
                <img className="main__img" src={`/items/${itemType}/${tooltipInfo.imgName}.png`} alt={itemType} />
                <div className="main__info">
                    <h3>{tooltipInfo.name}</h3>
                    <p>{tooltipInfo.type2} </p>
                </div>
            </div>
            {
            tooltipInfo.description !== "-" &&
            <div className="item__desc">
            <p style={{
                  whiteSpace: 'pre-line'
            }}>{tooltipInfo.description}</p>
            </div>
            }
            {
            tooltipInfo.description2 !== "-" &&
            <div className="item__desc">
            <p style={{
                  whiteSpace: 'pre-line'
            }}>{tooltipInfo.description2}</p>
            </div>
            }
            {
            tooltipInfo.soulcrystalsbar !== "-" &&
            <div>
                <img src={`/items/tooltips/bar-soulcrystals.png`} className="desc__img3" alt="tooltip-barsc"/>
            </div>
            }
            {
            tooltipInfo.adensc1 !== "-" &&
            <div className="item__desc">
            <img src={`/items/tooltips/adens-soul-crystal.png`} className="desc__img" alt="tooltip-scicon"/>
            <p style={{
                  whiteSpace: 'pre-line'
            }}>{tooltipInfo.adensc1}</p>
            </div>
            }
            {
            tooltipInfo.adensc2 !== "-" &&
            <div className="item__desc">
            <img src={`/items/tooltips/adens-soul-crystal.png`} className="desc__img" alt="tooltip-scicon"/>
            <p style={{
                  whiteSpace: 'pre-line'
            }}>{tooltipInfo.adensc2}</p>
            </div>
            }
            {
            tooltipInfo.hardinsc !== "-" &&
            <div className="item__desc">
            <img src={`/items/tooltips/hardins-soul-crystal.png`} className="desc__img" alt="tooltip-scicon"/>
            <p style={{
                  whiteSpace: 'pre-line'
            }}>{tooltipInfo.hardinsc}</p>
            </div>
            }
            {
            tooltipInfo.setitemsbar !== "-" &&
            <div>
                <img src={`/items/tooltips/bar-setitems.png`} className="desc__img2" alt="tooltip-bar"/>
            </div>
            }
            {
            tooltipInfo.setitems !== "-" &&
            <div className="item__desc">
            <p style={{
                  whiteSpace: 'pre-line'
            }}>{tooltipInfo.setitems}</p>
            </div>
            }
            {
            tooltipInfo.seteffectbar !== "-" &&
            <div>
                <img src={`/items/tooltips/bar-seteffect.png`} className="desc__img2" alt="tooltip-bar"/>
            </div>
            }
            {
            tooltipInfo.seteffect !== "-" &&
            <div className="item__desc">
            <p style={{
                  whiteSpace: 'pre-line'
            }}>{tooltipInfo.seteffect}</p>
            </div>
            }
            {
            tooltipInfo.propertiesbar !== "-" &&
            <div>
                <img src={`/items/tooltips/bar-properties.png`} className="desc__img2" alt="tooltip-bar"/>
            </div>
            }
            {
            tooltipInfo.properties !== "-" &&
            <div className="item__desc">
            <p style={{
                  whiteSpace: 'pre-line'
            }}>{tooltipInfo.properties}</p>
            </div>
            }
            {
            tooltipInfo.hiddenpowerbar !== "-" &&
            <div>
                <img src={`/items/tooltips/bar-hiddenpower.png`} className="desc__img2" alt="tooltip-bar"/>
            </div>
            }
            {
            tooltipInfo.hiddenpower !== "-" &&
            <div className="item__desc">
            <p style={{
                  whiteSpace: 'pre-line'
            }}>{tooltipInfo.hiddenpower}</p>
            </div>
            }
            {
            tooltipInfo.hiddenpowerpvebar !== "-" &&
            <div>
                <img src={`/items/tooltips/bar-hiddenpower-pve.png`} className="desc__img2" alt="tooltip-bar"/>
            </div>
            }
            {
            tooltipInfo.hiddenpowerpve !== "-" &&
            <div className="item__desc">
            <p style={{
                  whiteSpace: 'pre-line'
            }}>{tooltipInfo.hiddenpowerpve}</p>
            </div>
            }
            {
            tooltipInfo.hiddenpowerpvpbar !== "-" &&
            <div>
                <img src={`/items/tooltips/bar-hiddenpower-pvp.png`} className="desc__img2" alt="tooltip-bar"/>
            </div>
            }
            {
            tooltipInfo.hiddenpowerpvp !== "-" &&
            <div className="item__desc">
            <p style={{
                  whiteSpace: 'pre-line'
            }}>{tooltipInfo.hiddenpowerpvp}</p>
            </div>
            }
            {
            tooltipInfo.optionalbar !== "-" &&
            <div>
                <img src={`/items/tooltips/bar-optional.png`} className="desc__img2" alt="tooltip-bar"/>
            </div>
            }
            {
            tooltipInfo.optional !== "-" &&
            <div className="item__desc">
            <p style={{
                  whiteSpace: 'pre-line'
            }}>{tooltipInfo.optional}</p>
            </div>
            }
      </Tooltip>
    )

    const CustomTooltip = ({ children, tooltipData, position }) => (
        <Whisper
            delayClose={0}
            followCursor 
            placement={position}
            trigger="hover" 
            speaker={tooltipData}
        >
            {children}
        </Whisper>
      );


    return(
        <>
            <div className="container__items">

                <div className="items__dyes">
                    <div><h3 className="dyes__title">Patterns</h3></div>
                    <div className="dyes__list">                    
                    { 
                            dyes.map((dye, i) =>
                                <figure className="dyes" 
                                    key={i}>
                                        <CustomTooltip tooltipData={tooltip} position={dye.position} >
                                            <img 
                                                onMouseEnter={() => setInfo(dye, "dyes")}
                                                onMouseLeave={() => setInfo(initialTooltip, "")}
                                                src={`/items/dyes/${dye.imgName}.png`}
                                                alt="dye" 
                                                />
                                        </CustomTooltip>
                                        <CustomTooltip tooltipData={tooltip} position={dye.position}>
                                            <div 
                                                onMouseEnter={() => setInfo(dye, "dyes")} 
                                                onMouseLeave={() => setInfo(initialTooltip, "")} 
                                                className="item__info">
                                                    <figcaption> {dye.name} </figcaption>
                                                    <span>{dye.type}</span>
                                            </div>
                                        </CustomTooltip>
                                </figure> 
                            ) 
                    }
                    </div>
                </div>

                <div className="items__bGrade">
                    <div> <h3 className="bGrade__title">B-grade equipment</h3> </div>
                    <div className="bGrade__list">
                        { 
                            weaponB.map((weapon, i) => 
                                <figure className="list__weapons" 
                                    key={i}>
                                        <CustomTooltip tooltipData={tooltip} position={weapon.position}>
                                            <img 
                                                onMouseEnter={() => setInfo(weapon, "weaponsB")} 
                                                onMouseLeave={() => setInfo(initialTooltip)}  
                                                src={`/items/weaponsB/${weapon.imgName}.png`} 
                                                alt="weapon" 
                                                />
                                        </CustomTooltip>
                                        <CustomTooltip tooltipData={tooltip} position={weapon.position}>
                                            <div 
                                                onMouseEnter={() => setInfo(weapon, "weaponsB")} 
                                                onMouseLeave={() => setInfo(initialTooltip)} 
                                                className="item__info">
                                                <figcaption> {weapon.name} </figcaption>
                                                <span>{weapon.type}</span>
                                            </div>
                                        </CustomTooltip>
                                </figure> 
                            ) 
                        }
                        { 
                            armorB.map((armor, i) => 
                                <figure className="list__armors"
                                    key={i}>
                                        <CustomTooltip tooltipData={tooltip} position={armor.position}>
                                            <img 
                                                onMouseEnter={() => setInfo(armor, "armorsB")} 
                                                onMouseLeave={() => setInfo(initialTooltip)}
                                                src={`/items/armorsB/${armor.imgName}.png`}
                                                alt="armor"
                                                />
                                        </CustomTooltip>
                                        <CustomTooltip tooltipData={tooltip} position={armor.position}>
                                            <div 
                                                onMouseEnter={() => setInfo(armor, "armorsB")} 
                                                onMouseLeave={() => setInfo(initialTooltip)} 
                                                className="item__info">
                                                <figcaption> {armor.name} </figcaption>
                                                <span>{armor.type}</span>
                                            </div>
                                        </CustomTooltip>
                                </figure> 
                            ) 
                        }
                    </div>
                </div> 

                <div className="items__aGrade">
                    <div> <h3 className="aGrade__title">A-grade equipment</h3> </div>
                    <div className="aGrade__list">
                        { 
                            weaponA.map((weapon, i) => 
                                <figure className="list__weapons"
                                    key={i}>
                                        <CustomTooltip tooltipData={tooltip} position={weapon.position}>
                                            <img 
                                                onMouseEnter={() => setInfo(weapon, "weaponsA")}  
                                                onMouseLeave={() => setInfo(initialTooltip)} 
                                                src={`/items/weaponsA/${weapon.imgName}.png`} 
                                                alt="weapon"
                                                />
                                        </CustomTooltip>
                                        <CustomTooltip tooltipData={tooltip} position={weapon.position}>
                                            <div 
                                                onMouseEnter={() => setInfo(weapon, "weaponsA")} 
                                                onMouseLeave={() => setInfo(initialTooltip)} 
                                                className="item__info">
                                                <figcaption> {weapon.name} </figcaption>
                                                <span>{weapon.type}</span>
                                            </div>
                                        </CustomTooltip>
                                </figure> 
                            ) 
                        }
                        { 
                            armorA.map((armor, i) => 
                                <figure className="list__armors"
                                    key={i}>
                                    <CustomTooltip tooltipData={tooltip} position={armor.position}>
                                        <img 
                                            onMouseEnter={() => setInfo(armor, "armorsA")} 
                                            onMouseLeave={() => setInfo(initialTooltip)}  
                                            src={`/items/armorsA/${armor.imgName}.png`} 
                                            alt="armor" 
                                            />
                                    </CustomTooltip>
                                    <CustomTooltip tooltipData={tooltip} position={armor.position}>                                    
                                        <div 
                                            onMouseEnter={() => setInfo(armor, "armorsA")} 
                                            onMouseLeave={() => setInfo(initialTooltip)} 
                                            className="item__info">
                                            <figcaption> {armor.name} </figcaption>
                                            <span>{armor.type}</span>
                                        </div>
                                    </CustomTooltip>
                                </figure> 
                            ) 
                        }
                    </div>

                </div>
            </div>     
        </>
    )
}

export default ItemsByClass