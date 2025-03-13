import ReactGA from "react-ga4";

export const Article10 = () => {

  ReactGA.send("pageviewarticle10");

  return (
    <div className="news-article">
      <header className="article-header">
        <h1 className="article-title">Class Update: Orc Shamans</h1>
        <div className="article-metadata">
          {/* <span className="author">Bona</span> */}
          <span className="date">March 12, 2025</span>
        </div>
      </header>
      <div className="table-of-contents">
        <h2>Contents</h2>
        <ul>
          <li><a href="#common">Common</a></li>
          <li><a href="#dominator">Dominator</a></li>
          <li><a href="#doomcryer">Doomcryer</a></li>
        </ul>
      </div>
      <div id="common" className="article-text5">
        Common
      </div>
      <div className="article-text">
        — The Life Drain and Steal Essence skills have been deleted and replaced by the Pyro Vortex skill.
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Skill name</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="/items/icons/s_pyro_vortex.png" alt="Pyro Vortex" />
              <br />
              <span className="skill-text">Pyro Vortex</span>
            </td>
            <td>
              Attacks with magic power.
              <br />With a 30% chance recovers 200 HP.
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — A new Rare rank buff skill has been added:
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Skill name</th>
            <th>Rank</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="/items/icons/s_crimson_flame.png" alt="Crimson Flame" />
              <br />
              <span className="skill-text">Crimson Flame</span>
            </td>
            <td>
              Rare
            </td>
            <td>
              M. Atk. +1500
              <br />M. Skill Power +5%
              <br /><br />&lt;Skill upgrade&gt;
              <br /><span className="title-text">Pyro Vortex</span>
              <br />- Increases number of targets.
              <br />- Decreases the skill's cast time.
              <br /><br /><span className="title-text">Blood Strike</span>
              <br />- Increases Skill Power.
              <br />- Decreases the skill's cast time.
              <br /><br />&lt;Spirit Ore Consumption: 30&gt;
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — Bloody Strike has been renamed to Blood Strike and its power has been increased.
        <br />— The Flare Bind skill has been added.
        <br />- Replaces the existing Seal of Binding skill.
        <br />— The Battle Cry skill has been changed from a toggle skill to a buff skill and the skill effect has been changed.
        <br />- The buff lasts for 20 minutes.
        <br />— Automatically triggered passive debuff/anomaly skills have been combined.
        <br />- The Seal of Chaos, Seal of Winter and Seal of Slow skills have been combined into the Flame Mark skill.
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Skill name</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="/items/icons/s_flame_mark.png" alt="Flame Mark" />
              <br />
              <span className="skill-text">Flame Mark</span>
            </td>
            <td>
              With a 100% chance after an attack skill:
              <br />Target's Atk. Spd, Casting Spd., Speed -30%
              <br />(Duration: 10 seconds. Trigger cooldown: 10 seconds)
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — The Life Rescue skill has been changed from a buff skill that continuously recovers HP to a skill that instantly recovers a fixed amount.
        <br />— The following skills have been removed:
        <br />- Eagle Spirit
        <br />- Soul Evasion
        <br />- Spirit Shield
        <br />- Chill Flame
        <br />- Blaze Quake
        <br />- Venom
        <br />- Venom Seal
        <br />- Aura Sink
      </div>
      <div id="dominator" className="article-text5">
        Dominator
      </div>
      <div className="article-text">
        — A new Enhanced rank passive skill has been added:
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Skill name</th>
            <th>Rank</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="/items/icons/s_flame_heart2.png" alt="Flame Heart" />
              <br />
              <span className="skill-text">Flame Heart</span>
            </td>
            <td>
              Enhanced
            </td>
            <td>
              <span className="title-text">Enchant level: 0</span>
              <br />M. Atk. +300
              <br />PvE damage +1%
              <br />M. Skill Critical Rate +1%
              <br /><br /><span className="title-text">Enchant level: +1</span>
              <br />M. Atk. +500
              <br />PvE damage +3%
              <br />M. Skill Critical Rate +2%
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />M. Atk. +700
              <br />PvE damage +6%
              <br />M. Skill Critical Rate +3%
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />M. Atk. +1000
              <br />PvE damage +10%
              <br />M. Skill Critical Rate +5%
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — The effect of the Seal of Disease skill has been changed.
        <br />- The target type is changed from enemy clan members to a maximum of 5 enemies.
        <br />- The cooldown and duration is changed.
        <br />- A HP Recovery Rate -100% effect is added and the Seal of Scourge skill is removed.
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Effect before changes</th>
            <th>Effect after changes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Enemy clan members' Received Healing -50%
              <br /><br />Cooldown: 30 seconds
              <br />Duration: 10 seconds
            </td>
            <td>
              Enemies' Received Healing -50%
              <br />HP Recovery Rate -100%
              <br />Affects up to 5 targets.
              <br /><br />Cooldown: 15 seconds
              <br />Duration: 5 seconds
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — The range and target type of the Seal of Infection and Enhanced Seal of Infection skills have been changed.
        <br />- Seal of Infection: the target type is changed from enemy clan members to up to 5 enemies.
        <br />- Enhanced Seal of Infection: the target type is changed from enemy clan members to up to 8 enemies.
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Skill name</th>
            <th>Effect before changes</th>
            <th>Effect after changes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/68/image_45468.png" alt="Seal of Infection" />
              <br />
              <span className="skill-text">Seal of Infection</span>
            </td>
            <td>
              Enemy clan members' Received Healing -50%
              <br />HP Recovery Rate -100%
              <br />MP Recovery Rate -50%
              <br /><br />Cooldown: 30 seconds
              <br />Duration: 10 seconds
            </td>
            <td>
              Enemies' Received Healing -50%
              <br />HP Recovery Rate -100%
              <br />MP Recovery Rate -50%
              <br />Affects up to 5 targets.
              <br /><br />Cooldown: 15 seconds
              <br />Duration: 5 seconds
            </td>
          </tr>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/52/image_45452.png" alt="Enhanced Seal of Infection" />
              <br />
              <span className="skill-text">Enhanced Seal of Infection</span>
            </td>
            <td>
              Enemy clan members' Received Healing -60%
              <br />HP Recovery Rate -100%
              <br />MP Recovery Rate -50%
              <br />HP Recovery Potions' Effect -30%
              <br /><br />Cooldown: 30 seconds
              <br />Duration: 10 seconds
            </td>
            <td>
              Enemies' Received Healing -60%
              <br />HP Recovery Rate -100%
              <br />MP Recovery Rate -50%
              <br />HP Recovery Potions' Effect -30%
              <br />Affects up to 8 targets.
              <br /><br />Cooldown: 15 seconds
              <br />Duration: 5 seconds
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — The Prophecy of Pa'agrio skill has been changed.
        <br />- The P./M. Accuracy/Evasion bonus effect has been replaced with a Speed bonus effect, and the PvE damage bonus effect has been improved.
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Skill level</th>
            <th>Effect before changes</th>
            <th>Effect after changes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/14/image_1414.png" alt="Prophecy of Pa'agrio" />
              <br />
              <span className="skill-text">Prophecy of Pa'agrio</span>
            </td>
            <td>
              <span className="title-text">Lv1:</span>
              <br />&lt;Spirit Ore Consumption: 3&gt;
              <br />Max CP +10%
              <br />CP Recovery Rate +20%
              <br />P./M. Accuracy +4
              <br />P./M. Evasion +4
              <br />PvE damage +15%
              <br />Atk. Spd. +10%
              <br />Casting Spd. +10%
              <br />P. Skill Critical Rate +15%
              <br />P. Skill Critical Damage +15%
              <br />M. Skill Critical Rate +15%
              <br />M. Skill Critical Damage +15%
              <br /><br /><span className="title-text">Lv2:</span>
              <br />&lt;Spirit Ore Consumption: 6&gt;
              <br />Max CP +15%
              <br />CP Recovery Rate +40%
              <br />P./M. Accuracy +4
              <br />P./M. Evasion +4
              <br />PvE damage +20%
              <br />Atk. Spd. +15%
              <br />Casting Spd. +15%
              <br />P. Skill Critical Rate +20%
              <br />P. Skill Critical Damage +20%
              <br />M. Skill Critical Rate +20%
              <br />M. Skill Critical Damage +20%
            </td>
            <td>
              <span className="title-text">Lv1:</span>
              <br />&lt;Spirit Ore Consumption: 30&gt;
              <br />Max CP +10%
              <br />CP Recovery Rate +20%
              <br />PvE damage +23%
              <br />Atk. Spd. +10%
              <br />Casting Spd. +10%
              <br />Speed +2
              <br />P. Skill Critical Rate +15%
              <br />P. Skill Critical Damage +15%
              <br />M. Skill Critical Rate +15%
              <br />M. Skill Critical Damage +15%
              <br /><br /><span className="title-text">Lv2:</span>
              <br />&lt;Spirit Ore Consumption: 40&gt;
              <br />Max CP +15%
              <br />CP Recovery Rate +40%
              <br />PvE damage +30%
              <br />Atk. Spd. +15%
              <br />Casting Spd. +15%
              <br />Speed +5
              <br />P. Skill Critical Rate +20%
              <br />P. Skill Critical Damage +20%
              <br />M. Skill Critical Rate +20%
              <br />M. Skill Critical Damage +20%
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — The Ritual of Life skill is no longer removed when acquiring the Pa'agrio's Touch skill.
        <br />— The Ritual of Life skill is now removed when acquiring the Pa'agrio Honor skill.
        <br />— The Pa'agrio's Power skill has been added.
        <br />- Replaces the existing Pa'agrio's Protection skill.
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Skill name</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="skill-container">
              <span className="skill-text">Pa'agrio's Power</span>
            </td>
            <td>
              <span className="title-text">Lv1:</span>
              <br />&lt;Spirit Ore Consumption: 6&gt;
              <br />M. Atk. +100
              <br />P. Def. +300
              <br />M. Skill Critical Rate +1%
              <br /><br /><span className="title-text">Lv2:</span>
              <br />&lt;Spirit Ore Consumption: 8&gt;
              <br />M. Atk. +200
              <br />P. Def. +480
              <br />M. Skill Critical Rate +2%
              <br /><br /><span className="title-text">Lv3:</span>
              <br />&lt;Spirit Ore Consumption: 10&gt;
              <br />M. Atk. +300
              <br />P. Def. +650
              <br />M. Skill Critical Rate +3%
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — The Enhanced rank Pa'agrio's Cure skill has been changed from a buff skill that continuously recovers HP to a skill that instantly recovers HP. Spirit Ore consumption has been added.
        <br />- The target type has been changed from clan members to allies.
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Effect before changes</th>
            <th>Effect after changes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="skill-container">
              Recovers HP of nearby clan members. Power 150.
              <br />Recovers 800 CP of nearby clan members.
              <br /><br />Continuously recovers 53 HP / 40 CP of nearby clan members.
              <br /><br />Cannot be used with Pa'agrio's Touch and more effective healings.
            </td>
            <td>
              Recovers HP of nearby allies. Power 160.
              <br />Afterwards, additionally recovers 900 CP / 1200 HP.
              <br /><br />Affects up to 8 targets including yourself.
              <br /><br />&lt;Spirit Ore Consumption: 1&gt;
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — The Superior rank Spell of Power skill has been changed.
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Skill name</th>
            <th>Rank</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/75/image_45275.png" alt="Spell of Power" />
              <br />
              <span className="skill-text">Spell of Power</span>
            </td>
            <td>
              Superior
            </td>
            <td>
              <span className="title-text">Enchant level: 0</span>
              <br />M. Atk. +100
              <br />P. Def. +100
              <br />M. Skill Critical Damage +40
              <br /><br /><span className="title-text">Enchant level: +1</span>
              <br />M. Atk. +300
              <br />P. Def. +360
              <br />M. Skill Critical Damage +60
              <br />M. Skill Critical Rate +2%
              <br />PvE damage +5%
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />M. Atk. +500
              <br />P. Def. +680
              <br />M. Skill Critical Damage +80
              <br />M. Skill Critical Rate +4%
              <br />PvE damage +10%
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />M. Atk. +700
              <br />P. Def. +1000
              <br />M. Skill Critical Damage +100
              <br />M. Skill Critical Rate +6%
              <br />PvE damage +15%
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — The Heroic rank Pa'agrio's Touch skill has been improved.
        <br />- The target type has been changed from clan members to allies.
        <br />- The protective barrier HP has been increased to 10000 + 30% of the caster's HP.
        <br />- The CP recovery effect effect every 3 seconds has been increased from 10% to 50% of Max CP.
        <br />— The effect of the Rare rank Flame Burst skill has been changed.
        <br />- Skill power and attack range have been significantly increased.
        <br />- The trigger chance of the continuous HP/MP decrease debuff is increased.
        <br />- The casting time is decreased.
        <br />- The cooldown is increased from 4 to 15 seconds.
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Effect before changes (based on Lv8 +3)</th>
            <th>Effect after changes (based on Lv8 +3)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Attacks with 192 power.
              <br />Drains HP/MP for 10 seconds.
              <br /><br />The amount of drained HP depends on the character's M. Atk.
              <br />The effect is enhanced if the skill is used against one target (only once).
              <br /><br />&lt;Cooldown: 4 seconds&gt;
              <br />&lt;Spirit Ore Consumption: 3&gt;
            </td>
            <td>
              Attacks with 296 power.
              <br />Drains HP/MP for 10 seconds.
              <br /><br />The amount of drained HP depends on the character's M. Atk.
              <br />The effect is enhanced if the skill is used against one target (only once).
              <br /><br />&lt;Cooldown: 15 seconds&gt;
              <br />&lt;Spirit Ore Consumption: 5&gt;
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — The following skills have been removed:
        <br />- Seal of Flame
        <br />- Seal of Gloom
        <br />- Pa'agrio's Heart
      </div>
      <div id="doomcryer" className="article-text5">
        Doomcryer
      </div>
      <div className="article-text">
        — A new Enhanced rank passive skill has been added:
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Skill name</th>
            <th>Rank</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="/items/icons/s_flame_heart.png" alt="Flame Heart" />
              <br />
              <span className="skill-text">Flame Heart</span>
            </td>
            <td>
              Enhanced
            </td>
            <td>
              <span className="title-text">Enchant level: 0</span>
              <br />M. Atk. +300
              <br />PvE damage +1%
              <br />M. Skill Critical Damage +50
              <br /><br /><span className="title-text">Enchant level: +1</span>
              <br />M. Atk. +500
              <br />PvE damage +3%
              <br />M. Skill Critical Damage +100
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />M. Atk. +700
              <br />PvE damage +6%
              <br />M. Skill Critical Damage +200
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />M. Atk. +1000
              <br />PvE damage +10%
              <br />M. Skill Critical Damage +300
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — The effect of the Freezing Flame skill has been changed.
        <br />- When the skill is acquired, the Frost Flame skill is removed.
        <br />— A Speed bonus effect has been added to the Chant of Vampire skill and the amount of consumed Spirit Ores has been changed.
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Skill level</th>
            <th>Effect before changes</th>
            <th>Effect after changes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              1
            </td>
            <td>
              With a 80% chance absorsbs 6% of the inflicted damage as HP.
              <br />&lt;Spirit Ore Consumption: 1&gt;
            </td>
            <td>
              With a 80% chance absorsbs 6% of the inflicted damage as HP.
              <br />Speed +1
              <br />&lt;Spirit Ore Consumption: 6&gt;
            </td>
          </tr>
          <tr>
            <td>
              1
            </td>
            <td>
              With a 80% chance absorsbs 7% of the inflicted damage as HP.
              <br />&lt;Spirit Ore Consumption: 2&gt;
            </td>
            <td>
              With a 80% chance absorsbs 7% of the inflicted damage as HP.
              <br />Speed +2
              <br />&lt;Spirit Ore Consumption: 7&gt;
            </td>
          </tr>
          <tr>
            <td>
              1
            </td>
            <td>
              With a 80% chance absorsbs 8% of the inflicted damage as HP.
              <br />&lt;Spirit Ore Consumption: 3&gt;
            </td>
            <td>
              With a 80% chance absorsbs 8% of the inflicted damage as HP.
              <br />Speed +3
              <br />&lt;Spirit Ore Consumption: 8&gt;
            </td>
          </tr>
          <tr>
            <td>
              1
            </td>
            <td>
              With a 80% chance absorsbs 9% of the inflicted damage as HP.
              <br />&lt;Spirit Ore Consumption: 4&gt;
            </td>
            <td>
              With a 80% chance absorsbs 9% of the inflicted damage as HP.
              <br />Speed +5
              <br />&lt;Spirit Ore Consumption: 10&gt;
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — The Prophecy of Victory skill has been changed.
        <br />- The P./M. Accuracy/Evasion bonus effect has been replaced with a Speed bonus effect, and the PvE damage bonus effect has been improved.
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Skill level</th>
            <th>Effect before changes</th>
            <th>Effect after changes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/63/image_1363.png" alt="Prophecy of Victory" />
              <br />
              <span className="skill-text">Prophecy of Victory</span>
            </td>
            <td>
              <span className="title-text">Lv1:</span>
              <br />&lt;Spirit Ore Consumption: 3&gt;
              <br />HP/MP Recovery Rate +20%
              <br />P./M. Accuracy +4
              <br />P./M. Evasion +4
              <br />PvE damage +15%
              <br />Atk. Spd. +10%
              <br />Casting Spd. +10%
              <br />P. Skill Critical Rate +15%
              <br />P. Skill Critical Damage +15%
              <br />M. Skill Critical Rate +15%
              <br />M. Skill Critical Damage +15%
              <br /><br /><span className="title-text">Lv2:</span>
              <br />&lt;Spirit Ore Consumption: 6&gt;
              <br />HP/MP Recovery Rate +40%
              <br />P./M. Accuracy +4
              <br />P./M. Evasion +4
              <br />PvE damage +20%
              <br />Atk. Spd. +15%
              <br />Casting Spd. +15%
              <br />P. Skill Critical Rate +20%
              <br />P. Skill Critical Damage +20%
              <br />M. Skill Critical Rate +20%
              <br />M. Skill Critical Damage +20%
            </td>
            <td>
              <span className="title-text">Lv1:</span>
              <br />&lt;Spirit Ore Consumption: 30&gt;
              <br />HP/MP Recovery Rate +20%
              <br />PvE damage +23%
              <br />Atk. Spd. +10%
              <br />Casting Spd. +10%
              <br />Speed +2
              <br />P. Skill Critical Rate +15%
              <br />P. Skill Critical Damage +15%
              <br />M. Skill Critical Rate +15%
              <br />M. Skill Critical Damage +15%
              <br /><br /><span className="title-text">Lv2:</span>
              <br />&lt;Spirit Ore Consumption: 40&gt;
              <br />HP/MP Recovery Rate +40%
              <br />PvE damage +30%
              <br />Atk. Spd. +15%
              <br />Casting Spd. +15%
              <br />Speed +5
              <br />P. Skill Critical Rate +20%
              <br />P. Skill Critical Damage +20%
              <br />M. Skill Critical Rate +20%
              <br />M. Skill Critical Damage +20%
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — The Enhanced rank Chant of Healing skill has been changed from a buff skill that continuously recovers HP to a skill that instantly recovers HP. Spirit Ore consumption has been added.
        <br />- After the change, it can be used simultaneously with Pa'agrio's Touch.
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Effect before changes</th>
            <th>Effect after changes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="skill-container">
              Continuously recovers 66 HP / 46 CP of nearby party members.
              <br />Cannot be used with Pa'agrio's Touch and more effective healings.
            </td>
            <td>
              Recovers HP of nearby party members. Power 800.
              <br />Afterwards, additionally recovers 1050 CP / 1500 HP.
              <br /><br />&lt;Spirit Ore Consumption: 1&gt;
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — The enchant effects of the Superior rank Spell of Fatality skill have been changed.
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Skill name</th>
            <th>Rank</th>
            <th>Effect before changes</th>
            <th>Effect after changes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/76/image_45276.png" alt="Spell of Fatality" />
              <br />
              <span className="skill-text">Spell of Fatality</span>
            </td>
            <td>
              Superior
            </td>
            <td>
              <span className="title-text">Enchant level: 0</span>
              <br />M. Skill Critical Rate +15%
              <br />M. Skill Cooldown -1%
              <br /><br /><span className="title-text">Enchant level: +1</span>
              <br />M. Atk. +300
              <br />P. Def. +300
              <br />M. Skill Critical Rate +15%
              <br />M. Skill Cooldown -1%
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />M. Atk. +600
              <br />P. Def. +600
              <br />M. Skill Critical Rate +15%
              <br />M. Skill Cooldown -1%
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />M. Atk. +900
              <br />P. Def. +900
              <br />M. Skill Critical Rate +15%
              <br />M. Skill Cooldown -1%
            </td>
            <td>
              <span className="title-text">Enchant level: 0</span>
              <br />M. Skill Critical Rate +15%
              <br />M. Skill Cooldwn -1%
              <br /><br /><span className="title-text">Enchant level: +1</span>
              <br />M. Atk. +400
              <br />P. Def. +300
              <br />M. Skill Critical Rate +15%
              <br />M. Skill Cooldown -3%
              <br />PvE damage +5%
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />M. Atk. +800
              <br />P. Def. +600
              <br />M. Skill Critical Rate +15%
              <br />M. Skill Cooldown -5%
              <br />PvE damage +10%
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />M. Atk. +1200
              <br />P. Def. +1000
              <br />M. Skill Critical Rate +15%
              <br />M. Skill Cooldown -8%
              <br />PvE damage +15%
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — The protective barrier effect of the Heroic rank Team Building skill has been improved.
        <br />- Shield of Unity HP has been increased to 30000 + 50% of the caster's HP.
        <br />- The barrier has been changed to disappear after protecting from 5 attacks (instead of 2).
        <br />— The effect of the Rare rank Blood Bond skill has been changed.
        <br />- Skill power has been significantly increased and it deals more damage to enemies with debuffs/anomalies applied.
        <br />- It no longer makes an additional attack if Blood Curse is applied 3 times.
        <br />- The effect of absorbing 80% of the damage as HP has been changed to an additional 1000 HP absorption with a certain chance when attacking.
        <br />- The cooldown is increased from 4 to 15 seconds.
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Effect before changes (based on Lv8 +3)</th>
            <th>Effect after changes (based on Lv8 +3)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Attacks with 156 power.
              <br />Inflicts the Blood Curse debuff.
              <br /><br />Makes an additional attack if Blood Curse is applied 3 times.
              <br />Absorbs 80% of the damage as HP.
              <br /><br />&lt;Cooldown: 4 seconds&gt;
              <br />&lt;Spirit Ore Consumption: 3&gt;
            </td>
            <td>
              Attacks with 296 power.
              <br />Deals more damage to enemies with debuffs/anomalies applied.
              <br /><br />When using skills, recovers 1000 HP with a 30% chance.
              <br /><br />&lt;Cooldown: 15 seconds&gt;
              <br />&lt;Spirit Ore Consumption: 5&gt;
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — The following skill has been removed:
        <br />- Chant of Life
      </div>
      {/*<div className="article-comments">
        <h2>Comments</h2>
      </div>*/}
    </div>
  );
};
