import ReactGA from "react-ga4";
import { PageTitle } from 'components/globals/pagetitle/PageTitle';  // Importa tu componente de título global

export const Article9 = () => {

  ReactGA.send("pageviewarticle9");

  return (
    <>
    {/* Agrega el componente PageTitle para establecer el título por defecto */}
    <PageTitle title="Class Update: Elders"/>

    <div className="news-article">
      <header className="article-header">
        <h1 className="article-title">Class Update: Elders</h1>
        <div className="article-metadata">
          {/* <span className="author">Bona</span> */}
          <span className="date">March 11, 2025</span>
        </div>
      </header>
      <div className="table-of-contents">
        <h2>Contents</h2>
        <ul>
          <li><a href="#evas-saint">Eva's Saint</a></li>
          <li><a href="#shillien-saint">Shillien Saint</a></li>
          <li><a href="#cardinal">Cardinal</a></li>
        </ul>
      </div>
      <div id="evas-saint" className="article-text5">
        Eva's Saint
      </div>
      <div className="article-text">
        — A new skill has been added:
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
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/46/image_88346.png" alt="Eva's Grail" />
              <br />
              <span className="skill-text">Eva's Grail</span>
            </td>
            <td>
              Rare
            </td>
            <td>
              &lt;Duration: 10 minutes&gt;
              <br />&lt;Spirit Ore Consumption: 40&gt;
              <br />M. Atk. +10%
              <br />M. Skill Power +10%
              <br />PvE damage +3%
              <br />Max HP +500
              <br />Speed +5
              <br /><br />When using Divine Beam/Sea Beam, makes an additional attack with 150 power.
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — The following skills have been improved/changed:
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
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/48/image_47248.png" alt="Eva's Nocturne" />
              <br />
              <span className="skill-text">Eva's Nocturne</span>
            </td>
            <td>
              <span className="title-text">Enchant level: 0</span>
              <br />Removes debuffs and anomalies
              <br />Debuff/Anomaly Resistance +20%
              <br />Duration: 5 seconds
              <br /><br /><span className="title-text">Enchant level: +1</span>
              <br />Removes debuffs and anomalies
              <br />Debuff/Anomaly Resistance +20%
              <br />Duration: 6 seconds
              <br /><br />Destroys shadows around you.
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />Removes debuffs and anomalies
              <br />Debuff/Anomaly Resistance +20%
              <br />Duration: 7 seconds
              <br /><br />Destroys shadows around you.
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />Removes debuffs and anomalies
              <br />Debuff/Anomaly Resistance +20%
              <br />Duration: 8 seconds
              <br /><br />Destroys shadows around you.
            </td>
            <td>
              <span className="title-text">Enchant level: 0</span>
              <br />&lt;Effect for enemies&gt;
              <br />Attacks with 200 power.
              <br /><br />&lt;Effect for allies&gt;
              <br />Removes debuffs and anomalies
              <br />Debuff/Anomaly Resistance +20%
              <br />Duration: 4 seconds
              <br /><br /><span className="title-text">Enchant level: +1</span>
              <br />&lt;Effect for enemies&gt;
              <br />Attacks with 230 power.
              <br /><br />&lt;Effect for allies&gt;
              <br />Recovers 10% of Max HP
              <br />Removes debuffs and anomalies
              <br />Debuff/Anomaly Resistance +20%
              <br />Duration: 5 seconds
              <br /><br />Destroys shadows around the target.
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />&lt;Effect for enemies&gt;
              <br />Attacks twice with 265 power.
              <br /><br />&lt;Effect for allies&gt;
              <br />Recovers 20% of Max HP
              <br />Removes debuffs and anomalies
              <br />Debuff/Anomaly Resistance +20%
              <br />Duration: 5 seconds
              <br /><br />Destroys shadows around the target.
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />&lt;Effect for enemies&gt;
              <br />Attacks twice with 310 power.
              <br /><br />&lt;Effect for allies&gt;
              <br />Recovers 30% of Max HP
              <br />Removes debuffs and anomalies
              <br />Debuff/Anomaly Resistance +20%
              <br />Duration: 6 seconds
              <br /><br />Destroys shadows around the target.
              <br /><br />Cooldown is decreased by 30 seconds on all enchant levels.
            </td>
          </tr>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/44/image_45444.png" alt="Sea Beam" />
              <br />
              <span className="skill-text">Sea Beam</span>
            </td>
            <td>
              -
            </td>
            <td>
              Power increased by 19 per skill level.
            </td>
          </tr>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/55/image_1355.png" alt="Prophecy of Water" />
              <br />
              <span className="skill-text">Prophecy of Water</span>
            </td>
            <td>
              <span className="title-text">Lv1:</span>
              <br />&lt;Spirit Ore Consumption: 3&gt;
              <br />Max MP +15%
              <br />MP Recovery Rate +10%
              <br />P./M. Def. +10%
              <br />Atk./Casting Spd. +10%
              <br />Skill MP Consumption -10%
              <br />PvE damage +15%
              <br />Debuff/Anomaly Resistance +10%
              <br /><br /><span className="title-text">Lv2:</span>
              <br />&lt;Spirit Ore Consumption: 4&gt;
              <br />Max MP +20%
              <br />MP Recovery Rate +12%
              <br />P./M. Def. +15%
              <br />Atk./Casting Spd. +15%
              <br />Skill MP Consumption -20%
              <br />PvE damage +20%
              <br />Debuff/Anomaly Resistance +20%
            </td>
            <td>
              <span className="title-text">Lv1:</span>
              <br />&lt;Spirit Ore Consumption: 30&gt;
              <br />M. Atk. +5%
              <br />Max MP +15%
              <br />MP Recovery Rate +10%
              <br />P./M. Def. +10%
              <br />Casting Spd. +10%
              <br />Skill MP Consumption -10%
              <br />Speed +2
              <br />PvE damage +20%
              <br />Debuff/Anomaly Resistance +10%
              <br /><br /><span className="title-text">Lv2:</span>
              <br />&lt;Spirit Ore Consumption: 40&gt;
              <br />M. Atk. +10%
              <br />Max MP +20%
              <br />MP Recovery Rate +20%
              <br />P./M. Def. +15%
              <br />Casting Spd. +15%
              <br />Skill MP Consumption -20%
              <br />Speed +5
              <br />PvE damage +25%
              <br />Debuff/Anomaly Resistance +20%
            </td>
          </tr>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/30/image_45430.png" alt="Sea Oath" />
              <br />
              <span className="skill-text">Sea Oath</span>
            </td>
            <td>
              <span className="title-text">Enchant level: 0</span>
              <br />M. Atk. +50
              <br />Speed +1
              <br /><br /><span className="title-text">Enchant level: +1</span>
              <br />M. Atk. +100
              <br />Speed +2
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />M. Atk. +250
              <br />Speed +4
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />M. Atk. +500
              <br />Speed +6
            </td>
            <td>
              <span className="title-text">Enchant level: 0</span>
              <br />M. Atk. +500
              <br />Speed +1
              <br />PvE damage +1%
              <br /><br /><span className="title-text">Enchant level: +1</span>
              <br />M. Atk. +800
              <br />Speed +2
              <br />PvE damage +3%
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />M. Atk. +1200
              <br />Speed +4
              <br />PvE damage +6%
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />M. Atk. +2000
              <br />Speed +6
              <br />PvE damage +10%
            </td>
          </tr>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/34/image_45434.png" alt="Sea Burst" />
              <br />
              <span className="skill-text">Sea Burst</span>
            </td>
            <td>
              Passive skill.
              <br /><br />M. Atk. +100
              <br />When using Divine Beam/Sea Beam, with a certain chance makes an additional attack to up to 3 targets.
            </td>
            <td>
              Active buff skill. Skill name is changed to Priest Wave: Sea.
              <br /><br />&lt;Duration: 20 minutes&gt;
              <br />&lt;Spirit Ore Consumption: 2&gt;
              <br />M. Atk. +300
              <br />When using Divine Beam/Sea Beam, with a certain chance increases the number of targets by 2.
            </td>
          </tr>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/94/image_45294.png" alt="Mighty Children of Eva" />
              <br />
              <span className="skill-text">Mighty Children of Eva</span>
            </td>
            <td>
              <span className="title-text">Enchant level: 0</span>
              <br />HP Recovery Rate +5%
              <br />M. Atk. +150
              <br />M. Skill Critical Rate +5%
              <br />M. Skill Critical Damage +40
              <br /><br /><span className="title-text">Enchant level: +1</span>
              <br />HP Recovery Rate +5%
              <br />M. Atk. +350
              <br />M. Skill Critical Rate +12%
              <br />M. Skill Critical Damage +45
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />HP Recovery Rate +5%
              <br />M. Atk. +550
              <br />M. Skill Critical Rate +19%
              <br />M. Skill Critical Damage +50
              <br />Knockback Atk. Rate +10%
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />HP Recovery Rate +5%
              <br />M. Atk. +750
              <br />M. Skill Critical Rate +26%
              <br />M. Skill Critical Damage +55
              <br />Knockback Atk. Rate +20%
            </td>
            <td>
              <span className="title-text">Enchant level: 0</span>
              <br />HP Recovery Rate +5%
              <br />M. Atk. +450
              <br />M. Skill Critical Rate +5%
              <br />M. Skill Critical Damage +40
              <br />PvE damage +5%
              <br /><br /><span className="title-text">Enchant level: +1</span>
              <br />HP Recovery Rate +5%
              <br />M. Atk. +650
              <br />M. Skill Critical Rate +12%
              <br />M. Skill Critical Damage +45
              <br />PvE damage +7%
              <br />Spiritshot damage +2%
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />HP Recovery Rate +5%
              <br />M. Atk. +850
              <br />M. Skill Critical Rate +19%
              <br />M. Skill Critical Damage +50
              <br />Knockback Atk. Rate +10%
              <br />PvE damage +10%
              <br />Spiritshot damage +5%
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />HP Recovery Rate +5%
              <br />M. Atk. +1050
              <br />M. Skill Critical Rate +26%
              <br />M. Skill Critical Damage +55
              <br />Knockback Atk. Rate +20%
              <br />PvE damage +15%
              <br />Spiritshot damage +10%
            </td>
          </tr>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/12/image_1012.png" alt="Cure" />
              <br />
              <span className="skill-text">Cure</span>
            </td>
            <td>
              <span className="title-text">Lv4:</span>
              <br />Recovers HP with 400 power.
              <br />Casting Time: 4 seconds
            </td>
            <td>
              <span className="title-text">Lv4:</span>
              <br />Recovers HP with 700 power.
              <br />Casting Time: 3 seconds
            </td>
          </tr>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/57/image_1257.png" alt="Decrease Weight" />
              <br />
              <span className="skill-text">Decrease Weight</span>
            </td>
            <td>
              Active buff skill.
            </td>
            <td>
              Passive skill.
              <br />This change also applies to the Hierophant class.
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text5">
        Shillien Saint
      </div>
      <div id="shillien-saint" className="article-text">
        — A new skill has been added:
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
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/43/image_88343.png" alt="Shillien Grail" />
              <br />
              <span className="skill-text">Shillien Grail</span>
            </td>
            <td>
              Rare
            </td>
            <td>
              &lt;Duration: 10 minutes&gt;
              <br />&lt;Spirit Ore Consumption: 40&gt;
              <br />M. Atk. +5%
              <br />M. Skill Power +5%
              <br />PvE damage +3%
              <br />P./M. Def. +500
              <br /><br />When using Divine Beam/Dark Beam, makes an additional attack with 150 power.
            </td>
          </tr>
        </tbody>
      </table>
      <div className="article-text">
        — The following skills have been improved/changed:
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
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/55/image_47255.png" alt="Nemesis" />
              <br />
              <span className="skill-text">Nemesis</span>
            </td>
            <td>
              <span className="title-text">Enchant level: 0</span>
              <br />Received Healing -75%
              <br /><br /><span className="title-text">Enchant level: +1</span>
              <br />Received Healing -75%
              <br />&lt;PvP effect&gt;
              <br />P. Atk./Def. -300
              <br />&lt;PvE effect&gt;
              <br />P. Atk. -300
              <br />P. Def. -20%
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />Received Healing -75%
              <br />&lt;PvP effect&gt;
              <br />P. Atk./Def. -600
              <br />&lt;PvE effect&gt;
              <br />P. Atk. -600
              <br />P. Def. -25%
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />Attacks once
              <br />Received Healing -75%
              <br />&lt;PvP effect&gt;
              <br />P. Atk./Def. -900
              <br />&lt;PvE effect&gt;
              <br />P. Atk. -900
              <br />P. Def. -30%
              <br /><br />(Description based on Lv3.)
            </td>
            <td>
              <span className="title-text">Enchant level: 0</span>
              <br />Attacks with 195 power.
              <br />Received Healing -75%
              <br /><br /><span className="title-text">Enchant level: +1</span>
              <br />Attacks with 225 power.
              <br />Received Healing -80%
              <br />M. Def. -15%
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />Attacks twice with 225 power.
              <br />Received Healing -85%
              <br />M. Def. -20%
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />Attacks twice with 285 power.
              <br />Received Healing -90%
              <br />M. Def. -25%
              <br /><br />(Description based on Lv3.)
            </td>
          </tr>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/45/image_45445.png" alt="Dark Beam" />
              <br />
              <span className="skill-text">Dark Beam</span>
            </td>
            <td>
              -
            </td>
            <td>
              Power increased by 19 per skill level.
            </td>
          </tr>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/57/image_1357.png" alt="Prophecy of Wind" />
              <br />
              <span className="skill-text">Prophecy of Wind</span>
            </td>
            <td>
              <span className="title-text">Lv1:</span>
              <br />&lt;Spirit Ore Consumption: 3&gt;
              <br />P./M. Evasion +4
              <br />M. Skill Critical Rate +15%
              <br />M. Skill Critical Damage +25%
              <br />Speed +10%
              <br />PvE damage +15%
              <br />Received Skill Critical Rate -4%
              <br />Received Skill Critical Damage -4%
              <br />Debuff/Anomaly Resistance +10%
              <br /><br /><span className="title-text">Lv2:</span>
              <br />&lt;Spirit Ore Consumption: 4&gt;
              <br />P./M. Evasion +4
              <br />M. Skill Critical Rate +20%
              <br />M. Skill Critical Damage +30%
              <br />Speed +15%
              <br />PvE damage +20%
              <br />Received Skill Critical Rate -8%
              <br />Received Skill Critical Damage -8%
              <br />Debuff/Anomaly Resistance +20%
            </td>
            <td>
              <span className="title-text">Lv1:</span>
              <br />&lt;Spirit Ore Consumption: 30&gt;
              <br />M. Skill Critical Rate +15%
              <br />M. Skill Critical Damage +25%
              <br />Speed +10%
              <br />PvE damage +20%
              <br />Received Skill Critical Rate -6%
              <br />Received Skill Critical Damage -6%
              <br />Debuff/Anomaly Resistance +10%
              <br /><br /><span className="title-text">Lv2:</span>
              <br />&lt;Spirit Ore Consumption: 40&gt;
              <br />M. Skill Critical Rate +20%
              <br />M. Skill Critical Damage +30%
              <br />Speed +15%
              <br />PvE damage +25%
              <br />Received Skill Critical Rate -9%
              <br />Received Skill Critical Damage -9%
              <br />Debuff/Anomaly Resistance +20%
            </td>
          </tr>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/31/image_45431.png" alt="Dark Oath" />
              <br />
              <span className="skill-text">Dark Oath</span>
            </td>
            <td>
              <span className="title-text">Enchant level: 0</span>
              <br />M. Atk. +50
              <br />Max HP +500
              <br /><br /><span className="title-text">Enchant level: +1</span>
              <br />M. Atk. +100
              <br />Max HP +1000
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />M. Atk. +250
              <br />Max HP +2000
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />M. Atk. +500
              <br />Max HP +3000
            </td>
            <td>
              <span className="title-text">Enchant level: 0</span>
              <br />M. Atk. +500
              <br />Max HP +500
              <br />PvE damage +1%
              <br /><br /><span className="title-text">Enchant level: +1</span>
              <br />M. Atk. +800
              <br />Max HP +1000
              <br />PvE damage +3%
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />M. Atk. +1200
              <br />Max HP +2000
              <br />PvE damage +6%
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />M. Atk. +2000
              <br />Max HP +3000
              <br />PvE damage +10%
            </td>
          </tr>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/57/image_47257.png" alt="Shillien's Power" />
              <br />
              <span className="skill-text">Shillien's Power</span>
            </td>
            <td>
              &lt;Spirit Ore Consumption: 6&gt;
              <br />M. Atk. +18%
              <br /><br />&lt;Trigger effect&gt;
              <br />For 10 seconds when using magic skills:
              <br />M. Atk. +5%
              <br />Casting Spd. +10%
            </td>
            <td>
              &lt;Spirit Ore Consumption: 10&gt;
              <br />M. Atk. +20%
              <br />Casting Spd. +10%
              <br />P./M. Def. +2%
              <br /><br />Trigger effect removed.
            </td>
          </tr>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/36/image_45436.png" alt="Dark Wave" />
              <br />
              <span className="skill-text">Dark Wave</span>
            </td>
            <td>
              Passive skill.
              <br /><br />M. Atk. +100
              <br />When using Divine Beam/Dark Beam, with a certain chance makes an additional attack to up to 3 targets.
            </td>
            <td>
              Active buff skill. Skill name is changed to Priest Wave: Dark.
              <br /><br />&lt;Duration: 20 minutes&gt;
              <br />&lt;Spirit Ore Consumption: 2&gt;
              <br />M. Atk. +300
              <br />When using Divine Beam/Dark Beam, with a certain chance increases the number of targets by 2.
            </td>
          </tr>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/90/image_45290.png" alt="Mighty Children of Shillien" />
              <br />
              <span className="skill-text">Mighty Children of Shillien</span>
            </td>
            <td>
              <span className="title-text">Enchant level: 0</span>
              <br />MP Recovery Rate +5%
              <br />M. Atk. +170
              <br />M. Skill Critical Rate +10%
              <br /><br /><span className="title-text">Enchant level: +1</span>
              <br />MP Recovery Rate +5%
              <br />M. Atk. +420
              <br />M. Skill Critical Rate +11%
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />MP Recovery Rate +5%
              <br />M. Atk. +670
              <br />M. Skill Critical Rate +12%
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />MP Recovery Rate +5%
              <br />M. Atk. +920
              <br />M. Skill Critical Rate +13%
            </td>
            <td>
              <span className="title-text">Enchant level: 0</span>
              <br />MP Recovery Rate +5%
              <br />M. Atk. +470
              <br />M. Skill Critical Rate +10%
              <br />PvE damage +5%
              <br /><br /><span className="title-text">Enchant level: +1</span>
              <br />MP Recovery Rate +5%
              <br />M. Atk. +720
              <br />M. Skill Power +1%
              <br />M. Skill Critical Rate +11%
              <br />PvE damage +7%
              <br />Spiritshot damage +2%
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />MP Recovery Rate +5%
              <br />M. Atk. +970
              <br />M. Skill Power +3%
              <br />M. Skill Critical Rate +12%
              <br />PvE damage +10%
              <br />Spiritshot damage +5%
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />MP Recovery Rate +5%
              <br />M. Atk. +1220
              <br />M. Skill Power +5%
              <br />M. Skill Critical Rate +13%
              <br />PvE damage +15%
              <br />Spiritshot damage +10%
            </td>
          </tr>
        </tbody>
      </table>
      <div id="cardinal" className="article-text5">
        Cardinal
      </div>
      <div className="article-text">
        — The following skills have been improved/changed:
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
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/04/image_88304.png" alt="Darkness Fall" />
              <br />
              <span className="skill-text">Darkness Fall</span>
            </td>
            <td>
              <span className="title-text">Enchant level: +1</span>
              <br />Attacks with 235 power.
              <br />M. Def. -10%
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />&lt;PvE effect&gt;
              <br />Attacks with 285 power.
              <br />M. Def. -15%
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />&lt;PvE effect&gt;
              <br />Attacks with 330 power.
              <br />M. Def. -20%
            </td>
            <td>
              <span className="title-text">Enchant level: +1</span>
              <br />Attacks with 250 power.
              <br />M. Def. -10%
              <br /><br /><span className="title-text">Enchant level: +2</span>
              <br />&lt;PvE effect&gt;
              <br />Attacks twice with 285 power.
              <br />M. Def. -15%
              <br /><br /><span className="title-text">Enchant level: +3</span>
              <br />&lt;PvE effect&gt;
              <br />Attacks twice with 350 power.
              <br />M. Def. -20%
            </td>
          </tr>
          <tr>
            <td className="skill-container">
              <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/32/image_45432.png" alt="Shining Wave" />
              <br />
              <span className="skill-text">Shining Wave</span>
            </td>
            <td>
              -
            </td>
            <td>
              Skill name is changed to Priest Wave: Shining.
            </td>
          </tr>
        </tbody>
      </table>
      {/*<div className="article-comments">
        <h2>Comments</h2>
      </div>*/}
    </div>
    </>
  );
};
