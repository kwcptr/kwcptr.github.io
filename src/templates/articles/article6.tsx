import ReactGA from "react-ga4";

export const Article6 = () => {

  ReactGA.send("pageviewarticle6");

  return (
    <div className="news-article">
      <header className="article-header">
        <h1 className="article-title">New Class: Varkas</h1>
        <div className="article-metadata">
          {/* <span className="author">Bona</span> */}
          <span className="date">November 4, 2024</span>
        </div>
      </header>
        <div className="article-text4">
          General Features
        </div>
        <div className="article-text">
          - The Varkas class is a Hunter class that belongs to the human race.
          <br/>- Only 'male' characters can be created for the Varkas class.
          <br/>- The Varkas class's class name does not change during any class change.
          <br/>- Only 'Fist' weapons can be equipped.
          <br/>- You can equip 'Sigils', but not 'Shields'.
          <br/>- The Varkas class has an unique appearance, and the appearance changes depending on the upper armor grade.
          <br/>- After the second class change, Varkas can obtain WP and transform into a werewolf.
          <br/>- During werewolf transformation, wyvern riding, mount riding, fishing, and sitting/standing actions are restricted.
          <br/>- During werewolf transformation, social actions are restricted.
        </div>
        <div className="article-text4">
          Unique Buff Skill
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
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/79/image_88479.png" alt="Moon Protection"/>
                <br/>
                <span className="skill-text">Moon Protection</span>
              </td>
              <td>
                -
              </td>
              <td>
                Incomplete Moon Protection: 2nd class change or higher, automatically acquired at level 45
                <br/>Moon Protection: 2nd class change or higher, automatically acquired at level 60
                <br/>Complete Moon Protection: 2nd class change or higher, automatically acquired at level 70
                <br/><br/>Moon Protection is automatically granted to the Varkas class after completing the 2nd class change, and cannot be used in conjunction with White Guardian Transformation.
              </td>
            </tr>
          </tbody>
        </table>
        <div className="article-text4">
          Combat Skills
        </div>
        <div className="article-text">
          - Some of Varkas' combat skills switch before and after transforming into a werewolf.
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
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/01/image_88401.png" alt="Straight"/>
                <br/>
                <span className="skill-text">Straight</span>
              </td>
              <td>
                -
              </td>
              <td>
                &lt;Human only skill&gt;
                <br/>Attacks a single target once.
                <br/>Starting at Skill Level 21, attacks a target twice.
                <br/>Switches to [Double Claw] when transformed into a werewolf.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/21/image_88421.png" alt="Double Claw"/>
                <br/>
                <span className="skill-text">Double Claw</span>
              </td>
              <td>
                -
              </td>
              <td>
                &lt;Werewolf transformation exclusive skill&gt;
                <br/>Attacks a single target twice.
                <br/>When Werewolf Transformation is released, the skill switches to [Straight].
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/02/image_88402.png" alt="Uppercut"/>
                <br/>
                <span className="skill-text">Uppercut</span>
              </td>
              <td>
                -
              </td>
              <td>
                &lt;Human only skill&gt;
                <br/>Attacks a single target once.
                <br/>When transformed into a werewolf, the skill switches to [Rising Claw].
                <br/>When acquiring the passive skill [Wolf Mastery], the number of attacks and skill power increase.
                <br/>When the werewolf transformation is released, the skill switches to [Rising Claw].
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/22/image_88422.png" alt="Rising Claw"/>
                <br/>
                <span className="skill-text">Rising Claw</span>
              </td>
              <td>
                -
              </td>
              <td>
                &lt;Werewolf transformation exclusive skill&gt;
                <br/>Attacks a single target once.
                <br/>When acquiring the passive skill [Wolf Mastery], the number of attacks, skill power, and number of targets increase.
                <br/>When the werewolf transformation is released, the skill switches to [Uppercut].
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/20/image_88420.png" alt="Reckless Fist"/>
                <br/>
                <span className="skill-text">Reckless Fist</span>
              </td>
              <td>
                -
              </td>
              <td>
                &lt;Human only skill&gt;
                <br/>Attacks a single target twice.
                <br/>When transformed into a werewolf, the skill switches to [Spin Claw].
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/10/image_88410.png" alt="Spin Claw"/>
                <br/>
                <span className="skill-text">Spin Claw</span>
              </td>
              <td>
                -
              </td>
              <td>
                &lt;Werewolf transformation exclusive skill&gt;
                <br/>Attacks a single target twice.
                <br/>When the werewolf transformation is released, the skill switches to [Reckless Fist].
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/03/image_88403.png" alt="Down Crush"/>
                <br/>
                <span className="skill-text">Down Crush</span>
              </td>
              <td>
                Superior
              </td>
              <td>
                &lt;Human only skill&gt;
                <br/>Attacks surrounding targets once and pulls them in.
                <br/>When transformed into a werewolf, the skill changes to [Cyclone Claw].
                <br/>When acquiring the passive skill [Physical Might], the number of attacks, attack range, and attack power increase.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/23/image_88423.png" alt="Cyclone Claw"/>
                <br/>
                <span className="skill-text">Cyclone Claw</span>
              </td>
              <td>
                Superior
              </td>
              <td>
                &lt;Werewolf transformation exclusive skill&gt;
                <br/>Attacks surrounding targets once and pulls them in.
                <br/>When the werewolf transformation is released, the skill switches to [Down Crush].
                <br/>When acquiring the passive skill [Physical Might], the number of attacks, attack range, and attack power increase.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/41/image_88441.png" alt="Gigantic Wolf"/>
                <br/>
                <span className="skill-text">Gigantic Wolf</span>
              </td>
              <td>
                Rare
              </td>
              <td>
                &lt;Human & Werewolf common skill&gt;
                <br/>Attacks nearby targets and applies Anxiety on them.
                <br/>The attacked target's P./ M. Def. is decreased.
                <br/>The [Barghast] buff effect is applied to you, which restores HP and increases Debuff/ Anomaly Resistance.
                <br/><br/>This skill can be enchanted.
                <br/>+1: increases attack power / increases number of targets / increases Anxiety duration and activate rate / increases Barghast buff effect / increases P./ M. Def. decrease amount
                <br/>+2: increases attack power / increases attack range / increases Anxiety duration and activate rate / increases Barghast buff effect / increases P./ M. Def. decrease amount
                <br/>+3: increases attack power / increases number of attacks / increases Anxiety duration and activate rate / increases Barghast buff effect / increases P./ M. Def. decrease amount
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/07/image_88407.png" alt="Diving Disarm"/>
                <br/>
                <span className="skill-text">Diving Disarm</span>
              </td>
              <td>
                Rare
              </td>
              <td>
                &lt;Werewolf transformation exclusive skill&gt;
                <br/>Attacks the target and nearby enemies twice.
                <br/>Applies disarm effect to a single target.
                <br/>Applies knockdown effect to multiple targets.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/08/image_88408.png" alt="Lethal Piercing"/>
                <br/>
                <span className="skill-text">Lethal Piercing</span>
              </td>
              <td>
                Rare
              </td>
              <td>
                &lt;Werewolf transformation exclusive skill&gt;
                <br/>Attacks the target.
                <br/>The attacked target's equipped armor (helmet/upper/lower/gloves/boots/shield/sigil) will be damaged with a certain chance.
                <br/>Damaged armor can be repaired through a separate UI. 
                <br/>The attacked target will reiceve the [Protect Piercing] effect, and cannot be targeted by [Lethal Piercing] attacks consecutively. 
                <br/>Only when the [Ancient Force: Master] buff is acquired by a hostile target, the target's protective shield is removed with a 50% chance.
              </td>
            </tr>
            </tbody>
        </table>
        <div className="article-text4">
          Buff Skills
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
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/90/image_88490.png" alt="Ultimate Skin"/>
                <br/>
                <span className="skill-text">Ultimate Skin</span>
              </td>
              <td>
                Enhanced
              </td>
              <td>
                &lt;Human & Werewolf common skill&gt;
                <br/>Ultimate Skill
                <br/>Increases P./ M. Def.
                <br/>Increases Debuff/ Anomaly Resistance
                <br/>Applies Sturdy Body effect (20%)
                <br/>Resist provocation effect with a 50% chance
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/74/image_88474.png" alt="Howling"/>
                <br/>
                <span className="skill-text">Howling</span>
              </td>
              <td>
                Enhanced
                <br/>(Lv2 and higher)
              </td>
              <td>
                &lt;Human & Werewolf common skill&gt;
                <br/>Lv1: increases P. Atk., recovers MP when killing an enemy
                <br/>Lv2: increases Max HP, increases P. Atk., recovers MP when killing an enemy
                <br/>Lv3: increases Max HP, increases P. Atk., recovers MP when killing an enemy, increases All Critical Rate, increases All Critical Damage
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/75/image_88475.png" alt="High Speed"/>
                <br/>
                <span className="skill-text">High Speed</span>
              </td>
              <td>
                Superior
              </td>
              <td>
                &lt;Human & Werewolf common skill&gt;
                <br/>Instantly recovers 30% HP
                <br/>Increases Speed
                <br/>Increases Max Speed
                <br/>Increases Suppression/ Hold/ Pull Resistance
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/86/image_88486.png" alt="Insanity"/>
                <br/>
                <span className="skill-text">Insanity</span>
              </td>
              <td>
                Superior
              </td>
              <td>
                &lt;Werewolf transformation exclusive skill&gt;
                <br/>Increases P. Atk. / Speed
                <br/>Increased P. Skill Power / P. Skill Critical Damage
                <br/>Additional attacks are dealt when attacking a target affected with Claw Mark
              </td>
            </tr>
          </tbody>
        </table>
        <div className="article-text4">
          Passive Skills
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
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/51/image_88451.png" alt="Weapon Mastery"/>
                <br/>
                <span className="skill-text">Weapon Mastery</span>
              </td>
              <td>
                -
              </td>
              <td>
                Effect increases when using a fist weapon
                <br/>Increases P. Atk.
                <br/><br/>On Lv5 or higher, the following effects are additionally applied:
                <br/>Increases Atk. Spd.
                <br/>Increases P. Skill Power
                <br/>Increases Knockback/ Fear Atk. Rate
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/52/image_88452.png" alt="Armor Mastery"/>
                <br/>
                <span className="skill-text">Armor Mastery</span>
              </td>
              <td>
                -
              </td>
              <td>
                Effect increases when equipped with light armor
                <br/>Increases Max HP
                <br/>Increases P./ M. Def.
                <br/><br/>On Lv5 or higher, the following effects are additionally applied:
                <br/>Decreases Received damage
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/61/image_88461.png" alt="Lupine Health"/>
                <br/>
                <span className="skill-text">Lupine Health</span>
              </td>
              <td>
                -
              </td>
              <td>
                Increases Max HP
                <br/>(replaces the Mount Glorious Steed skill)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/62/image_88462.png" alt="Lupine Movement"/>
                <br/>
                <span className="skill-text">Lupine Movement</span>
              </td>
              <td>
                -
              </td>
              <td>
                Increases Speed
                <br/>(replaces the Mount Shining Lady skill)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/55/image_88455.png" alt="Night Hunter"/>
                <br/>
                <span className="skill-text">Night Hunter</span>
              </td>
              <td>
                -
              </td>
              <td>
                &lt;Automatically acquired when creating the character&gt;
                <br/>Increases P. Atk. and Atk. Spd.
                <br/>Increases P. Critical Rate and P. Critical Damage.
                <br/>During the night, STR/ DEX +1.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/53/image_88453.png" alt="Awaken Potential"/>
                <br/>
                <span className="skill-text">Awaken Potential</span>
              </td>
              <td>
                -
              </td>
              <td>
                &lt;Automatically acquired after 2nd class change&gt;
                <br/>Max WP +1000
                <br/>Increases P. Atk., increases Speed
                <br/><br/>When using skills in human form, WP are obtained
                <br/>When killing a target in human form, WP are obtained
                <br/>When WP gauge is full, automatically transforms into 'Werewolf'.
                <br/>All WP is consumed during transformation.
                <br/><br/>&lt;Werewolf transformation effect&gt;
                <br/>Decreases Received damage
                <br/>Increases Speed
                <br/>Increases Fear Atk. Rate & Fear Resistance
                <br/>Continuously recovers MP
                <br/>Instantly recovers MP
                <br/><br/>Skill changes when transformed: 
                <br/>Straight → Double Claw
                <br/>Uppercut → Rising Claw
                <br/>Down Crush → Cyclone Claw
                <br/>Speed Charge → Luna Rampage
                <br/><br/>The following skills can be used when transformed:
                <br/>Insanity
                <br/>Lethal Piercing
                <br/>Devastating Disarm
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/54/image_88454.png" alt="Evolving Potential"/>
                <br/>
                <span className="skill-text">Evolving Potential</span>
              </td>
              <td>
                -
              </td>
              <td>
                &lt;Automatically acquired after 3rd class change&gt;
                <br/>Increases P. Atk., P./ M. Def.
                <br/>Applies Claw Mark when transformed into a werewolf.
                <br/><br/>Claw Mark effect
                <br/>Stage 1: P. Def. -30%, damage limited to 1% of Max HP (character only)
                <br/>Stage 2: P. Def. -30%, damage limited to 2% of Max HP (character only)
                <br/>Stage 3: P. Def. -30%, damage limited to 5% of Max HP (character only)
                <br/><br/>Skills that can apply Claw Marks
                <br/>- Double Claw
                <br/>- Rising Claw
                <br/>- Spin Claw
                <br/>- Luna Rampage
                <br/>- Lethal Piercing
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/56/image_88456.png" alt="High Agility"/>
                <br/>
                <span className="skill-text">High Agility</span>
              </td>
              <td>
                Enhanced
              </td>
              <td>
                Effect applies when equipped with light armor:
                <br/>Decreases All received Critical Rate.
                <br/>Increases Skill Evasion.
                <br/>Increases Atk. Spd. and Speed.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/57/image_88457.png" alt="Savage Instinct"/>
                <br/>
                <span className="skill-text">Savage Instinct</span>
              </td>
              <td>
                Enhanced
              </td>
              <td>
                This skill can be enchanted to increase P. Atk. and P. Skill Critical Damage.
                <br/><br/>+1: increases P. Atk. / increases P. Skill Critical Damage / increases PvE damage.
                <br/>+2: increases P. Atk. / increases P. Skill Critical Damage / increases PvE damage.
                <br/>+3: increases P. Atk. / increases P. Skill Critical Damage / increases PvE damage.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/99/image_88499.png" alt="Wolf Mastery"/>
                <br/>
                <span className="skill-text">Wolf Mastery</span>
              </td>
              <td>
                Enhanced
              </td>
              <td>
                Enhances the effects of the Uppercut and Rising Claw skills.
                <br/><br/>Uppercut: increases number of attacks.
                <br/>Rising Claw: increased number of attacks and number of targets.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/58/image_88458.png" alt="Strong Body"/>
                <br/>
                <span className="skill-text">Strong Body</span>
              </td>
              <td>
                Superior
              </td>
              <td>
                This skill can be enchanted to increase Max HP/MP and decrease Received damage.
                <br/><br/>+1: increases Max HP/MP / increases P. Atk. / increases P./ M. Def. / decreases Received damage.
                <br/>+2: increases Max HP/MP / increases P. Atk. / increases P./ M. Def. / decreases Received damage.
                <br/>+3: increases Max HP/MP / increases P. Atk. / increases P./ M. Def. / decreases Received damage.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/59/image_88459.png" alt="Physical Might"/>
                <br/>
                <span className="skill-text">Physical Might</span>
              </td>
              <td>
                Rare
              </td>
              <td>
                Increases P. Atk., Atk. Spd., Ranged Atk. Skill Damage, P. Skill Damage.
                <br/>Enhances the effects of the Down Crush and Cyclone Claw skills.
                <br/>Down Crush: increases attack power, number of attacks and attack range.
                <br/>Cyclone Claw: increases attack power, number of attacks and attack range.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/60/image_88460.png" alt="Ancient Force"/>
                <br/>
                <span className="skill-text">Ancient Force</span>
              </td>
              <td>
                Heroic
              </td>
              <td>
                &lt;Base effect&gt;
                <br/>Increases Max HP, All Critical Rate, All Critical Damage, P. Atk. and Skill Power.
                <br/>When WP gauge is full, automatically transforms into 'Ancient Werewolf'.
                <br/>All WP is consumed during transformation.
                <br/><br/>&lt;Ancient Werewolf transformation effect&gt;
                <br/>Decreases Received damage
                <br/>Increases Speed
                <br/>Increases Fear Atk. Rate & Fear Resistance
                <br/>Continuously recovers MP
                <br/>Immediately upon transforming attacks nearby enemies and recovers 1000 MP
                <br/><br/>Skill changes when transforming:
                <br/>Straight → Double Claw
                <br/>Uppercut → Rising Claw
                <br/>Down Crush → Cyclone Claw
                <br/>Speed Charge → Luna Rampage
                <br/><br/>The following skills can be used when transformed:
                <br/>Insanity
                <br/>Lethal Piercing
                <br/>Devastating Disarm
                <br/><br/>When transformed, 'Ancient Power' buff effect is applied.
                <br/>&lt;Ancient Power effect&gt;
                <br/>Increases PvP damage, increases Unequip Resistance, increases P./ M. Def.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/60/image_88460.png" alt="Ancient Force: Master"/>
                <br/>
                <span className="skill-text">Ancient Force: Master</span>
              </td>
              <td>
                Legendary
              </td>
              <td>
                &lt;Base effect&gt;
                <br/>Increases Max HP, All Critical Rate, All Critical Damage, P. Atk. and Skill Power.
                <br/>When WP gauge is full, automatically transforms into 'Ancient Werewolf: Master'.
                <br/>All WP is consumed during transformation.
                <br/><br/>&lt;Ancient Werewolf transformation effect&gt;
                <br/>Decreases Received damage
                <br/>Increases Speed
                <br/>Increases Fear Atk. Rate & Fear Resistance
                <br/>Continuously recovers MP
                <br/>Immediately upon transforming attacks nearby enemies and recovers 1000 MP
                <br/><br/>Skill changes when transforming:
                <br/>Straight → Double Claw
                <br/>Uppercut → Rising Claw
                <br/>Down Crush → Cyclone Claw
                <br/>Speed Charge → Luna Rampage
                <br/><br/>The following skills can be used when transformed:
                <br/>Insanity
                <br/>Lethal Piercing
                <br/>Devastating Disarm
                <br/><br/>When transformed, 'Ancient Power: Master' buff effect is applied.
                <br/>&lt;Ancient Power: Master effect&gt;
                <br/>Increases PvP damage, increases Unequip Resistance, increases P./ M. Def.
                <br/><br/>When using Lethal Piercing, removes the target's protective shield with a 50% chance.
                <br/>Decreases Luna Infusion cooldown by 50%.
              </td>
            </tr>
            </tbody>
        </table>
        <div className="article-text4">
          Special Skill
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
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/09/image_88409.png" alt="Luna Infusion"/>
                <br/>
                <span className="skill-text">Luna Infusion</span>
              </td>
              <td>
                Rare
              </td>
              <td>
                Instantly transforms into a werewolf.
              </td>
            </tr>
          </tbody>
        </table>
      {/*<div className="article-comments">
        <h2>Comments</h2>
      </div>*/}
    </div>
  );
};
