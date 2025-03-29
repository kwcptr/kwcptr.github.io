import ReactGA from "react-ga4";
import { PageTitle } from 'components/globals/pagetitle/PageTitle';  // Importa tu componente de título global

export const Article1 = () => {

  ReactGA.send("pageviewarticle1");

  return (
    <>
    {/* Agrega el componente PageTitle para establecer el título por defecto */}
    <PageTitle title="Class Update: Mystic Muse"/>

    <div className="news-article">
      <header className="article-header">
        <h1 className="article-title">Class Update: Mystic Muse</h1>
        <div className="article-metadata">
          {/* <span className="author">Bona</span> */}
          <span className="date">September 20, 2023</span>
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
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/43/image_87043.png" alt="Mystic Meteor: Master"/>
                <br/>
                <span className="skill-text">★★★★</span>
                <br/>
                <span className="skill-text">Mystic Meteor: Master</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                &lt;Skill with fixed cooldown&gt;
                <br/><br/>Decreases CP of the target and nearby enemies for 50%.
                <br/>Attacks with 417 power and has a chance of knocking enemies down.
                <br/><br/>Applies <span className="title-text">Mystic Frost</span> debuff to enemies.
                <br/>Applies <span className="title-text">Mystic Pride</span> buff to yourself.
                <br/><br/>Afterwards, meteorite fragments and a huge tsunami occurs and attacks three times:
                <br/>- Meteorite Fragment: Attacks 2 times with 417 power.
                <br/>- Huge Tidal Wave: Attacks once with 438 power.
                <br/><br/><span className="title-text">Mystic Frost</span>
                <br/>M. Def. -30%
                <br/>Received M. Skill Critical Rate +10%
                <br/>Duration: 5 seconds
                <br/>(Applies each effect individually)
                <br/><br/><span className="title-text">Mystic Pride</span>
                <br/>Your Skill range +200
                <br/>PvP damage bonus +30%
                <br/>When using magic (attack/debuff/anomaly) skills:
                <br/>Additional damage is inflicted by randomly dropping small meteorites.
                <br/>Duration: 10 seconds
                <br/><br/>All attacks deal higher damage to enemies with a debuff/anomaly applied.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/56/image_87056.png" alt="Mystic Freeze" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Mystic Freeze</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Attacks enemies with 231 power.
                <br/>Deploys a Freezing Field where the target is located.
                <br/><br/><span className="title-text">Freezing Field</span>
                <br/>Make a certain range of climate extremely cold.
                <br/>Exposed enemies go into Freezing Cold.
                <br/>Field Duration: 5 seconds
                <br/><br/><span className="title-text">Freezing Cold</span>
                <br/>Paralysis/Slow/Sleep Resistance -30%
                <br/>(PvE) M. Def. -10%
                <br/>(PvP) Speed -90%
                <br/>(PvP) Rush skills cannot be used.
                <br/>Cold Duration: 3 seconds
                <br/><br/>(Description based on Lv. 3)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/61/image_87061.png" alt="Winter Shackle" />
                <br/>
                <span className="skill-text">★★</span>
                <br/>
                <span className="skill-text">Winter Shackle</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Wind Shackle</span>
              </td>
              <td>
                &lt;Suppression skill&gt;
                <br/><br/>Attacks with 195 power.
                <br/>After being bound by extreme cold and slowed down:
                <br/>Temporarily becomes unable to move.
                <br/>Deceleration time: 3 seconds
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/64/image_87064.png" alt="Winter Dreamer" />
                <br/>
                <span className="skill-text">★★</span>
                <br/>
                <span className="skill-text">Winter Dreamer</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Deep Sleep</span>
              </td>
              <td>
                Puts the enemy into a sleep state, the sleep state is not broken by attacks,
                <br/>and the probability of the enemy being released from the sleep state increases with each hit.
                <br/><br/>(Description based on Lv. 7)
                <br/>(Lv. 1 ~ Lv. 6 have the same effect as the existing 'Deep Sleep')
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/73/image_87073.png" alt="Rappel" />
                <br/>
                <span className="skill-text">★★</span>
                <br/>
                <span className="skill-text">Rappel</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
              Teleport backwards.
              <br/>With a certain chance, knocks down the target.
              <br/><br/>Magic Skill range +300
              <br/>Duration: 5 seconds
              <br/>(Does not apply while Mystic Pride buff is active)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/65/image_87065.png" alt="Winter Icicle" />
                <br/>
                <span className="skill-text">★</span>
                <br/>
                <span className="skill-text">Winter Icicle</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Blizzard</span>
              </td>
              <td>
                Attacks with 201 power.
                <br/>Paralyzes the enemy for 3 seconds.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/92/image_87092.png" alt="Winter Skin" />
                <br/>
                <span className="skill-text">★</span>
                <br/>
                <span className="skill-text">Winter Skin</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Freezing Skin</span>
              </td>
              <td>
                Reflects 15% of the received damage.
                <br/>Speed +10
                <br/>Max HP +750
                <br/>P. Def. +750
                <br/><br/>With a certain chance, when hit:
                <br/>Gives frost to the target that attacked you.
                <br/><br/><span className="title-text">Frost</span>
                <br/>Paralyzed by cold energy
                <br/>Duration: 3 seconds
                <br/><br/>(Description based on Lv. 2)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/72/image_87072.png" alt="Relic" />
                <br/>
                <span className="skill-text">★</span>
                <br/>
                <span className="skill-text">Relic</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
              Paralysis Atk. Rate +8%
              <br/>Sleep Atk. Rate +4%
              <br/><br/>When equipped with a robe:
              <br/>Max HP +1,000
              <br/>Max MP +1,000
              <br/>MP Recovery Rate +3
              <br/>(Skill enchantment is possible)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/76/image_87076.png" alt="Mystic Mastery" />
                <br/>
                <span className="skill-text">★</span>
                <br/>
                <span className="skill-text">Mystic Mastery</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
              When equipped with a magic blunt weapon & robe or a magic sword & robe:
              <br/>M. Atk. +400
              <br/>M. Skill Power +4%
              <br/>Max HP +400
              <br/>P. Def. +400
              <br/>Debuff/Anomaly Resistance +4%
              <br/>Received AoE Skill Damage -7%
              <br/><br/>Apply the following effects in proportion to maximum MP
              <br/><span className="title-text">10,000 or more</span>
              <br/>M. Atk. +500
              <br/><span className="title-text">15,000 or more</span>
              <br/>M. Atk. +500
              <br/>M. Skill Power +1%
              <br/><span className="title-text">20,000 or more</span>
              <br/>M. Atk. +500
              <br/>M. Skill Power +2%
              <br/><span className="title-text">30,000 or more</span>
              <br/>M. Atk. +500
              <br/>M. Skill Power +3%
              <br/><span className="title-text">More than 40,000</span>
              <br/>M. Atk. +500
              <br/>M. Skill Power +4%
              <br/><br/>Recovers 2% of maximum MP when killing an enemy character
              <br/>(Trigger cooldown: 5 seconds)
              <br/><br/>(Description based on Lv. 4)
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
                <img className="skill-icon" src="/items/icons/mystic-spiral.png" alt="Mystic Spiral" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Ice Spiral → Mystic Spiral</span>
              </td>
              <td>
                <span className="title-text">Debuff effect</span>
                <br/>INT/CON reduction → Decreases one random stat among STR/INT/DEX/WIT/CON/MEN.
                <br/><br/><span className="title-text">Attack range</span>
                <br/>Target-based straight shooting range → Target centered circular range.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/mystic-explosion.png" alt="Mystic Explosion" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Water Explosion → Mystic Explosion</span>
              </td>
              <td>
                <span className="title-text">Casting time</span>
                <br/>4 seconds → 3 seconds
                <br/><br/>When enchanting Relic up to +3, the skill is upgraded:
                <br/>Mystic Explosion → Mystic Explosion: Relic
                <br/>(increases attack power and number of attacks from 1 to 2.)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/mystic-shield.png" alt="Mystic Shield" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Faery Shield → Mystic Shield</span>
              </td>
              <td>
                Blocks 70% of damage.
                <br/>The remaining 30% of damage consumes MP instead of HP.
                <br/>The effect is cancelled when MP reaches 0.
                <br/><br/>M. Atk. +200
                <br/>M. Skill Cooldown -4%
                <br/>Knockback Atk. Rate +30%
                <br/><br/>At the end, recovers MP by 30% of Max MP.
                <br/>For 3 sec., Received PvP damage -30%
                <br/><br/>M. Skill MP Consumption +400%
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/47/image_87047.png" alt="Magic Circle" />
                <br/>
                <span className="skill-text">★★</span>
                <br/>
                <span className="skill-text">Magic Circle</span>
              </td>
              <td>
              M. Atk. +1,000
              <br/><br/>When using magic skills (attack/anomaly/debuff):
              <br/>Forms a Magic Circle level by level.
              <br/>(Each level cooldown: 2 seconds.)
              <br/><br/>When reaching Lv. 4, the following skills deal additional damage (power 145):
              <br/><br/>- Hydro Blast
              <br/>- Ice Vortex
              <br/>- Mystic Explosion
              <br/>- Mystic Explosion: Relic
              <br/><br/>Effects are added to each stage of the circle:
              <br/>M. Atk. +300 / +500 / +700 / +1,000
              <br/>M. Skill Critical Rate +1% / +2% / +3% / +5%
              <br/>M. Skill Critical Damage +1% / +2% / +3% / +5%
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/37/image_337.png" alt="Arcane Power" />
                <br/>
                <span className="skill-text">Arcane Power</span>
              </td>
              <td>
                The skill is changed from Toggle skill to Buff skill.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/35/image_1235.png" alt="Hydro Blast" />
                <br/>
                <span className="skill-text">Hydro Blast</span>
              </td>
              <td>
                <span className="title-text">Casting time</span>
                <br/>4 seconds → 3 seconds
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/95/image_1295.png" alt="Aqua Splash" />
                <br/>
                <span className="skill-text">Aqua Splash</span>
              </td>
              <td>
                <span className="title-text">Casting time</span>
                <br/>4 seconds → 3 seconds
              </td>
            </tr>
          </tbody>
        </table>
        <div className="article-text">
          • The Faery Shield skill possessed by the Archmage, Storm Screamer, and Soul Hound classes will be changed to Acro Shield, Scream Shield, and Hound Shield respectively, and the effect of the skill will be the same as the existing Faery Shield.
          <br/>• Changes to the Arcane Power skill apply to all Wizard classes that possess the skill.
          <br/>• The placement order of Self Heal and Battle Heal skills in the Skills window has been changed.
          <br/>• The Spirit Ore consumption of the Mana Regeneration skill is reduced.
          <br/>• The description of the Wizard's Armor Mastery skill has been improved.
        </div>

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
                <img className="skill-icon" src="/items/icons/mystic-spiral.png" alt="Mystic Spiral" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Mystic Spiral</span>
              </td>
              <td>
                +1: Increases attack power / Reduces casting time / Enhances the debuff / Increases range.
                <br/>+2: Increases attack power / Reduces casting time / Enhances the debuff / Removes the fixed cooldown.
                <br/>+3: Reduces casting time / Enhances the debuff / Increases the number of attacks.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/94/image_45294.png" alt="Mighty Children of Eva" />
                <br/>
                <span className="skill-text">★★</span>
                <br/>
                <span className="skill-text">Mighty Children of Eva</span>
              </td>
              <td>
                +1: Increases M. Atk. / M. Skill Critical Rate / M. Skill Critical Damage.
                <br/>+2: Increases M. Atk. / M. Skill Critical Rate / M. Skill Critical Damage / Increases Knockback Atk. Rate.
                <br/>+3: Increases M. Atk. / M. Skill Critical Rate / M. Skill Critical Damage / Increases Knockback Atk. Rate.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/72/image_87072.png" alt="Relic" />
                <br/>
                <span className="skill-text">★</span>
                <br/>
                <span className="skill-text">Relic</span>
              </td>
              <td>
                +1: Increases Paralysis/Sleep Atk. Rate / Max HP/MP / MP Recovery Rate.
                <br/>+2: Increases Paralysis/Sleep Atk. Rate / Max HP/MP / MP Recovery Rate.
                <br/>+3: Increases Paralysis/Sleep/Knockback Atk. Rate / Max HP/MP / MP Recovery Rate / Skill upgrade.
                <br/><br/>&lt;Upgrade effect&gt;
                <br/>Mystic Explosion → Mystic Explosion: Relic
                <br/>Increases attack power and number of attacks from 1 to 2.
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
