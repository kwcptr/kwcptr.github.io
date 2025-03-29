import ReactGA from "react-ga4";
import { PageTitle } from 'components/globals/pagetitle/PageTitle';  // Importa tu componente de título global

export const Article5 = () => {

  ReactGA.send("pageviewarticle5");

  return (
    <>
    {/* Agrega el componente PageTitle para establecer el título por defecto */}
    <PageTitle title="Class Update: Cardinal"/>

    <div className="news-article">
      <header className="article-header">
        <h1 className="article-title">Class Update: Cardinal</h1>
        <div className="article-metadata">
          {/* <span className="author">Bona</span> */}
          <span className="date">November 3, 2024</span>
        </div>
      </header>
      <div className="article-content">
        <div className="article-text">
          The following skills have been added or changed:
        </div>
        <div className="article-text4">
          Heal ↔ Attack Skill Change
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
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/20/image_88320.png" alt="Eclipse"/>
                <br/>
                <span className="skill-text">Eclipse</span>
              </td>
              <td>
                ★★★
              </td>
              <td>
                Healing Power -90% (Heal penalty)
                <br/>M. Atk. +5%
                <br/>M. Skill Power +5%
                <br/>Speed +5
                <br/><br/>Change <span className="skill-text-golden">healing skills</span> to <span className="skill-text-midblue">attacking skills</span>
                <br/><span className="skill-text-golden">Restore Life</span> → <span className="skill-text-midblue">Diminish Life</span>
                <br/><span className="skill-text-golden">Chain Heal/ Shining Chain Heal</span> → <span className="skill-text-midblue">Chain Blast</span>
                <br/><span className="skill-text-golden">Shining Beam</span> → <span className="skill-text-midblue">Abyss Beam</span>
                <br/><span className="skill-text-golden">Balanced Body</span> → <span className="skill-text-midblue">Darkness Fall</span>
                <br/><span className="skill-text-golden">Tranquility</span> → <span className="skill-text-midblue">Chaos</span>
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/21/image_88321.png" alt="Eclipse: Master"/>
                <br/>
                <span className="skill-text">Eclipse: Master</span>
              </td>
              <td>
                ★★★
              </td>
              <td>
                Healing Power -90% (Heal penalty)
                <br/>M. Atk. +15%
                <br/>M. Skill Power +10%
                <br/>Speed +10
                <br/><br/>When using an attack skill:
                <br/>With a certain chance, makes an additional attack with 150 power (Abyss Spear).
                <br/><br/>Enemies with a debuff/ anomaly applied take additional damage.
                <br/><br/>Change <span className="skill-text-golden">healing skills</span> to <span className="skill-text-midblue">attacking skills</span>
                <br/><span className="skill-text-golden">Restore Life</span> → <span className="skill-text-midblue">Diminish Life</span>
                <br/><span className="skill-text-golden">Chain Heal/ Shining Chain Heal</span> → <span className="skill-text-midblue">Chain Blast</span>
                <br/><span className="skill-text-golden">Shining Beam</span> → <span className="skill-text-midblue">Abyss Beam</span>
                <br/><span className="skill-text-golden">Balanced Body</span> → <span className="skill-text-midblue">Darkness Fall</span>
                <br/><span className="skill-text-golden">Tranquility: Master</span> → <span className="skill-text-midblue">Chaos: Master</span>
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/17/image_88317.png" alt="Twilight: Master"/>
                <br/>
                <span className="skill-text">Twilight: Master</span>
              </td>
              <td>
                ★★★★
                <br/>Master
              </td>
              <td>
              The following effects increase by level:
                <br/>M. Skill Critical Rate
                <br/>Hold Atk. Rate
                <br/>Speed
                <br/><br/><span className="skill-text-golden">Tranquility</span> → <span className="skill-text-midblue">Tranquility: Master</span>
                <br/><span className="skill-text-golden">Eclipse</span> → <span className="skill-text-midblue">Eclipse: Master</span>
                <br/><br/>Weakness and Magical Backfire are removed upon learning Twilight: Master skill.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/36/image_88336.png" alt="Rising Divine"/>
                <br/>
                <span className="skill-text">Rising Divine</span>
              </td>
              <td>
                -
              </td>
              <td>
              Available while applying Eclipse.
                <br/><br/>Disable Eclipse when using.
              </td>
            </tr>
          </tbody>
        </table>
        <div className="article-text4">
          Heal ↔ Attack Skill Matching
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
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/18/image_88318.png" alt="Tranquility: Master"/>
                <br/>
                <span className="skill-text-golden2">Tranquility: Master</span>
              </td>
              <td>
                ★★★★
                <br/>Master
              </td>
              <td>
                Gives the following effects to yourself and your party members during the duration:
                <br/>M. Def. +1200
                <br/>Max HP +6000
                <br/>With a 70% chance, resists provocation effects.
                <br/>Recovers 100% HP per 3 sec.
                <br/>Duration: 12 sec.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/00/image_88300.png" alt="Chaos"/>
                <br/>
                <span className="skill-text-midblue2">Chaos</span>
              </td>
              <td>
                ★★★★
              </td>
              <td>
                Attacks with 380 power.
                <br/>Enemies with a debuff/ anomaly applied take additional damage.
                <br/><br/>Applies one effect among Rust/ Mana Parasite/ Abyss Time to the target.
                <br/>(Duration: 7 sec.)
                <br/><br/>PvP: attacks up to 12 targets.
                <br/>PvE: attacks up to 12 targets.
                <br/><br/>Rust: P./ M. Atk. -20%
                <br/>Mana Parasite: Skill MP Consumption +150%
                <br/>Abyss Time: P./ M. Skill Cooldown +50%
                <br/><br/>Enemies affected by the debuff are immune to Rust/ Mana Parasite/ Abyss Time debuffs for 12 sec.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/19/image_88319.png" alt="Chaos: Master"/>
                <br/>
                <span className="skill-text-midblue2">Chaos: Master</span>
              </td>
              <td>
                ★★★★
                <br/>Master
              </td>
              <td>
                Attacks 2 times with 450 power.
                <br/>With a certain chance, removes up to 3 buff(s) from the target.
                <br/>Enemies with a debuff/ anomaly applied take additional damage.
                <br/><br/>Applies one effect among Rust/ Mana Parasite/ Abyss Time to the target.
                <br/>(Duration: 7 sec.)
                <br/><br/>PvP: attacks up to 15 targets.
                <br/>PvE: attacks up to 15 targets.
                <br/><br/>Rust: P./ M. Atk. -50%
                <br/>Mana Parasite: Skill MP Consumption +300%
                <br/>Abyss Time: P./ M. Skill Cooldown +100%
                <br/><br/>Enemies affected by the debuff are immune to Rust/ Mana Parasite/ Abyss Time debuffs for 12 sec.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/66/image_45566.png" alt="Shining Beam"/>
                <br/>
                <span className="skill-text-golden2">Shining Beam</span>
              </td>
              <td>
                ★★★
              </td>
              <td>
                Changed the existing 'Divine Beam' skill to the 'Shining Beam' skill.
                <br/>Deals additional damage to enemies with a debuff/ anomaly applied.
                <br/>Deals heavy damage to demons/ undead.
                <br/><br/>Might of Heaven is removed upon learning Shining Beam skill.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/06/image_88306.png" alt="Abyss Beam"/>
                <br/>
                <span className="skill-text-midblue2">Abyss Beam</span>
              </td>
              <td>
                ★★★
              </td>
              <td>
                Attacks twice.
                <br/>Deals additional damage to enemies with a debuff/ anomaly applied.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/42/image_47242.png" alt="Balanced Body"/>
                <br/>
                <span className="skill-text-golden2">Balanced Body</span>
              </td>
              <td>
                ★★★
              </td>
              <td>
                When enchanted to +3, reduces casting time:
                <br/>5 sec. → 3 sec.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/04/image_88304.png" alt="Darkness Fall"/>
                <br/>
                <span className="skill-text-midblue2">Darkness Fall</span>
              </td>
              <td>
                ★★★
              </td>
              <td>
                &lt;PvP effect&gt;
                <br/>Attacks with 330 power.
                <br/>HP -10%
                <br/>M. Def. -20% 
                <br/>(Duration: 10 sec.)
                <br/><br/>&lt;PvE effect&gt;
                <br/>Attacks 2 times with 330 power.
                <br/>M. Def. -20% 
                <br/>(Duration: 10 sec.)
                <br/><br/>Enemies with a debuff/ anomaly applied take additional damage.
                <br/><br/>PvP: attacks up to 5 targets.
                <br/>PvE: attacks up to 5 targets.
                <br/><br/>Can be enchanted:
                <br/>+1: Increases power / Enhances the M. Def. debuff
                <br/>+2: Increases power / Reduces cooldown / Increases the number of targets / Enhances the M. Def. debuff / Adds PvP effect (HP decrease)
                <br/>+3: Increases power / Reduces casting time / Increases attack range / Enhances the M. Def. debuff / Enhances PvP effect / Adds PvE effect (number of targets +1)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/58/image_1258.png" alt="Restore Life"/>
                <br/>
                <span className="skill-text-golden2">Restore Life</span>
              </td>
              <td>
                ★
              </td>
              <td>
                Maximum level is expanded: Lv4 → Lv5 (Consumes Spellbook: 1 Star when acquiring Lv5)
                <br/>Acquired at level 76
                <br/>Casting time is reduced from 8 sec. to 3 sec.
                <br/><br/>The skill is strengthened when acquiring 'Shining Wave'
                <br/>&lt;Combat power 1000~1999&gt;
                <br/>Additional recovery rate range: 10%~30%
                <br/>&lt;Combat power 2000 or higher&gt;
                <br/>Additional recovery rate range: 30%~60%
                <br/><br/>When acquiring Lv5, Spirit Ore consumption is increased from 0 to 3.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/10/image_88310.png" alt="Diminishing Life"/>
                <br/>
                <span className="skill-text-midblue2">Diminishing Life</span>
              </td>
              <td>
                ★
              </td>
              <td>
                Attacks the target.
                <br/>Enemies with a debuff/ anomaly applied take additional damage.
                <br/><br/>Diminishing Life Lv5 skill is strengthened.
                <br/>- Power is greatly increased
                <br/>- An additional attack is triggered with random power (200~300)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/07/image_88307.png" alt="Shining Chain Heal"/>
                <br/>
                <span className="skill-text-golden2">Shining Chain Heal</span>
              </td>
              <td>
                -
              </td>
              <td>
                HP recovery rate is enhanced
                <br/>Lv1: 30% → 37%
                <br/>Lv2: 35% → 38%
                <br/>Lv3: 36% → 40%
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/08/image_88308.png" alt="Chain Blast"/>
                <br/>
                <span className="skill-text-midblue2">Chain Blast</span>
              </td>
              <td>
                -
              </td>
              <td>
                A ranged attack with 170/215/270 power.
                <br/>Received Healing -25%/-35%/-50%
                <br/>(Duration: 5 sec.)
                <br/><br/>PvP: attacks up to 4 targets.
                <br/>PvE: attacks up to 4 targets.
              </td>
            </tr>
          </tbody>
        </table>
        <div className="article-text4">
          New Special Skill
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
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/11/image_88311.png" alt="Divine Whisper"/>
                <br/>
                <span className="skill-text">Divine Whisper</span>
              </td>
              <td>
                ★
              </td>
              <td>
                Recovers your HP with 350 power
                <br/><br/>Removes provocation (target change) skills on yourself
                <br/><br/>Target's Debuff/ Anomaly Resistance -5%
                <br/>Target's provocation (target change) skills cannot be used
                <br/>(Duration: 7 sec.)
                <br/><br/>Self-heal, Repose, Peace and Paralyze are removed upon learning Divine Whisper skill.
              </td>
            </tr>
          </tbody>
        </table>
        <div className="article-text4">
          Changes to effects or consumption values on existing skills
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
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/30/image_88330.png" alt="Unleashing"/>
                <br/>
                <span className="skill-text">Unleashing</span>
              </td>
              <td>
                ★★
              </td>
              <td>
                It has been changed to a survival buff type.
                <br/><br/>*Cannot be used when <span className="skill-text-midblue">'Eclipse' / 'Eclipse: Master'</span> buff is applied
                <br/>Fixed cooldown is removed
                <br/>M. Atk. +15% → Removed
                <br/>Casting Spd. +30%
                <br/>M. Skill Critical Rate +50% → +20%
                <br/>M. Skill MP Consumption -80% → -30%
                <br/>Healing Power +500
                <br/>Received Healing +30% → Added
                <br/>Speed +30 → Added
                <br/><br/>Spirit Ore consumption added (10 pcs.)
                <br/><br/>Requiem is removed upon learning Unleashing skill.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/31/image_88331.png" alt="Celestial Power"/>
                <br/>
                <span className="skill-text">Celestial Power</span>
              </td>
              <td>
                ★★
              </td>
              <td>
                The existing 'Sacred Power' skill is changed to the 'Celestial Power' skill.
                <br/><br/>Depending on the level, the following effects increase:
                <br/>M. Atk. +2% ~ +5% / +500 ~ +1000
                <br/>M. Skill Power +1% ~ +5%
                <br/>M. Def. +300 ~ +500
                <br/>Speed +5 ~ +10
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/32/image_45432.png" alt="Shining Wave"/>
                <br/>
                <span className="skill-text">Shining Wave</span>
              </td>
              <td>
                ★★
              </td>
              <td>
                The additional attack effect when using the Divine Beam/ Shining Beam skills is removed.
                <br/>M. Atk. +100 → +600
                <br/>M. Skill Critical Damage +5%
                <br/><br/>Chain Heal → Shining Chain Heal
                <br/>Greater Battle Heal → Shining Battle Heal
                <br/><br/>Restore Life Lv5 is enhanced
                <br/>When Combat Power reaches 1000, additional recovery is activated at a random HP ratio
                <br/><br/>&lt;Combat Power 1000~1999&gt;
                <br/>Speed +5
                <br/>Restore Life Lv5 additional recovery ratio range: 10%~30%
                <br/>&lt;Combat Power 2000 or higher&gt;
                <br/>Speed +10
                <br/>Restore Life Lv5 additional recovery ratio range: 30%~60%
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/12/image_88312.png" alt="Shining Battle Heal"/>
                <br/>
                <span className="skill-text">Shining Battle Heal</span>
              </td>
              <td>
                ★
              </td>
              <td>
                Quickly recovers a large amount of HP for one ally.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/61/image_47261.png" alt="Divine Recovery"/>
                <br/>
                <span className="skill-text">Divine Recovery</span>
              </td>
              <td>
                ★★
              </td>
              <td>
                Amount of MP recovered when killing monsters is decreased
                <br/>Amount of MP recovered when killing characters is increased
                <br/>PvE damage +10% → Added
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/35/image_88335.png" alt="Einhasad's Expert Blessing"/>
                <br/>
                <span className="skill-text">Einhasad's Expert Blessing</span>
              </td>
              <td>
                ★★
              </td>
              <td>
                The following existing effects are changed:
                <br/><br/>M. Atk. static bonus → Removed
                <br/>HP/MP Recovery Rate bonus → Removed
                <br/><br/>M. Atk. % bonus → Added
                <br/>PvE damage bonus → Added
                <br/>Spiritshot damage bonus → Added
                <br/>P./ M. Def. bonuses are increased
                <br/><br/>+1 from the existing +3 enchantment value: M. Atk. % increases / Spiritshot damage is added / PvE damage increases / P./ M. Def. bonus increase is removed
                <br/>+2: M. Atk. % increases / Spiritshot damage increases / PvE damage increases / P./ M. Def. bonus increase is removed
                <br/>+3: M. Atk. % increases / Spiritshot damage Increases / PvE damage increases / P./ M. Def. bonus increase is removed
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/25/image_45525.png" alt="Shining Oath"/>
                <br/>
                <span className="skill-text">Shining Oath</span>
              </td>
              <td>
                ★★
              </td>
              <td>
                'Divine Beam' → 'Shining Beam' skill upgrade effect is removed
                <br/>M. Atk. +500
                <br/>PvE damage bonus → Added
                <br/>Healing Power +100
                <br/><br/>+1: Increases M. Atk. + / Increases PvE damage / Increases Healing Power
                <br/>+2: Increases M. Atk. + / Increases PvE damage / Increases Healing Power
                <br/>+3: Increases M. Atk. + / Increases PvE damage / Increases Healing Power
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/29/image_88329.png" alt="Enlightenment"/>
                <br/>
                <span className="skill-text">Enlightenment</span>
              </td>
              <td>
                -
              </td>
              <td>
              *Cannot be used when <span className="skill-text-midblue">'Eclipse' / 'Eclipse: Master'</span> buff is applied
              <br/>M. Atk. +10% → Removed
              <br/>M. Skill Critical Rate +50% → +15%
              <br/>M. Skill MP Consumption -70% → -20%
              <br/>Spirit Ore consumption is increased from 1 to 4.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/66/image_47266.png" alt="Favorable Cover"/>
                <br/>
                <span className="skill-text">Favorable Cover</span>
              </td>
              <td>
                -
              </td>
              <td>
                Dagger resistance penalty → Removed
                <br/>Speed bonus → Added
                <br/>Spirit Ore consumption is added (8/9/10 pcs.)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/54/image_1254.png" alt="Mass Resurrection"/>
                <br/>
                <span className="skill-text">Mass Resurrection</span>
              </td>
              <td>
                -
              </td>
              <td>
                Spirit Ore consumption is added (500 pcs.)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/16/image_1016.png" alt="Resurrection"/>
                <br/>
                <span className="skill-text">Resurrection</span>
              </td>
              <td>
                -
              </td>
              <td>
                Spirit Ore consumption is added (100 pcs.)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/36/image_45236.png" alt="Prophecy of Light"/>
                <br/>
                <span className="skill-text">Prophecy of Light</span>
              </td>
              <td>
                -
              </td>
              <td>
                 PvE damage bonus is increased
                 <br/>Spirit Ore consumption is increased (30/40 pcs.)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/11/image_1311.png" alt="Body of Avatar"/>
                <br/>
                <span className="skill-text">Body of Avatar</span>
              </td>
              <td>
                -
              </td>
              <td>
                 Speed bonus → Added
                 <br/>Spirit Ore consumption is added (7 pcs.)
              </td>
            </tr>
          </tbody>
        </table>
        <div className="article-text4">
        Maximum level expansion on existing skills
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
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/71/image_1271.png" alt="Blessing"/>
                <br/>
                <span className="skill-text">Blessing</span>
              </td>
              <td>
                ★★★
              </td>
              <td>
                Maximum level is expanded: Lv2 → Lv3
                <br/>Casting time is reduced from 7 sec. to 4 sec.
                <br/>HP condition to use the skill removed.
                <br/>Spirit Ore consumption added (10 pcs.)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/43/image_47243.png" alt="Advanced Cleanse"/>
                <br/>
                <span className="skill-text">Advanced Cleanse</span>
              </td>
              <td>
                ★★
              </td>
              <td>
                Maximum level is expanded: Lv1 → Lv2
                <br/>Debuff/ Anomaly Resistance bonus is enhanced: +10% → +15%
                <br/>Vitalize is removed upon learning Advanced Cleanse Lv1 skill.
                <br/>Consumes Magic Tablet - 31 pcs. when acquiring Lv2.
                <br/>Spirit Ore consumption is increased from 3 to 5 when acquiring Lv2.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/53/image_1553.png" alt="Chain Heal"/>
                <br/>
                <span className="skill-text">Chain Heal</span>
              </td>
              <td>
                -
              </td>
              <td>
                Maximum level is expanded: Lv2 → Lv3
                <br/>Recovers 35% → 36% of Max HP.
                <br/>Spirit Ore consumption is increased from 6 to 8.
                <br/>Can be auto-used.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/17/image_1217.png" alt="Greater Heal"/>
                <br/>
                <span className="skill-text">Greater Heal</span>
              </td>
              <td>
                -
              </td>
              <td>
                Maximum level is expanded: Lv41 → Lv44
                <br/>HP Recovery power is increased
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/18/image_1218.png" alt="Greater Battle Heal"/>
                <br/>
                <span className="skill-text">Greater Battle Heal</span>
              </td>
              <td>
                -
              </td>
              <td>
                Maximum level is expanded: Lv41 → Lv44
                <br/>HP Recovery power is increased
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/67/image_47267.png" alt="Priest's Armor Mastery"/>
                <br/>
                <span className="skill-text">Priest's Armor Mastery</span>
              </td>
              <td>
                -
              </td>
              <td>
                Maximum level is expanded: Lv15 → Lv17
                <br/>Robe → M. Atk. bonus added
                <br/>Light Armor → P. Def. bonus increased / M. Def. bonus added
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/68/image_47268.png" alt="Priest's Attack Mastery"/>
                <br/>
                <span className="skill-text">Priest's Attack Mastery</span>
              </td>
              <td>
                -
              </td>
              <td>
                Maximum level is expanded: Lv15 → Lv20
                <br/>P./ M. Atk. bonus increased
              </td>
            </tr>
          </tbody>
        </table>
        <div className="article-text">
          • Heal is removed upon learning Greater Heal skill.
          <br/>• Battle Heal is removed upon learning Greater Battle Heal skill.
          <br/>• Group Heal is removed upon learning Greater Group Heal skill.
        </div>
      </div>
      {/*<div className="article-comments">
        <h2>Comments</h2>
      </div>*/}
    </div>
    </>
  );
};
