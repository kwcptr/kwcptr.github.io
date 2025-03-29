import ReactGA from "react-ga4";
import { PageTitle } from 'components/globals/pagetitle/PageTitle';  // Importa tu componente de título global

export const Article7 = () => {

  ReactGA.send("pageviewarticle7");

  return (
    <>
    {/* Agrega el componente PageTitle para establecer el título por defecto */}
    <PageTitle title="Class Update: Elemental Master"/>

    <div className="news-article">
      <header className="article-header">
        <h1 className="article-title">Class Update: Elemental Master</h1>
        <div className="article-metadata">
          {/* <span className="author">Bona</span> */}
          <span className="date">November 16, 2024</span>
        </div>
      </header>
        <div className="article-text4">
          New Skills
        </div>
        <div className="article-text">
          • The following skills have been added:
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
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/79/image_88279.png" alt="Elemental Bolt"/>
                <br/>
                <span className="skill-text">Elemental Bolt</span>
              </td>
              <td>
                -
              </td>
              <td>
                Attacks a single target with magic power.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/01/image_88201.png" alt="Elemental Strike"/>
                <br/>
                <span className="skill-text">Elemental Strike</span>
              </td>
              <td>
                ★
              </td>
              <td>
                Attacks a single target with magic power.
                <br/>Increases power when attacking within 400 range.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/07/image_88207.png" alt="Elemental Shackle"/>
                <br/>
                <span className="skill-text">Elemental Shackle</span>
              </td>
              <td>
                ★
              </td>
              <td>
                Attacks multiple targets with magic power.
                <br/>Applies a debuff decreasing target's P./ M. Atk., Atk. Spd. and Casting Spd.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/04/image_88204.png" alt="Elemental Vortex"/>
                <br/>
                <span className="skill-text">Elemental Vortex</span>
              </td>
              <td>
                ★★
              </td>
              <td>
                Attacks multiple targets with magic power.
                <br/>Applies a debuff decreasing target's M. Def.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/80/image_88280.png" alt="Elemental Root"/>
                <br/>
                <span className="skill-text">Elemental Root</span>
              </td>
              <td>
                ★★★
              </td>
              <td>
                Attacks multiple targets with magic power.
                <br/>Applies Hold.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/53/image_88253.png" alt="Elemental Care"/>
                <br/>
                <span className="skill-text">Elemental Care</span>
              </td>
              <td>
                -
              </td>
              <td>
                Guardian's acquired XP +10%
                <br/>(This skill can't be auto-used)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/51/image_88251.png" alt="Elemental Concentration"/>
                <br/>
                <span className="skill-text">Elemental Concentration</span>
              </td>
              <td>
                ★
              </td>
              <td>
                Increases M. Atk.
                <br/>Decreases M. Skill Cooldown
                <br/>Increases MP Recovery Bonus
                <br/>Decreases Received damage when casting is interrupted
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/54/image_88254.png" alt="Elemental Defense"/>
                <br/>
                <span className="skill-text">Elemental Defense</span>
              </td>
              <td>
                ★★★
              </td>
              <td>
                &lt;Light armor effect&gt;
                <br/>P./ M. Def. +2000
                <br/>Received damage -20%
                <br/>Debuff/ Anomaly Resistance +20%
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/43/image_88243.png" alt="Elemental Sync"/>
                <br/>
                <span className="skill-text">Elemental Sync</span>
              </td>
              <td>
                -
              </td>
              <td>
                &lt;Automatically acquired after 2nd class change&gt;
                <br/>Recovers 30 MP when killing an enemy.
                <br/>Speed +10
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/44/image_88244.png" alt="Heart Sync"/>
                <br/>
                <span className="skill-text">Heart Sync</span>
              </td>
              <td>
                -
              </td>
              <td>
                &lt;Automatically acquired after 3rd class change&gt;
                <br/>Max HP +1000
                <br/>P. Def. +500
                <br/>M. Def. +500
                <br/>Speed +20
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/41/image_88241.png" alt="Elemental Mastery"/>
                <br/>
                <span className="skill-text">Elemental Mastery</span>
              </td>
              <td>
                ★
              </td>
              <td>
                Increases Suppression/Hold Atk. Rate
                <br/><br/>&lt;Light armor effect&gt;
                <br/>Increases M. Atk. / Max HP / Max MP
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/42/image_88242.png" alt="Elemental Expert"/>
                <br/>
                <span className="skill-text">Elemental Expert</span>
              </td>
              <td>
                ★★★
              </td>
              <td>
                &lt;Base effect&gt;
                <br/>Increases Max M. Skill Critical Rate.
                <br/>M. Skill Power +15%
                <br/>Max MP +20%
                <br/><br/>&lt;Special effect&gt;
                <br/>Enhances the effect of the Elemental Strike skill.
                <br/>- Increases skill power / number of attacks
                <br/>- Decreases casting time
                <br/>Enhances the buff effect of the Elemental Concentration skill.
                <br/>- Increases M. Atk. / MP Recovery bonus
                <br/>- Increases M. Skill Critical Rate
                <br/>- Decreases Received Damage / M. Skill Cooldown
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/49/image_88249.png" alt="Elemental Resonance"/>
                <br/>
                <span className="skill-text">Elemental Resonance</span>
              </td>
              <td>
                -
              </td>
              <td>
                &lt;Light armor effect&gt;
                <br/>PvE M. Skill Damage +10%
                <br/>Paralysis Resistance +20%
                <br/>Knockback Resistance +10%
                <br/>Melee Weapon Resistance +5%
                <br/>P. Def. +610
                <br/>M. Def. +520
                <br/>MEN +1
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/50/image_88250.png" alt="Elemental Insight"/>
                <br/>
                <span className="skill-text">Elemental Insight</span>
              </td>
              <td>
                -
              </td>
              <td>
                &lt;Light armor effect&gt;
                <br/>Casting Spd. +200
                <br/>M. Skill Cooldown -3%
                <br/>Max HP +700
                <br/>Max MP +700
                <br/>WIT +1
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/45/image_88245.png" alt="Unicorn Training"/>
                <br/>
                <span className="skill-text">Unicorn Training</span>
              </td>
              <td>
                ★
              </td>
              <td>
                &lt;Elemental Master effect&gt;
                <br/>PvE M. Skill Damage +8%
                <br/><br/>&lt;Elemental Unicorn effect&gt;
                <br/>Summoner's Combat stats transfer rate +2%
                <br/>WIT +1
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/46/image_88246.png" alt="Unicorn Potential"/>
                <br/>
                <span className="skill-text">Unicorn Potential</span>
              </td>
              <td>
                ★★
              </td>
              <td>
                &lt;Elemental Master effect&gt;
                <br/>M. Skill Critical Damage +10%
                <br/>PvE M. Skill Damage +10%
                <br/>All received Critical Damage -10%
                <br/><br/>&lt;Elemental Unicorn effect&gt;
                <br/>Summoner's Combat stats transfer rate +3%
                <br/>WIT +1
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/47/image_88247.png" alt="Unicorn Communion"/>
                <br/>
                <span className="skill-text">Unicorn Communion</span>
              </td>
              <td>
                ★★★
              </td>
              <td>
                &lt;Elemental Master effect&gt;
                <br/>M. Atk. +15%
                <br/>PvE M. Skill Damage +12%
                <br/><br/>&lt;Elemental Unicorn effect&gt;
                <br/>Combat stats transfer according to combat power:
                <br/>- Combat Power 0~499: Combat stats transfer rate +10%
                <br/>- Combat Power 500~999: Combat stats transfer rate +12%
                <br/>- Combat Power 1000~1499: Combat stats transfer rate +14%
                <br/>- Combat Power 1500~1999: Combat stats transfer rate +17%
                <br/>- Combat power 2000 or higher: Combat stats transfer rate +20%
                <br/>WIT +1
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/91/image_88291.png" alt="Summon Elemental Unicorn"/>
                <br/>
                <span className="skill-text">Summon Elemental Unicorn</span>
              </td>
              <td>
                -
              </td>
              <td>
                Summons an elemental unicorn.
                <br/>Acquired after 2nd class change.
                <br/>When changing to the 3rd class, it changes to a 2nd stage form.
                <br/>After acquiring a 4 Stars skill, it changes into a 3rd stage form.
                <br/>WIT +1
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/10/image_88210.png" alt="Summon Elemental Sphere"/>
                <br/>
                <span className="skill-text">Summon Elemental Sphere</span>
              </td>
              <td>
                ★★
              </td>
              <td>
                Summons a magic sphere that continuously restores HP/MP.
                <br/>When summoned, restores the summoner's HP/MP by a certain amount.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/81/image_88281.png" alt="Elemental Shift"/>
                <br/>
                <span className="skill-text">Elemental Shift</span>
              </td>
              <td>
                ★★
              </td>
              <td>
                Move to the elemental sphere you summoned.
                <br/>You must acquire the Summon Elemental Sphere skill.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/82/image_88282.png" alt="Friend Escort"/>
                <br/>
                <span className="skill-text">Friend Escort</span>
              </td>
              <td>
                -
              </td>
              <td>
                Summons 1 party member to your location.
                <br/>Not available on world servers
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/48/image_88248.png" alt="Fantastic Rainbow"/>
                <br/>
                <span className="skill-text">Fantastic Rainbow</span>
              </td>
              <td>
                ★★★★
              </td>
              <td>
                &lt;Base effect&gt;
                <br/>M. Atk. +1500
                <br/>M. Skill Power +5%
                <br/>Over the Rainbow skill becomes available
                <br/><br/>&lt;Skill upgrade&gt;
                <br/>Upgrades Elemental Vortex effect
                <br/>- Increases skill power / number of targets
                <br/>- Decreases cooldown
                <br/>- Increases Elemental Wound (Debuff) effect
                <br/><br/>Upgrades Elemental Shackle effect
                <br/>- Increases skill power / number of targets / number of attacks
                <br/>- Increases Elemental Break (Suppression Anomaly) effect
                <br/><br/>Upgrades Summon Elemental Sphere effect
                <br/>- Increases HP/MP recovery amount
                <br/>- Increases duration
                <br/>- A Debuff / Anomaly removal effect is applied with a certain chance.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/48/image_88248.png" alt="Fantastic Rainbow: Master"/>
                <br/>
                <span className="skill-text">Fantastic Rainbow: Master</span>
              </td>
              <td>
                ★★★★
                <br/>Master
              </td>
              <td>
              &lt;Base effect&gt;
                <br/>M. Atk. +1500
                <br/>M. Skill Power +5%
                <br/>Over the Rainbow skill becomes available
                <br/><br/>&lt;Skill upgrade&gt;
                <br/>Upgrades Elemental Vortex effect
                <br/>- Increases skill power / number of targets
                <br/>- Decreases cooldown
                <br/>- Increases Elemental Wound (Debuff) effect
                <br/><br/>Upgrades Elemental Shackle effect
                <br/>- Increases skill power / number of targets / number of attacks
                <br/>- Increases Elemental Break (Suppression Anomaly) effect
                <br/><br/>Upgrades Summon Elemental Sphere effect
                <br/>- Increases HP/MP recovery amount
                <br/>- Increases duration
                <br/>- A Debuff / Anomaly removal effect is applied with a certain chance.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/84/image_88284.png" alt="Over the Rainbow"/>
                <br/>
                <span className="skill-text">Over the Rainbow</span>
              </td>
              <td>
                -
              </td>
              <td>
                &lt;Base effect&gt;
                <br/>Requires acquiring the Fantastic Rainbow skill
                <br/>Requires to summon Elemental Unicorn
                <br/><br/>&lt;Self effect&gt;
                <br/>Received damage from Magic Counterattack Decrease +30%
                <br/><br/>&lt;Ally effect&gt;
                <br/>Skill Power +3%
                <br/>Debuff/ Anomaly Resistance +10%
                <br/>Debuff/ Anomaly Duration -10%
                <br/>Debuffs/ Anomalies are removed immediately
                <br/><br/>&lt;Enemy effect&gt;
                <br/>Attacks enemies around you 3 times with 350 power.
                <br/>Attack power increases by 10% to enemies affected by Hold.
                <br/>Applies Hold with a certain chance.
                <br/>Debuff/ Anomaly Resistance -10%
                <br/>Debuff/ Anomaly Duration +10%
                <br/><br/>Elemental Unicorn effect&gt;
                <br/>Attacks surrounding enemies once and applies Hold with a certain chance.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/85/image_88285.png" alt="Over the Rainbow: Master"/>
                <br/>
                <span className="skill-text">Over the Rainbow: Master</span>
              </td>
              <td>
                -
              </td>
              <td>
                &lt;Base effect&gt;
                <br/>Requires acquiring the Fantastic Rainbow skill
                <br/>Requires to summon Elemental Unicorn
                <br/><br/>&lt;Self effect&gt;
                <br/>Received damage from Magic Counterattack Decrease +50%
                <br/><br/>&lt;Ally effect&gt;
                <br/>Skill Power +7%
                <br/>Debuff/ Anomaly Resistance +20%
                <br/>Debuff/ Anomaly Duration -20%
                <br/>Debuffs/ Anomalies are removed immediately
                <br/><br/>&lt;Enemy effect&gt;
                <br/>Attacks enemies around you 3 times with 470 power.
                <br/>Attack power increases by 10% to enemies affected by Hold.
                <br/>Applies Hold with a certain chance.
                <br/>Debuff/ Anomaly Resistance -20%
                <br/>Debuff/ Anomaly Duration +20%
                <br/><br/>Elemental Unicorn effect&gt;
                <br/>Attacks surrounding enemies once and applies Hold with a certain chance.
              </td>
            </tr>
            </tbody>
        </table>
        <div className="article-text4">
          Skill Enchant Changes
        </div>
        <div className="article-text">
          • Enchant effects of the Eva's Summoner skill remain unchanged.
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
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/41/image_88241.png" alt="Elemental Mastery"/>
                <br/>
                <span className="skill-text">Elemental Mastery</span>
              </td>
              <td>
                ★
              </td>
              <td>
                &lt;Base effect&gt;
                <br/>Increases Suppression/ Hold Atk. Rate
                <br/><br/>&lt;Light Armor effect&gt;
                <br/>Increases M. Atk. / M. Skill Critical Damage / Max HP / Max MP
                <br/><br/>+1:
                <br/>Increases Suppression/ Hold Atk. Rate
                <br/>Increases M. Atk. / M. Skill Critical Damage / Max HP / Max MP when equipped with light armor
                <br/><br/>2:
                <br/>Increases Suppression/ Hold Atk. Rate
                <br/>Increases M. Atk. / M. Skill Critical Damage / Max HP / Max MP when equipped with light armor
                <br/><br/>+3:
                <br/>Increases Suppression/ Hold Atk. Rate
                <br/>Increases M. Atk. / M. Skill Critical Damage / Max HP / Max MP when equipped with light armor
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/12/image_47912.png" alt="Summon Elemental Cubic"/>
                <br/>
                <span className="skill-text">Summon Elemental Cubic</span>
              </td>
              <td>
                ★★★
              </td>
              <td>
                Increases M. Atk.
                <br/>Increases Bow/ Firearms Resistance (from Lv2)
                <br/>Decreases M. Skill MP Consumption
                <br/><br/>Delivers an additional attack when using the following skills:
                <br/>- Elemental Shackle
                <br/>- Elemental Vortex
                <br/>- Elemental Root
                <br/><br/>+1:
                <br/>Increases M. Atk. / Resistance to All Weapons / Received damage from Magic Counterattack Decrease
                <br/><br/>2:
                <br/>Increases M. Atk. / Resistance to All Weapons / Received damage from Magic Counterattack Decrease
                <br/><br/>+3:
                <br/>Increases M. Atk. / Resistance to All Weapons / Received damage from Magic Counterattack Decrease
              </td>
            </tr>
            </tbody>
        </table>
        <div className="article-text4">
          Deleted Skills
        </div>
        <div className="article-text">
          • The following skills are no longer available:
        </div>
        <table className="article-table">
          <thead>
            <tr>
              <th>Skill name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Power Supremacy
              </td>
            </tr>
            <tr>
              <td>
                Wind Shackle
              </td>
            </tr>
            <tr>
              <td>
                Warrior Bane
              </td>
            </tr>
            <tr>
              <td>
                Mage Bane
              </td>
            </tr>
            <tr>
              <td>
                Weakness
              </td>
            </tr>
            <tr>
              <td>
                Summon Boxer the Unicorn
              </td>
            </tr>
            <tr>
              <td>
                Summon Mirage the Unicorn
              </td>
            </tr>
            <tr>
              <td>
                Summon Merrow the Unicorn
              </td>
            </tr>
            <tr>
              <td>
                Summon Seraphim the Unicorn
              </td>
            </tr>
            <tr>
              <td>
                Summon Magnus the Unicorn
              </td>
            </tr>
            <tr>
              <td>
                Servitor Share
              </td>
            </tr>
            <tr>
              <td>
                Servitor Ultimate Defense
              </td>
            </tr>
            <tr>
              <td>
                Wizard Servitor
              </td>
            </tr>
            <tr>
              <td>
                Servitor Heal
              </td>
            </tr>
            <tr>
              <td>
                Swift Servitor Heal
              </td>
            </tr>
            <tr>
              <td>
                Servitor Recharge
              </td>
            </tr>
            <tr>
              <td>
                Servitor Magic Boost
              </td>
            </tr>
            <tr>
              <td>
                Servitor Cure
              </td>
            </tr>
            <tr>
              <td>
                Servitor Blessing
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
