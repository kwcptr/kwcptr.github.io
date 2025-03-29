import ReactGA from "react-ga4";
import { PageTitle } from 'components/globals/pagetitle/PageTitle';  // Importa tu componente de título global

export const Article2 = () => {

  ReactGA.send("pageviewarticle2");

  return (
    <>
    {/* Agrega el componente PageTitle para establecer el título por defecto */}
    <PageTitle title="Class Update: Duelist"/>

    <div className="news-article">
      <header className="article-header">
        <h1 className="article-title">Class Update: Duelist</h1>
        <div className="article-metadata">
          {/* <span className="author">Bona</span> */}
          <span className="date">July 27, 2023</span>
        </div>
      </header>
      <div className="article-content">
        <div className="article-subtitle">New skills
        </div>
        <div className="article-text">
          The following skills have been added:
        </div>
        <table className="article-table">
          <thead>
            <tr>
              <th>Skill</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/27/image_47927.png" alt="Challenger: Master"/>
                <br/>
                <span className="skill-text">★★★★</span>
                <br/>
                <span className="skill-text">Challenger: Master</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                &lt;Skill with fixed cast time&gt;
                <br/><br/>Imbues your sword with will to victory granting great power.
                <br/><br/>P. Atk. +20%
                <br/>P. Skill Power +15%
                <br/>P. Skill Critical Rate +20%
                <br/>P. Skill Critical Damage +20%
                <br/>P. Skill Damage +10%
                <br/>Shock Atk. Rate +10%
                <br/>Imprisonment Atk. Rate +10%
                <br/>Max HP +10%
                <br/>Max HP +2500
                <br/>Atk. Spd. +20%
                <br/>Speed +10
                <br/><br/>Temporarily enhances the following skills:
                <br/><span className="skill-text-darkgreen">Blade Wave → Blade Wave - Challenger</span>
                <br/><span className="skill-text-darkgreen">Triple Slash → Triple Slash - Master</span>
                <br/><span className="skill-text-darkgreen">Blade Cutter → Blade Cutter - Master</span>
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/54/image_47654.png" alt="Blade Assault" />
                <br/>
                <span className="skill-text">Blade Assault</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                <span className="skill-text-red">Note!</span>
                <br/>Available only while transformed into <span className="skill-text-lightgreen">Challenger: Master</span>.
                <br/><br/>Attacks the target with a blade imbued with the power of destruction.
                <br/>If the target is too far, charges to them and attacks.
                <br/><br/>Attacks the target twice. Power 12,000.
                <br/>Ignores 20% of the target's defense.
                <br/>Critical.
                <br/><br/>For 10 sec., applies the following debuff to the target:
                <br/>Imprisonment Resistance -20%
                <br/><br/>With a certain chance, applies the following debuff to surrounding enemies for 5 sec.:
                <br/>Received AoE Skill Damage +10%
                <br/>Fixed number of attacks: 1
                <br/><br/>Killing the target with Blade Assault reduces the skill's cooldown.
                <br/>When the target is killed, the skill can be used consecutively for 3 sec.
                <br/>(Max 2 times)
                <br/><br/>(The skill is automatically learned upon changing to 3rd class.)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/31/image_47931.png" alt="Slashing Blades - Master" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Slashing Blades - Master</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Attacks enemies twice with 4285 power.
                <br/>Ignores Shield Defense.
                <br/>Ignores 15% of the target's defense.
                <br/>Critical.
                <br/><br/>PvP: Attacks up to 5 targets.
                <br/>PvE: Attacks up to 5 targets.
                <br/><br/>(Description based on Lv. 6)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/07/image_47707.png" alt="Triple Slash - Master" />
                <br/>
                <span className="skill-text">Triple Slash - Master</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Attacks the target with 8142 power.
                <br/>Ignores Shield Defense.
                <br/>Ignores 15% of the target's defense.
                <br/>Critical.
                <br/><br/>(Description based on Lv. 43)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/75/image_47675.png" alt="Final Secret: Dual Weapons" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Final Secret: Dual Weapons</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Final Secret</span>
              </td>
              <td>
                P. Skill Power +10%
                <br/>Damage +15%
                <br/>Max HP +2000
                <br/>Bow Resistance +60%
                <br/>M. Damage Resistance +60%
                <br/>Speed +20
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/76/image_47676.png" alt="Tough Body: Dual Weapons" />
                <br/>
                <span className="skill-text">★★</span>
                <br/>
                <span className="skill-text">Tough Body: Dual Weapons</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Dual Weapon Defense</span>
                <br/><span className="skill-text3">Tough Body</span>
              </td>
              <td>
                P. Def. +2000
                <br/>M. Def. +2000
                <br/>Debuff/ Anomaly Resistance +30%
                <br/>Buff Cancel Resistance +30%
                <br/>Skill Evasion +30%
                <br/>Received AoE Skill Damage -10%
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/67/image_47667.png" alt="Blade Rush" />
                <br/>
                <span className="skill-text">★★</span>
                <br/>
                <span className="skill-text">Blade Rush</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Rush</span>
              </td>
              <td>
                &lt;Rush skill&gt;
                <br/><br/>Attacks the target with 5000 power.
                <br/>Ignores Shield Defense.
                <br/>Ignores 5% of the target's defense.
                <br/>Critical.
                <br/><br/>(Description based on Lv. 6)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/77/image_47677.png" alt="Ultimate Rising Attack" />
                <br/>
                <span className="skill-text">★</span>
                <br/>
                <span className="skill-text">Ultimate Rising Attack</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Rising Attack</span>
                <br/><span className="skill-text3">Blade Rage</span>
                <br/><span className="skill-text3">Arc Rising Attack Mastery</span>
              </td>
              <td>
                &lt;<span className="skill-text-lightgreen">Changing skill</span>&gt;
                <br/>Damage depends on the distance to the target.
                <br/>For 5 sec., the target's P. Def. -30%.
                <br/><br/><span className="skill-text-midgreen">Melee</span>
                <br/>Attacks the target. Power 8408.
                <br/>Ignores Shield Defense.
                <br/>Ignores 15% of the target's defense.
                <br/>Critical.
                <br/><br/><span className="skill-text-midgreen">Mid-range</span>
                <br/>Attacks the target. Power 7567.
                <br/>Ignores Shield Defense.
                <br/>Ignores 15% of the target's defense.
                <br/>Critical.
                <br/><br/><span className="skill-text-midgreen">Long-range</span>
                <br/>Attacks the target. Power 7146.
                <br/>Ignores Shield Defense.
                <br/>Ignores 10% of the target's defense.
                <br/>Critical.
                <br/><br/>(Description based on Lv. 6)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/68/image_47668.png" alt="Indestructible Blade" />
                <br/>
                <span className="skill-text">★</span>
                <br/>
                <span className="skill-text">Indestructible Blade</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Unbreakable Sonic</span>
              </td>
              <td>
                &lt;Imprisonment skill&gt;
                <br/><br/>Attacks the target. Power 3000.
                <br/>Critical.
                <br/><br/>For 5 sec., inflicts Imprisonment.
                <br/><br/>Imprisoned targets cannot move, attack, teleport, use skills, recover HP/ MP/ CP.
                <br/><br/>Imprisoned targets can only be attacked by the Duelist; with a certain chance, removes Imprisonment on attack.
                <br/><br/>(Description based on Lv. 3)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/14/image_47714.png" alt="Battle Heart" />
                <br/>
                <span className="skill-text">Battle Heart</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Battle Roar</span>
                <br/><span className="skill-text3">Braveheart</span>
              </td>
              <td>
                Momentarily recovers 35% of Max HP.
                <br/>Momentarily recovers 1000 CP.
                <br/><br/>Max HP +35%
              </td>
            </tr>
          </tbody>
        </table>

        <div className="article-subtitle">Skills changes
        </div>
        <div className="article-text">
          The following skills have been changed:
        </div>
        <table className="article-table">
          <thead>
            <tr>
              <th>Skill</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/27/image_47927.png" alt="Challenger" />
                <br/>
                <span className="skill-text">★★★★</span>
                <br/>
                <span className="skill-text">Challenger</span>
              </td>
              <td>
                A sword imbued with the will to win, that grants mighty power.
                <br/><br/>P. Atk. +20%
                <br/>P. Skill Power +15%
                <br/>P. Skill Critical Rate +20%
                <br/>P. Skill Critical Damage +20%
                <br/>P. Skill Damage in PvP +10%
                <br/>Shock Atk. Rate +5%
                <br/>Imprisonment Atk. Rate +10%
                <br/>Max HP +10%
                <br/>Max HP +2500
                <br/>Atk. Spd. +20%
                <br/>Speed +10
                <br/><br/>Temporarily enhances the following skills:
                <br/><span className="skill-text-darkgreen">Blade Wave → Blade Wave - Challenger</span>
                <br/><span className="skill-text-darkgreen">Triple Slash → Triple Slash - Challenger</span>
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/29/image_47929.png" alt="Blade Wave - Challenger" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Blade Wave - Challenger</span>
              </td>
              <td>
                Attacks enemies twice with 4336 power.
                <br/>Ignores Shield Defense.
                <br/>Ignores 15% of the target's defense.
                <br/>Critical.
                <br/><br/>For 10 sec., P. Def. -30%
                <br/><br/>PvP: Attacks up to 9 targets.
                <br/>PvE: Attacks up to 9 targets.
                <br/>The fewer enemies are in the skill area, the higher the skill power.
                <br/><br/>(Description based on Lv. 4)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/65/image_47965.png" alt="Triple Slash - Challenger" />
                <br/>
                <span className="skill-text">Triple Slash - Challenger</span>
              </td>
              <td>
                Attacks the target with 7402 power.
                <br/>Ignores Shield Defense.
                <br/>Ignores 15% of the target's defense.
                <br/>Critical.
                <br/><br/>(Casting range has been increased: 40 → 150.)
                <br/>(Description based on Lv. 43)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/30/image_47930.png" alt="Slashing Blades" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Slashing Blades</span>
              </td>
              <td>
                Attacks enemies with 4285 power.
                <br/>Ignores Shield Defense.
                <br/>Ignores 15% of the target's defense.
                <br/>Critical.
                <br/><br/>PvP: Attacks up to 5 targets.
                <br/>PvE: Attacks up to 5 targets.
                <br/><br/>(Description based on Lv. 6)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/28/image_47928.png" alt="Blade Wave" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Blade Wave</span>
              </td>
              <td>
                Attacks enemies with 4336 power.
                <br/>Ignores Shield Defense.
                <br/>Ignores 15% of the target's defense.
                <br/>Critical.
                <br/><br/>For 10 sec., P. Def. -30%
                <br/><br/>PvP: Attacks up to 7 targets.
                <br/>PvE: Attacks up to 7 targets.
                <br/><br/>The fewer enemies are in the skill area, the higher the skill power.
                <br/><br/>(Description based on Lv. 4)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/33/image_47933.png" alt="Sword Spirit Lv. 2" />
                <br/>
                <span className="skill-text">★★</span>
                <br/>
                <span className="skill-text">Sword Spirit Lv. 2</span>
              </td>
              <td>
                When using dual swords:
                <br/><br/>P. Atk. +300
                <br/>Max HP +300
                <br/>P. Skill Critical Rate +1%
                <br/>Damage +1%
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/32/image_47932.png" alt="Blade Throw" />
                <br/>
                <span className="skill-text">★★</span>
                <br/>
                <span className="skill-text">Blade Throw</span>
              </td>
              <td>
                <br/><br/>&lt;Shock skill&gt;
                <br/>Throws a sword at the enemy at a distance.
                <br/>Attacks the enemy with 6634 power.
                <br/><br/>Stuns for 3 sec.
                <br/><br/>Ignores Shield Defense.
                <br/>Ignores 20% of the target's defense.
                <br/>Critical.
                <br/><br/>(Attack power has been increased / Lv. 8/9 have been added.)
                <br/>(Description based on Lv. 9)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/61/image_261.png" alt="Triple Slash" />
                <br/>
                <span className="skill-text">Triple Slash</span>
              </td>
              <td>
                Attacks the target with 6436 power.
                <br/>Ignores Shield Defense.
                <br/>Ignores 10% of the target's defense.
                <br/>Critical.
                <br/><br/>(Casting range has been increased: 40 → 150.)
                <br/>(Description based on Lv. 43)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/51/image_47951.png" alt="Dual Sword Mastery" />
                <br/>
                <span className="skill-text">Dual Sword Mastery</span>
              </td>
              <td>
                <br/><br/>When using dual swords:
                <br/>P. Atk. +720
                <br/>Atk. Spd. +140
                <br/>PvE damage bonus +5%
                <br/><br/>(When learning the skill, the &lt;Detect Weakness&gt; skill is deleted.)
                <br/>(Description based on Lv. 13)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/05/image_1605.png" alt="Dual Weapon Defense" />
                <br/>
                <span className="skill-text">Dual Weapon Defense</span>
              </td>
              <td>
                P. Skill Evasion +30%
                <br/>M. Skill Evasion +30%
                <br/><br/>(Description based on Lv. 5)
              </td>
            </tr>
          </tbody>
        </table>

        <div className="article-subtitle">Skill Enchant changes
        </div>
        <div className="article-text">
          The following skill enchant effects have been added/changed:
        </div>
        <table className="article-table">
          <thead>
            <tr>
              <th>Skill</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/29/image_47929.png" alt="Blade Wave - Challenger" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Blade Wave - Challenger</span>
              </td>
              <td>
                +1: Increases the number of targets (9 → 10)
                <br/>+2: Decreases cooldown (30 seconds → 20 seconds)
                <br/>Increases the number of targets (10 → 11)
                <br/>+3: Decreases cooldown (20 seconds → 10 seconds)
                <br/>Increases the number of targets (11 → 12)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/28/image_47928.png" alt="Blade Wave" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Blade Wave</span>
              </td>
              <td>
                +1: Increases the number of targets (7 → 8)
                <br/>+2: Decreases cooldown (30 seconds → 20 seconds)
                <br/>Increases the number of targets (8 → 9)
                <br/>+3: Decreases cooldown (20 seconds → 10 seconds)
                <br/>Increases the number of targets (9 → 10)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/33/image_47933.png" alt="Sword Spirit Lv. 2" />
                <br/>
                <span className="skill-text">★★</span>
                <br/>
                <span className="skill-text">Sword Spirit Lv. 2</span>
              </td>
              <td>
                +1: P. Atk./Max HP +500
                <br/>P. Skill Critical Rate +3%
                <br/>Damage +2%
                <br/>+2: P. Atk./Max HP +800
                <br/>P. Skill Critical Rate +6%
                <br/>Damage +3%
                <br/>+3: P. Atk./Max HP +1000
                <br/>P. Skill Critical Rate +9%
                <br/>Damage +5%
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/77/image_47677.png" alt="Ultimate Rising Attack" />
                <br/>
                <span className="skill-text">★</span>
                <br/>
                <span className="skill-text">Ultimate Rising Attack</span>
              </td>
              <td>
                +1: Increases attack power
                <br/>+2: Increases attack power
                <br/>Increases the number of attacks: 1 time → 2 times
                <br/>+3: Increases attack power
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/*<div className="article-comments">
        <h2>Comments</h2>
      </div>*/}
    </div>
    </>
  );
};
