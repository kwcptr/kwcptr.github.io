import ReactGA from "react-ga4";

export const Article3 = () => {

  ReactGA.send("pageviewarticle3");

  return (
    <div className="news-article">
      <header className="article-header">
        <h1 className="article-title">Class Update: Archers</h1>
        <div className="article-metadata">
          {/* <span className="author">Bona</span> */}
          <span className="date">June 21, 2023</span>
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
              <th>Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/80/image_47380.png" alt="Legendary Archer: Master"/>
                <br/>
                <span className="skill-text">★★★★</span>
                <br/>
                <span className="skill-text">Legendary Archer: Master</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Sagittarius
              </td>
              <td>
                Transforms into a legendary archer.
                <br/><br/>P. Atk. +2000
                <br/>P. Atk. +25%
                <br/>P. Skill Critical Rate +20%
                <br/>P. Skill Critical Damage +20%
                <br/>Max HP +10%
                <br/>Melee Weapon Resistance +10%
                <br/>Pull Atk. Rate +20%
                <br/>PvE damage +10%
                <br/>P. Skill Power +2%
                <br/><br/><span className="skill-text-lightgreen">Skill upgrade</span>
                <br/>Lethal Shot → Legendary Lethal Shot
                <br/>Increases the number of attacks with a certain chance.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/84/image_47384.png" alt="Legendary Archer: Master"/>
                <br/>
                <span className="skill-text">★★★★</span>
                <br/>
                <span className="skill-text">Legendary Archer: Master</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Moonlight Sentinel
              </td>
              <td>
                Transforms into a legendary archer.
                <br/><br/>P. Atk. +2000
                <br/>P. Atk. +25%
                <br/>P. Skill Critical Rate +20%
                <br/>P. Skill Critical Damage +20
                <br/>P. Skill Critical Damage +20%
                <br/>Max HP +10%
                <br/>Melee Weapon Resistance +10%
                <br/>Pull Atk. Rate +20%
                <br/>PvE damage +10%
                <br/><br/><span className="skill-text-lightgreen">Skill upgrade</span>
                <br/>Lethal Shot → Legendary Lethal Shot
                <br/>Increases the number of attacks with a certain chance.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/88/image_47388.png" alt="Legendary Archer: Master"/>
                <br/>
                <span className="skill-text">★★★★</span>
                <br/>
                <span className="skill-text">Legendary Archer: Master</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Ghost Sentinel
              </td>
              <td>
                Transforms into a legendary archer.
                <br/><br/>P. Atk. +2000
                <br/>P. Atk. +25%
                <br/>P. Skill Critical Rate +20%
                <br/>P. Skill Critical Damage +20%
                <br/>Max HP +10%
                <br/>Melee Weapon Resistance +10%
                <br/>Pull Atk. Rate +20%
                <br/>PvE damage +10%
                <br/>Received P. Skill Critical Rate -2%
                <br/><br/><span className="skill-text-lightgreen">Skill upgrade</span>
                <br/>Lethal Shot → Legendary Lethal Shot
                <br/>Increases the number of attacks with a certain chance.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/51/image_47651.png" alt="Legendary Shot" />
                <br/>
                <span className="skill-text">Legendary Shot</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Sagittarius
              </td>
              <td>
                &lt;Skill with fixed cooldown&gt;
                <br/><br/><span className="skill-text-red">Note!</span>
                <br/>Available only while transformed into <span className="skill-text-lightgreen">Legendary Archer: Master</span>.
                <br/><br/>Shoots an arrow imbued with the legendary power.
                <br/>Attacks the target. Power 15,000.
                <br/>Ignores 15% of the target's defense.
                <br/>Critical.
                <br/><br/>Applies <span className="skill-text-midgreen">Sniping Focus</span>.
                <br/><br/><span className="skill-text-midgreen">Sniping Focus effect</span>
                <br/>Duration: 13 sec.
                <br/><br/><span className="skill-text-darkgreen">Base effect</span>
                <br/>P. Skill Power +10%
                <br/>Max HP -30%
                <br/><br/><span className="skill-text-darkgreen">Additional attack effect</span>
                <br/><span className="skill-text-lightgreen">Arrow Focus</span>
                <br/>When using attack skills, triggers <span className="skill-text-midgreen">1 additional attack</span>.
                <br/><br/><span className="skill-text-darkgreen">Special effects</span>
                <br/>Nocks <span className="skill-text-midgreen">5 special arrows</span>.
                <br/>When using attack skills, consumes <span className="skill-text-midgreen">1 special arrow</span>.
                <br/><span className="skill-text-midgreen">Special arrows</span> <span className="skill-text-lightgreen">increase</span> attack accuracy.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/52/image_47652.png" alt="Legendary Shot" />
                <br/>
                <span className="skill-text">Legendary Shot</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Moonlight Sentinel
              </td>
              <td>
                &lt;Skill with fixed cooldown&gt;
                <br/><br/><span className="skill-text-red">Note!</span>
                <br/>Available only while transformed into <span className="skill-text-lightgreen">Legendary Archer: Master</span>.
                <br/><br/>Shoots an arrow imbued with the legendary power.
                <br/>Attacks the target. Power 15,000.
                <br/>Ignores 15% of the target's defense.
                <br/>Critical.
                <br/><br/>Applies <span className="skill-text-midgreen">Moonlight Hurricane</span>.
                <br/><br/><span className="skill-text-midgreen">Moonlight Hurricane effect</span>
                <br/>Duration: 5 sec.
                <br/><br/><span className="skill-text-darkgreen">Base effect</span>
                <br/>P. Skill Power +10%
                <br/>Max HP -30%
                <br/><br/><span className="skill-text-darkgreen">Additional attack effect</span>
                <br/><span className="skill-text-lightgreen">Moonlight Arrow</span>
                <br/>When using attack skills, triggers <span className="skill-text-midgreen">1 additional attack</span>.
                <br/><br/><span className="skill-text-darkgreen">Special effects</span>
                <br/>While the moon is full:
                <br/>For 5 sec., increases <span className="skill-text-lightgreen">Moonlight Arrow's</span> critical rate.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/53/image_47653.png" alt="Legendary Shot" />
                <br/>
                <span className="skill-text">Legendary Shot</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Ghost Sentinel
              </td>
              <td>
                &lt;Skill with fixed cooldown&gt;
                <br/><br/><span className="skill-text-red">Note!</span>
                <br/>Available only while transformed into <span className="skill-text-lightgreen">Legendary Archer: Master</span>.
                <br/><br/>Shoots an arrow imbued with the legendary power.
                <br/>Attacks the target. Power 15,000.
                <br/>Ignores 15% of the target's defense.
                <br/>Critical.
                <br/><br/>Applies <span className="skill-text-midgreen">Fatal Bow</span>.
                <br/><br/><span className="skill-text-midgreen">Fatal Bow effect</span>
                <br/>Duration: 10 sec.
                <br/><br/><span className="skill-text-darkgreen">Base effect</span>
                <br/>P. Skill Power +10%
                <br/>Max HP -30%
                <br/><br/><span className="skill-text-darkgreen">Additional attack effect</span>
                <br/><span className="skill-text-lightgreen">Fatal Break</span>
                <br/>When using attack skills, triggers <span className="skill-text-midgreen">1 additional attack</span>.
                <br/><br/><span className="skill-text-darkgreen">Special effects</span>
                <br/>When using attack skills, ignores the target's <span className="skill-text-lightgreen">barrier effects</span> and <span className="skill-text-lightgreen">received damage limit</span>.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/81/image_47681.png" alt="Target Lock" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Target Lock</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Sagittarius
              </td>
              <td>
                &lt;Skill with fixed cooldown&gt;
                <br/><br/>Activates the single-target aiming mode.
                <br/>Cannot be used when <span className="skill-text-midgreen">Ultimate Evasion</span> is active.
                <br/><br/>&lt;<span className="skill-text-midgreen">Base effect</span>&gt;
                <br/>When using a bow, P. Atk. +10%
                <br/>Received damage +30%
                <br/>Attack range +300
                <br/>Skill range +300
                <br/>Speed +30
                <br/><br/>&lt;<span className="skill-text-midgreen">Special effects</span>&gt;
                <br/>Changes the following skills making them single-target:
                <br/><br/>Spiral Shot → Spiral Piercing
                <br/>Vortex Shot → Vortex Piercing
                <br/>Incendiary Shot → Incendiary Piercing
                <br/>Arrow Rain → Piercing
                <br/>Flame Arrow Rain → Flame Piercing
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/82/image_47682.png" alt="Target Lock" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Target Lock</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Moonlight Sentinel
              </td>
              <td>
                &lt;Skill with fixed cooldown&gt;
                <br/><br/>Activates the single-target aiming mode.
                <br/>Cannot be used when <span className="skill-text-midgreen">Ultimate Evasion</span> is active.
                <br/><br/>&lt;<span className="skill-text-midgreen">Base effect</span>&gt;
                <br/>When using a bow, P. Atk. +10%
                <br/>Received damage +30%
                <br/>Attack range +300
                <br/>Skill range +300
                <br/>Speed +20
                <br/><br/>&lt;<span className="skill-text-midgreen">Special effects</span>&gt;
                <br/>Changes the following skills making them single-target:
                <br/><br/>Spiral Shot → Spiral Piercing
                <br/>Vortex Shot → Vortex Piercing
                <br/>Freezing Shot → Freezing Piercing
                <br/>Light Arrow Rain → Light Piercing
                <br/>Water Arrow Rain → Water Piercing
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/83/image_47683.png" alt="Target Lock" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Target Lock</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Ghost Sentinel
              </td>
              <td>
                &lt;Skill with fixed cooldown&gt;
                <br/><br/>Activates the single-target aiming mode.
                <br/>Cannot be used when <span className="skill-text-midgreen">Ultimate Evasion</span> is active.
                <br/><br/>&lt;<span className="skill-text-midgreen">Base effect</span>&gt;
                <br/>When using a bow, P. Atk. +10%
                <br/>Received damage +30%
                <br/>Attack range +500
                <br/>Skill range +500
                <br/>Speed +20
                <br/><br/>&lt;<span className="skill-text-midgreen">Special effects</span>&gt;
                <br/>Changes the following skills making them single-target:
                <br/><br/>Spiral Shot → Spiral Piercing
                <br/>Vortex Shot → Vortex Piercing
                <br/>Wind Shot → Wind Piercing
                <br/>Dark Arrow Rain → Dark Piercing
                <br/>Storm Arrow Rain → Storm Piercing
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/08/image_47608.png" alt="Spiral Shot" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Spiral Shot</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
                &lt;<span className="skill-text-darkgreen">Pull/ effect combo skill</span>&gt;
                <br/><br/>Shoots an arrow imbued with strong wind energy.
                <br/>Attacks the target with 6600 power.
                <br/><br/>Ignores 5% of the target's defense.
                <br/>Critical.
                <br/><br/>Pulls nearby enemies to the target.
                <br/><br/>Applies <span className="skill-text-lightgreen">Gust</span> to the target.
                <br/><br/>&lt;If <span className="skill-text-lightgreen">Fire (Flame Arrow Rain)</span> is active&gt;
                <br/>The following effect is applied:
                <br/><span className="skill-text-lightgreen">Flame Gust (damage over time)</span>
                <br/><br/>&lt;If <span className="skill-text-lightgreen">Moisture (Water Arrow Rain)</span> is active&gt;
                <br/>The following effect is applied:
                <br/><span className="skill-text-lightgreen">Water Dust (damage over time)</span>
                <br/><br/>&lt;If <span className="skill-text-lightgreen">Flurry (Storm Arrow Rain)</span> is active&gt;
                <br/>The following effect is applied:
                <br/><span className="skill-text-lightgreen">Storm (damage over time)</span>
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/04/image_47404.png" alt="Flame Arrow Rain" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Flame Arrow Rain</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Arrow Rain</span>
              </td>
              <td>
                Sagittarius
              </td>
              <td>
                &lt;<span className="skill-text-darkgreen">Effect combo skill</span>&gt;
                <br/><br/>Shoots an arrow imbued with fire power that deals damage to the target and nearby enemies.
                <br/>Power 13,300.
                <br/><br/>Applies <span className="skill-text-lightgreen">Arrow Break</span> to the target.
                <br/><br/><span className="skill-text-midgreen">Arrow Break</span>
                <br/>Duration: 10 sec.
                <br/><br/>P. Atk. -10%
                <br/>M. Atk. -10%
                <br/>P. Def. -10%
                <br/>M. Def. -10%
                <br/><br/>Ignores 10% of the target's defense.
                <br/>Critical.
                <br/><br/>Applies <span className="skill-text-lightgreen">Fire</span> to the target.
                <br/><br/>&lt;If <span className="skill-text-lightgreen">Gust (Spiral Shot)</span> is active&gt;
                <br/>The following effect is applied:
                <br/><span className="skill-text-lightgreen">Flame Gust (damage over time)</span>
                <br/><br/>&lt;If <span className="skill-text-lightgreen">Ignite (Incendiary Shot)</span> is active&gt;
                <br/>The following effect is applied:
                <br/><span className="skill-text-midgreen">Burning Flames (damage depends on P. Atk.)</span>
                <br/><br/>(Description based on Lv. 2)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/06/image_47406.png" alt="Water Arrow Rain" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Water Arrow Rain</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Light Arrow Rain</span>
              </td>
              <td>
                Moonlight Sentinel
              </td>
              <td>
                &lt;<span className="skill-text-darkgreen">Effect combo skill</span>&gt;
                <br/><br/>Shoots an arrow imbued with water power that deals damage to the target and nearby enemies.
                <br/>Power 13,300.
                <br/><br/>Applies <span className="skill-text-lightgreen">Arrow Break</span> to the target.
                <br/><br/><span className="skill-text-midgreen">Arrow Break</span>
                <br/>Duration: 10 sec.
                <br/><br/>P. Atk. -15%
                <br/>M. Atk. -15%
                <br/>P. Def. -15%
                <br/>M. Def. -15%
                <br/><br/>Ignores 10% of the target's defense.
                <br/>Critical.
                <br/><br/>Applies <span className="skill-text-lightgreen">Moisture</span> to the target.
                <br/><br/>&lt;If <span className="skill-text-lightgreen">Gust (Spiral Shot)</span> is active&gt;
                <br/>The following effect is applied:
                <br/><span className="skill-text-lightgreen">Water Dust (damage over time)</span>
                <br/><br/>&lt;If <span className="skill-text-lightgreen">Icy Air (Freezing Shot)</span> is active&gt;
                <br/>The following effect is applied:
                <br/><span className="skill-text-midgreen">Cold Wave (damage depends on P. Atk.)</span>
                <br/><br/>(Description based on Lv. 2)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/08/image_47408.png" alt="Storm Arrow Rain" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Storm Arrow Rain</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Dark Arrow Rain</span>
              </td>
              <td>
                Ghost Sentinel
              </td>
              <td>
                &lt;<span className="skill-text-darkgreen">Effect combo skill</span>&gt;
                <br/><br/>Shoots an arrow imbued with storm power that deals damage to the target and nearby enemies.
                <br/>Power 13,300.
                <br/><br/>Applies <span className="skill-text-lightgreen">Arrow Break</span> to the target.
                <br/><br/><span className="skill-text-midgreen">Arrow Break</span>
                <br/>Duration: 10 sec.
                <br/><br/>P. Atk. -15%
                <br/>M. Atk. -15%
                <br/>P. Def. -15%
                <br/>M. Def. -15%
                <br/><br/>Ignores 10% of the target's defense.
                <br/>Critical.
                <br/><br/>Applies <span className="skill-text-lightgreen">Flurry</span> to the target.
                <br/><br/>&lt;If <span className="skill-text-lightgreen">Gust (Spiral Shot)</span> is active&gt;
                <br/>The following effect is applied:
                <br/><span className="skill-text-lightgreen">Storm (damage over time)</span>
                <br/><br/>&lt;If <span className="skill-text-lightgreen">Breeze (Wind Shot)</span> is active&gt;
                <br/>The following effect is applied:
                <br/><span className="skill-text-midgreen">Tearing Wind (damage depends on P. Atk.)</span>
                <br/><br/>(Description based on Lv. 2)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/05/image_47605.png" alt="Incendiary Shot" />
                <br/>
                <span className="skill-text">★★</span>
                <br/>
                <span className="skill-text">Incendiary Shot</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Vortex Shot</span>
              </td>
              <td>
                Sagittarius
              </td>
              <td>
                &lt;<span className="skill-text-darkgreen"></span>Effect combo skill&gt;
                <br/>Shoots an arrow imbued with fire energy that deals damage to the target and nearby enemies.
                <br/>Power 10,000.
                <br/><br/>Ignores 5% of the target's defense.
                <br/>Critical.
                <br/><br/>Applies <span className="skill-text-lightgreen">Ignite</span> to the target.
                <br/><br/>&lt;If <span className="skill-text-lightgreen">Fire (Flame Arrow Rain)</span> is active&gt;
                <br/>The following effect is applied:
                <br/><span className="skill-text-lightgreen">Burning Flames (damage depends on P. Atk.)</span>
                <br/><br/>&lt;If <span className="skill-text-lightgreen">Flame Gust (Spiral Shot + Flame Arrow Rain)</span> is active&gt;
                <br/>The following effect is applied:
                <br/><span className="skill-text-lightgreen">Explosion (damage depends on P. Atk.)</span>
                <br/><br/>(Description based on Lv. 5)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/06/image_47606.png" alt="Freezing Shot" />
                <br/>
                <span className="skill-text">★★</span>
                <br/>
                <span className="skill-text">Freezing Shot</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Vortex Shot</span>
              </td>
              <td>
                Moonlight Sentinel
              </td>
              <td>
                &lt;<span className="skill-text-darkgreen"></span>Effect combo skill&gt;
                <br/><br/>Shoots an arrow imbued with cold energy that deals damage to the target and nearby enemies.
                <br/>Power 10,000.
                <br/><br/>Ignores 5% of the target's defense.
                <br/>Critical.
                <br/><br/>Applies <span className="skill-text-lightgreen">Icy Air</span> to the target.
                <br/><br/>&lt;If <span className="skill-text-lightgreen">Moisture (Water Arrow Rain)</span> is active&gt;
                <br/>The following effect is applied:
                <br/><span className="skill-text-lightgreen">Cold Wave (damage depends on P. Atk.)</span>
                <br/><br/>&lt;If <span className="skill-text-lightgreen">Water Dust (Spiral Shot + Water Arrow Rain)</span> is active&gt;
                <br/>The following effect is applied:
                <br/><span className="skill-text-lightgreen">Snow Storm (damage depends on P. Atk.)</span>
                <br/><br/>(Description based on Lv. 5)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/07/image_47607.png" alt="Wind Shot" />
                <br/>
                <span className="skill-text">★★</span>
                <br/>
                <span className="skill-text">Wind Shot</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Vortex Shot</span>
              </td>
              <td>
                Ghost Sentinel
              </td>
              <td>
                &lt;<span className="skill-text-darkgreen"></span>Effect combo skill&gt;
                <br/><br/>Shoots an arrow imbued with wind energy that deals damage to the target and nearby enemies.
                <br/>Power 10,000.
                <br/><br/>Ignores 5% of the target's defense.
                <br/>Critical.
                <br/><br/>Applies <span className="skill-text-lightgreen">Breeze</span> to the target.
                <br/><br/>&lt;If <span className="skill-text-lightgreen">Flurry (Storm Arrow Rain)</span> is active&gt;
                <br/>The following effect is applied:
                <br/><span className="skill-text-lightgreen">Tearing Wind (damage depends on P. Atk.)</span>
                <br/><br/>&lt;If <span className="skill-text-lightgreen">Storm (Spiral Shot + Storm Arrow Rain)</span> is active&gt;
                <br/>The following effect is applied:
                <br/><span className="skill-text-lightgreen">Strong Typhoon (damage depends on P. Atk.)</span>
                <br/><br/>(Description based on Lv. 5)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/03/image_47603.png" alt="Binding Shot" />
                <br/>
                <span className="skill-text">★★</span>
                <br/>
                <span className="skill-text">Binding Shot</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Holding Shot</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
                &lt;Hold skill&gt;
                <br/><br/>Shoots an arrow that binds an enemy.
                <br/>Attacks with 15,000 power.
                <br/><br/>Ignores 10% of the target's defense.
                <br/>Critical.
                <br/><br/>For 5 sec., inflicts Hold on the target.
                <br/><br/>(Description based on Lv. 8)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/02/image_47602.png" alt="Triple Shot" />
                <br/>
                <span className="skill-text">★</span>
                <br/>
                <span className="skill-text">Triple Shot</span>
                <br/>
                <span className="skill-text2">NEW</span>
                <br/><br/><span className="skill-text3">Replaces:</span>
                <br/><span className="skill-text3">Power Strike</span>
                <br/><span className="skill-text3">Mortal Blow</span>
                <br/><span className="skill-text3">Power Shot</span>
                <br/><span className="skill-text3">Double Shot</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
                Shoots 3 arrows one by one.
                <br/><br/>Makes 3 attacks. Power 4301.
                <br/><br/>Critical.
                <br/><br/>(Description based on Lv. 10)
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/71/image_47671.png" alt="Battle Senses" />
                <br/>
                <span className="skill-text">★</span>
                <br/>
                <span className="skill-text">Battle Senses</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Sagittarius
              </td>
              <td>
                On a critical attack and using Double Shot/ Triple Shot/ Lethal Shot:
                <br/>Recovers 30 MP.
                <br/>Trigger cooldown: 10 sec.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/73/image_47673.png" alt="Elven Senses" />
                <br/>
                <span className="skill-text">★</span>
                <br/>
                <span className="skill-text">Elven Senses</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Moonlight Sentinel
              </td>
              <td>
                On a critical attack and using Double Shot/ Triple Shot/ Lethal Shot:
                <br/>Recovers 30 MP.
                <br/>Trigger cooldown: 10 sec.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/87/image_45387.png" alt="Dark Elven Senses" />
                <br/>
                <span className="skill-text">★</span>
                <br/>
                <span className="skill-text">Dark Elven Senses</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Ghost Sentinel
              </td>
              <td>
                On a critical attack and using Double Shot/ Triple Shot/ Lethal Shot:
                <br/>Recovers 30 MP.
                <br/>Trigger cooldown: 10 sec.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/90/image_990.png" alt="Holding Shot" />
                <br/>
                <span className="skill-text">Holding Shot</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
                &lt;Hold skill&gt;
                <br/><br/>Shoots an arrow that binds the enemy.
                <br/>Attacks with 10500 power.
                <br/>For 5 sec., inflicts Hold on the target.
                <br/>Critical.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/01/image_47601.png" alt="Vortex Shot" />
                <br/>
                <span className="skill-text">Vortex Shot</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
                Shoots a spinning arrow.
                <br/>Attacks the target and nearby enemies. Power 3906.
                <br/><br/>Critical.
                <br/><br/>(Description based on Lv. 5)
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/71/image_771.png" alt="Arrow Rain" />
                <br/>
                <span className="skill-text">Arrow Rain</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Sagittarius
              </td>
              <td>
                Showers enemies with arrows.
                <br/><br/>Attacks the target and nearby enemies. Power 8500.
                <br/><br/>Ignores 5% of the target's defense.
                <br/>Critical.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/72/image_772.png" alt="Light Arrow Rain" />
                <br/>
                <span className="skill-text">Light Arrow Rain</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Moonlight Sentinel
              </td>
              <td>
                Showers enemies with light arrows.
                <br/><br/>Attacks the target and nearby enemies. Power 8500.
                <br/><br/>Ignores 5% of the target's defense.
                <br/>Critical.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/73/image_773.png" alt="Dark Arrow Rain" />
                <br/>
                <span className="skill-text">Dark Arrow Rain</span>
                <br/>
                <span className="skill-text2">NEW</span>
              </td>
              <td>
                Ghost Sentinel
              </td>
              <td>
                Showers enemies with dark arrows.
                <br/><br/>Attacks the target and nearby enemies. Power 8500.
                <br/><br/>Ignores 5% of the target's defense.
                <br/>Critical.
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
              <th>Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/80/image_47380.png" alt="Legendary Archer" />
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/84/image_47384.png" alt="Legendary Archer" />
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/88/image_47388.png" alt="Legendary Archer" />
                <br/>
                <span className="skill-text">★★★★</span>
                <br/>
                <span className="skill-text">Legendary Archer</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
                PvE damage bonus +5% effect is added.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/96/image_47396.png" alt="True Aim" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">True Aim</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
              Shock Atk. Rate bonus has been removed.
              <br/>Suppression Atk. Rate bonus has been added.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/05/image_47405.png" alt="Flame Arrow" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Flame Arrow</span>
              </td>
              <td>
                Sagittarius
              </td>
              <td>
                Has been replaced by the Flame Arrow Rain skill.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/07/image_47407.png" alt="Arrow Shower" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Arrow Shower</span>
              </td>
              <td>
                Moonlight Sentinel
              </td>
              <td>
                Has been replaced by the Water Arrow Rain skill.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/09/image_47409.png" alt="Piercing Arrow" />
                <br/>
                <span className="skill-text">★★★</span>
                <br/>
                <span className="skill-text">Piercing Arrow</span>
              </td>
              <td>
                Ghost Sentinel
              </td>
              <td>
                Has been replaced by the Storm Arrow Rain skill.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/17/image_47417.png" alt="Dexterous Body" />
                <br/>
                <span className="skill-text">★★</span>
                <br/>
                <span className="skill-text">Dexterous Body</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
                When enchanting the skill, the DEX required values are reduced.
                <br/>Hold/Fear Atk. Rate bonus effects have been added.
                <br/>The existing Stun Shot/Soul Panic Shot enhancement effect has been removed.
                <br/>The Received P. Skill Critical Rate/Damage reduction effects have been changed for Received Skill Critical Rate/Damage reduction.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/00/image_47400.png" alt="Thorn Shot" />
                <br/>
                <span className="skill-text">★★</span>
                <br/>
                <span className="skill-text">Thorn Shot</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
                The target's Speed reduction value has been changed from -30% to -40.
                <br/>Lv. 4-9 have been added.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/11/image_111.png" alt="Ultimate Evasion" />
                <br/>
                <span className="skill-text">★</span>
                <br/>
                <span className="skill-text">Ultimate Evasion</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
                M. Evasion and M. Skill Evasion effects have been added.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/17/image_417.png" alt="Pain of Sagittarius" />
                <br/>
                <span className="skill-text">★</span>
                <br/>
                <span className="skill-text">Pain of Sagittarius</span>
              </td>
              <td>
                Sagittarius
              </td>
              <td>
                Lv. 8 skill has been replaced by Battle Senses.
                <br/>Lv. 1-7 skill has been deleted.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/71/image_171.png" alt="Esprit" />
                <br/>
                <span className="skill-text">★</span>
                <br/>
                <span className="skill-text">Esprit</span>
              </td>
              <td>
                Moonlight Sentinel
              </td>
              <td>
                Lv. 9 skill has been replaced by Elven Senses.
                <br/>Lv. 1-8 skill has been deleted.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/87/image_45387.png" alt="Dark Sense" />
                <br/>
                <span className="skill-text">★</span>
                <br/>
                <span className="skill-text">Dark Sense</span>
              </td>
              <td>
                Ghost Sentinel
              </td>
              <td>
                Has been replaced by Dark Elven Senses.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/22/image_47422.png" alt="Stun Shot" />
                <br/>
                <span className="skill-text">Stun Shot</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
                The skill has been deleted.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/43/image_343.png" alt="Lethal Shot" />
                <br/>
                <span className="skill-text">Lethal Shot</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
                The shield defense ignore effect has been removed.
                <br/>The defense ignore effect has been increased from 5% to 10%.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/71/image_771.png" alt="Flame Hawk" />
                <br/>
                <span className="skill-text">Flame Hawk</span>
              </td>
              <td>
                Sagittarius
              </td>
              <td>
                Has been replaced by the Arrow Rain skill.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/72/image_772.png" alt="Arrow Rain" />
                <br/>
                <span className="skill-text">Arrow Rain</span>
              </td>
              <td>
                Moonlight Sentinel
              </td>
              <td>
                Has been replaced by the Light Arrow Rain skill.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/73/image_773.png" alt="Ghost Piercing" />
                <br/>
                <span className="skill-text">Ghost Piercing</span>
              </td>
              <td>
                Ghost Sentinel
              </td>
              <td>
                Has been replaced by the Dark Arrow Rain skill.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/54/image_354.png" alt="Hamstring Shot" />
                <br/>
                <span className="skill-text">Hamstring Shot</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
                The target's Speed reduction value has been changed from -30% to -30.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/90/image_990.png" alt="Death Sting" />
                <br/>
                <span className="skill-text">Death Sting</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
                Has been replaced by the Holding Shot skill.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/24/image_24.png" alt="Burst Shot" />
                <br/>
                <span className="skill-text">Burst Shot</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
              </td>
              <td>
                Has been replaced by the Vortex Shot skill.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/14/image_314.png" alt="Fatal Counter" />
                <br/>
                <span className="skill-text">Fatal Counter</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
                Has been replaced by the Vortex Shot skill.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/15/image_47415.png" alt="Archer's Armor Mastery" />
                <br/>
                <span className="skill-text">Archer's Armor Mastery</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
                The P. Def value has been increased.
                <br/>The Received P. Critical Rate reduction effect has been changed for All received Critical Rate reduction.
                <br/>Skill Power bonus effect has been added.
                <br/>Lv. 14-18 have been added.
              </td>
            </tr>
                        <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/19/image_19.png" alt="Double Shot" />
                <br/>
                <span className="skill-text">Double Shot</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
                The number of attacks has been increased from 1 to 2.
              </td>
            </tr>
            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/skill/15/image_415.png" alt="Spirit of Sagittarius" />
                <br/>
                <span className="skill-text">Spirit of Sagittarius</span>
              </td>
              <td>
                Sagittarius
                <br/>Moonlight Sentinel
                <br/>Ghost Sentinel
              </td>
              <td>
                The skill has been renamed to Spirit of Archer.
              </td>
            </tr>
          </tbody>
        </table>

      </div>
      {/*<div className="article-comments">
        <h2>Comments</h2>
      </div>*/}
    </div>
  );
};
