import ReactGA from "react-ga4";

export const Article8 = () => {

  ReactGA.send("pageviewarticle7");

  return (
    <div className="news-article">
      <header className="article-header">
        <h1 className="article-title">Dolls</h1>
        <div className="article-metadata">
          {/* <span className="author">Bona</span> */}
          {/* <span className="date">November 16, 2024</span> */}
        </div>
      </header>
      <div className="table-of-contents">
        <h2>Contents</h2>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#enchanting-dolls">Enchanting Dolls</a></li>
          <li><a href="#dolls-collections">Dolls Collections</a></li>
        </ul>
      </div>
      <div id="overview" className="article-text5">
        Overview
      </div>
      <div className="article-text">
        — Effects of dolls of different grades but with the same name do not stack; the higher-grade doll's effect takes precedence.
      </div>
      <div className="article-table-container">
        <table className="article-table2">
          <thead>
            <tr>
              <th>Doll</th>
              <th style={{ color: '#000000a6' }}>Common</th>
              <th style={{ color: '#2dc26b' }}>Enhanced</th>
              <th style={{ color: '#e67e23' }}>Superior</th>
              <th style={{ color: '#3598db' }}>Rare</th>
              <th style={{ color: '#e03e2d' }}>Heroic</th>
              <th style={{ color: '#b96ad9' }}>Legendary</th>
              <th style={{ color: '#f1c40f' }}>Mythic</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/deiman.png" alt="" />
                <br />
                <span className="skill-text">Deiman Doll</span>
              </td>
              <td>
                Knockback Resistance +1%
              </td>
              <td>
                Knockback Resistance +2%
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/satina.png" alt="" />
                <br />
                <span className="skill-text">Satina Doll</span>
              </td>
              <td>
                Imprisonment Resistance +1%
              </td>
              <td>
                Imprisonment Resistance +2%
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/ryuminir.png" alt="" />
                <br />
                <span className="skill-text">Ryuminir Doll</span>
              </td>
              <td>
                Hold Resistance +1%
              </td>
              <td>
                Hold Resistance +2%
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/aizen-kelsour.png" alt="" />
                <br />
                <span className="skill-text">Aizen Kelsour Doll</span>
              </td>
              <td>
                Suppression Resistance +1%
              </td>
              <td>
                Suppression Resistance +2%
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/princess-molrang.png" alt="Elemental Bolt" />
                <br />
                <span className="skill-text">Princess Molrang Doll</span>
              </td>
              <td>
                Speed +1
              </td>
              <td>
                Speed +2
              </td>
              <td>
                HP Recovery Potions' Effect +50<br />Speed +5
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/king-ignis.png" alt="" />
                <br />
                <span className="skill-text">King Ignis Doll</span>
              </td>
              <td>
                Fire Attack +10<br />P. Atk. +50
              </td>
              <td>
                Fire Attack +20<br />P. Atk. +100
              </td>
              <td>
                Fire Attack +30<br />P. Atk. +150
              </td>
              <td>
                Fire Attack +40<br />P. Atk. +200
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/queen-nebula.png" alt="" />
                <br />
                <span className="skill-text">Queen Nebula Doll</span>
              </td>
              <td>
                Water Attack +10<br />M. Atk. +50
              </td>
              <td>
                Water Attack +20<br />M. Atk. +100
              </td>
              <td>
                Water Attack +30<br />M. Atk. +150
              </td>
              <td>
                Water Attack +40<br />M. Atk. +200
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/king-procella.png" alt="" />
                <br />
                <span className="skill-text">King Procella Doll</span>
              </td>
              <td>
                Wind Attack +10<br />M. Def. +50
              </td>
              <td>
                Wind Attack +20<br />M. Def. +100
              </td>
              <td>
                Wind Attack +30<br />M. Def. +150
              </td>
              <td>
                Wind Attack +40<br />M. Def. +200
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/king-petram.png" alt="" />
                <br />
                <span className="skill-text">King Petram Doll</span>
              </td>
              <td>
                Earth Attack +10<br />P. Def. +50
              </td>
              <td>
                Earth Attack +20<br />P. Def. +100
              </td>
              <td>
                Earth Attack +30<br />P. Def. +150
              </td>
              <td>
                Earth Attack +40<br />P. Def. +200
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/tiron.png" alt="" />
                <br />
                <span className="skill-text">Tiron Doll</span>
              </td>
              <td>
                Max HP +100<br />Max MP +100<br />Imprisonment Atk. Rate +1%
              </td>
              <td>
                Max HP +200<br />Max MP +200<br />Imprisonment Atk. Rate +2%
              </td>
              <td>
                Max HP +300<br />Max MP +300<br />Imprisonment Atk. Rate +3%
              </td>
              <td>
                Max HP +400<br />Max MP +400<br />Imprisonment Atk. Rate +4%
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/anakim.png" alt="" />
                <br />
                <span className="skill-text">Anakim Doll</span>
              </td>
              <td>
                M. Atk. +500<br />Hold Atk. Rate +1%
              </td>
              <td>
                M. Atk. +1000<br />Hold Atk. Rate +2%
              </td>
              <td>
                M. Atk. +1500<br />Hold Atk. Rate +3%
              </td>
              <td>
                M. Atk. +2000<br />Hold Atk. Rate +4%
              </td>
              <td>
                M. Atk. +3000<br />Hold Atk. Rate +5%
              </td>
              <td>
                M. Atk. +4000<br />Hold Atk. Rate +6%
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/lilith.png" alt="" />
                <br />
                <span className="skill-text">Lilith Doll</span>
              </td>
              <td>
                P. Atk. +500<br />Suppression Atk. Rate +1%
              </td>
              <td>
                P. Atk. +1000<br />Suppression Atk. Rate +2%
              </td>
              <td>
                P. Atk. +1500<br />Suppression Atk. Rate +3%
              </td>
              <td>
                P. Atk. +2000<br />Suppression Atk. Rate +4%
              </td>
              <td>
                P. Atk. +3000<br />Suppression Atk. Rate +5%
              </td>
              <td>
                P. Atk. +4000<br />Suppression Atk. Rate +6%
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/Anais.png" alt="" />
                <br />
                <span className="skill-text">Anais Doll</span>
              </td>
              <td>
                Knockback Resistance +1%
              </td>
              <td>
                P. Def. +200<br />Knockback Resistance +3%
              </td>
              <td>
                P. Def. +400<br />Knockback Resistance +5%
              </td>
              <td>
                P. Def. +600<br />Knockback Resistance +7%
              </td>
              <td>
                P. Def. +800<br />Knockback Resistance +9%
              </td>
              <td>
                P. Def. +1000<br />Knockback Resistance +10%
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/phiriel.png" alt="" />
                <br />
                <span className="skill-text">Phiriel Doll</span>
              </td>
              <td>
                Pull Resistance +1%
              </td>
              <td>
                P. Def. +200<br />Pull Resistance +3%
              </td>
              <td>
                P. Def. +400<br />Pull Resistance +5%
              </td>
              <td>
                P. Def. +600<br />Pull Resistance +7%
              </td>
              <td>
                P. Def. +800<br />Pull Resistance +9%
              </td>
              <td>
                P. Def. +1000<br />Pull Resistance +10%
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/Juriel.png" alt="" />
                <br />
                <span className="skill-text">Juriel Doll</span>
              </td>
              <td>
                Damage decrease -20
              </td>
              <td>
                Damage decrease -40
              </td>
              <td>
                Damage decrease -60
              </td>
              <td>
                Damage decrease -80
              </td>
              <td>
                Damage decrease -100
              </td>
              <td>
                Damage decrease -150
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/Galaxia.png" alt="" />
                <br />
                <span className="skill-text">Galaxia Doll</span>
              </td>
              <td>
                Damage Decrease Ignore +50
              </td>
              <td>
                Damage Decrease Ignore +100
              </td>
              <td>
                Damage Decrease Ignore +150
              </td>
              <td>
                Damage Decrease Ignore +200
              </td>
              <td>
                Damage Decrease Ignore +250
              </td>
              <td>
                Damage Decrease Ignore +300
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/scarlet-van-halisha.png" alt="" />
                <br />
                <span className="skill-text">Scarlet van Halisha Doll</span>
              </td>
              <td>
                MEN +1<br />Knockback Atk. Rate +1%
              </td>
              <td>
                CON/ MEN +1<br />Knockback Atk. Rate +2%
              </td>
              <td>
                WIT/ CON/ MEN +1<br />Knockback Atk. Rate +3%
              </td>
              <td>
                DEX/ WIT/ CON/ MEN +1<br />Knockback Atk. Rate +4%
              </td>
              <td>
                INT/ DEX/ WIT/ CON/ MEN +1<br />Knockback Atk. Rate +5%
              </td>
              <td>
                All stats +1<br />Knockback Atk. Rate +6%
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/queen-ant-doll.png" alt="" />
                <br />
                <span className="skill-text">Queen Ant Doll</span>
              </td>
              <td>
                P. Atk. +2%<br />P. Critical Damage +3%<br />P. Skill Critical Damage +4%
              </td>
              <td>
                P. Atk. +8%<br />P. Critical Damage +8%<br />P. Skill Critical Damage +12%
              </td>
              <td>
                P. Atk. +12%<br />P. Critical Damage +10%<br />P. Skill Critical Damage +15%
              </td>
              <td>
                P. Atk. +15%<br />P. Critical Damage +12%<br />P. Skill Critical Damage +17%
              </td>
              <td>
                P. Atk. +18%<br />P. Critical Damage +15%<br />P. Skill Critical Damage +20%
              </td>
              <td>
                P. Atk. +20%<br />P. Critical Damage +20%<br />P. Skill Critical Damage +20%
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/orfen-doll.png" alt="" />
                <br />
                <span className="skill-text">Orfen Doll</span>
              </td>
              <td>
                M. Atk. +2%<br />M. Skill Critical Damage +3%<br />Max MP +4%
              </td>
              <td>
                M. Atk. +8%<br />M. Skill Critical Damage +8%<br />Max MP +12%
              </td>
              <td>
                M. Atk. +15%<br />M. Skill Critical Damage +10%<br />Max MP +15%
              </td>
              <td>
                M. Atk. +20%<br />M. Skill Critical Damage +12%<br />Max MP +17%<br />Melee Weapon Resistance +1%
              </td>
              <td>
                M. Atk. +25%<br />M. Skill Critical Damage +15%<br />Max MP +20%<br />Melee Weapon Resistance +2%
              </td>
              <td>
                M. Atk. +25%<br />M. Skill Critical Damage +25%<br />Max MP +25%<br />Melee Weapon Resistance +5%
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/core-doll.png" alt="" />
                <br />
                <span className="skill-text">Core Doll</span>
              </td>
              <td>
                Received Skill Critical Damage -5%<br />Received Skill Critical Rate -2%<br />Shock Resistance +10%<br />Sleep Resistance +10%<br />Knockback Resistance +5%
              </td>
              <td>
                Received Skill Critical Damage -10%<br />Received Skill Critical Rate -5%<br />Shock Resistance +20%<br />Sleep Resistance +20%<br />Knockback Resistance +10%
              </td>
              <td>
                Received Skill Critical Damage -15%<br />Received Skill Critical Rate -8%<br />Shock Resistance +30%<br />Sleep Resistance +30%<br />Knockback Resistance +20%
              </td>
              <td>
                Received Skill Critical Damage -17%<br />Received Skill Critical Rate -10%<br />Shock Resistance +35%<br />Sleep Resistance +35%<br />Knockback Resistance +20%<br />Paralysis Resistance +10%
              </td>
              <td>
                Received Skill Critical Damage -20%<br />Received Skill Critical Rate -12%<br />Shock Resistance +35%<br />Sleep Resistance +35%<br />Knockback Resistance +20%<br />Paralysis Resistance +20%
              </td>
              <td>
                Received Skill Critical Damage -25%<br />Received Skill Critical Rate -20%<br />Shock Resistance +35%<br />Sleep Resistance +35%<br />Knockback Resistance +25%<br />Paralysis Resistance +25%
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/zaken-doll.png" alt="" />
                <br />
                <span className="skill-text">Zaken Doll</span>
              </td>
              <td>
                Skill Critical Rate +10<br />Skill Critical Damage +100<br />HP Recovery Potions' Effect +20<br />With an 80% chance, absorbs 1% of inflicted damage as HP.
              </td>
              <td>
                Skill Critical Rate +40<br />Skill Critical Damage +200<br />HP Recovery Potions' Effect +50<br />With an 80% chance, absorbs 2% of inflicted damage as HP.
              </td>
              <td>
                Skill Critical Rate +60<br />Skill Critical Damage +300<br />HP Recovery Potions' Effect +80<br />With an 80% chance, absorbs 3% of inflicted damage as HP.
              </td>
              <td>
                Skill Critical Rate +70<br />Skill Critical Damage +300<br />HP Recovery Potions' Effect +110<br />With an 80% chance, absorbs 3% of inflicted damage as HP.
              </td>
              <td>
                Skill Critical Rate +80<br />Skill Critical Damage +300<br />HP Recovery Potions' Effect +150<br />With an 80% chance, absorbs 3% of inflicted damage as HP.
              </td>
              <td>
                Skill Critical Rate +100<br />Skill Critical Damage +350<br />HP Recovery Potions' Effect +200<br />Acquired XP/ SP +5%<br />With an 80% chance, absorbs 3% of inflicted damage as HP.
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/baium-doll.png" alt="" />
                <br />
                <span className="skill-text">Baium Doll</span>
              </td>
              <td>
                Skill Cooldown -2%<br />P. Def. +5%<br />M. Def. +10%<br />Silence Resistance +5%<br />Fear Resistance +5%<br />Paralysis Resistance +5%<br />Knockback Resistance +5%<br />Pull Resistance +5%
              </td>
              <td>
                Skill Cooldown -3%<br />P. Def. +12%<br />M. Def. +40%<br />Silence Resistance +20%
              </td>
              <td>
                Skill Cooldown -4%<br />P. Def. +15%<br />M. Def. +45%<br />Silence Resistance +25%
              </td>
              <td>
                Skill Cooldown -4%<br />P. Def. +18%<br />M. Def. +45%<br />Silence Resistance +25%<br />Fear Resistance +27%<br />Paralysis Resistance +10%<br />Pull Resistance +10%
              </td>
              <td>
                Skill Cooldown -4%<br />P. Def. +21%<br />M. Def. +45%<br />Silence Resistance +25%<br />Fear Resistance +30%<br />Paralysis Resistance +15%
              </td>
              <td>
                Skill Cooldown -5%<br />P. Def. +25%<br />M. Def. +45%<br />Silence Resistance +30%<br />Fear Resistance +20%<br />Paralysis Resistance +10%<br />Knockback Resistance +5%<br />Pull Resistance +5%<br />Acquired XP/ SP +5%
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/frintezza-doll.png" alt="" />
                <br />
                <span className="skill-text">Frintezza Doll</span>
              </td>
              <td>
                STR +1<br />INT +1<br />Skill Power +1%<br />Atk. Spd. +20<br />Casting Spd. +20<br />Speed +1
              </td>
              <td>
                STR +1<br />INT +1<br />DEX +1<br />WIT +1<br />CON +1<br />MEN +1<br />Skill Power +2%<br />Atk. Spd. +50<br />Casting Spd. +50<br />Speed +2
              </td>
              <td>
                STR +2<br />INT +2<br />DEX +2<br />WIT +2<br />CON +2<br />MEN +2<br />Skill Power +5%<br />Atk. Spd. +100<br />Casting Spd. +100<br />Speed +5
              </td>
              <td>
                STR +2<br />INT +2<br />DEX +3<br />WIT +3<br />CON +2<br />MEN +2<br />Skill Power +6%<br />Atk. Spd. +110<br />Casting Spd. +110<br />Speed +5
              </td>
              <td>
                STR +3<br />INT +3<br />DEX +3<br />WIT +3<br />CON +3<br />MEN +3<br />Skill Power +8%<br />Atk. Spd. +120<br />Casting Spd. +120<br />Speed +5
              </td>
              <td>
                STR +4<br />INT +4<br />DEX +4<br />WIT +4<br />CON +4<br />MEN +4<br />Skill Power +10%<br />Atk. Spd. +130<br />Casting Spd. +130<br />Speed +6<br />Acquired XP/ SP +5%
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/Aztacan.png" alt="" />
                <br />
                <span className="skill-text">Aztacan Doll</span>
              </td>
              <td>
                P. Atk. +100<br />M. Atk. +100
              </td>
              <td>
                P. Atk. +200<br />M. Atk. +200<br />PvE damage +0.5%<br />PvE Critical Damage +0.5%<br />Acquired XP/ SP +1%
              </td>
              <td>
                P. Atk. +300<br />M. Atk. +300<br />PvE damage +1%<br />PvE Critical Damage +1%<br />Acquired XP/ SP +2%
              </td>
              <td>
                P. Atk. +500<br />M. Atk. +500<br />PvE damage +3%<br />PvE Critical Damage +3%<br />Acquired XP/ SP +3%
              </td>
              <td>
                P. Atk. +700<br />M. Atk. +700<br />PvE damage +5%<br />PvE Critical Damage +5%<br />Acquired XP/ SP +4%
              </td>
              <td>
                P. Atk. +1000<br />M. Atk. +1000<br />PvE damage +7%<br />PvE Critical Damage +7%<br />Acquired XP/ SP +5%
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/vulcan.png" alt="" />
                <br />
                <span className="skill-text">Vulcan Doll</span>
              </td>
              <td>
                P. Def. +200<br />M. Def. +200
              </td>
              <td>
                P. Atk. +100<br />M. Atk. +100<br />P. Def. +500<br />M. Def. +500
              </td>
              <td>
                P. Atk. +300<br />M. Atk. +300<br />P. Def. +1000<br />M. Def. +1000
              </td>
              <td>
                P. Atk. +500<br />M. Atk. +500<br />P. Def. +1500<br />M. Def. +1500<br />Received AoE Skill Damage -4%
              </td>
              <td>
                P. Atk. +700<br />M. Atk. +700<br />P. Def. +2000<br />M. Def. +2000<br />Silence Atk. Rate +5%<br />Received AoE Skill Damage -7%
              </td>
              <td>
                P. Atk. +1000<br />M. Atk. +1000<br />P. Def. +3000<br />M. Def. +3000<br />Silence Atk. Rate +10%<br />Received AoE Skill Damage -10%<br />Acquired XP/ SP +5%
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/antharas-doll.png" alt="" />
                <br />
                <span className="skill-text">Antharas Doll</span>
              </td>
              <td>
                CON +1<br />MEN +1<br />Received damage -2%<br />Knockback Resistance +5%<br />Shock Resistance +5%<br />Pull Resistance +5%<br />Soulshot Damage Resistance +2%<br />Spiritshot Damage Resistance +2%
              </td>
              <td>
                CON +2<br />MEN +2<br />Received damage -5%<br />Knockback Resistance +10%<br />Shock Resistance +10%<br />Pull Resistance +10%<br />Soulshot Damage Resistance +3%<br />Spiritshot Damage Resistance +3%
              </td>
              <td>
                CON +3<br />MEN +3<br />Received damage -10%<br />Knockback Resistance +20%<br />Shock Resistance +20%<br />Pull Resistance +20%<br />Soulshot Damage Resistance +10%<br />Spiritshot Damage Resistance +10%
              </td>
              <td>
                CON +4<br />MEN +4<br />Received damage -12%<br />Knockback Resistance +25%<br />Shock Resistance +25%<br />Pull Resistance +25%<br />Imprisonment Resistance +10%<br />Soulshot Damage Resistance +12%<br />Spiritshot Damage Resistance +12%
              </td>
              <td>
                CON +5<br />MEN +5<br />Received damage -15%<br />Knockback Resistance +25%<br />Shock Resistance +25%<br />Pull Resistance +25%<br />Imprisonment Resistance +20%<br />Soulshot Damage Resistance +15%<br />Spiritshot Damage Resistance +15%
              </td>
              <td>
                CON +6<br />MEN +6<br />Received damage -25%<br />Knockback Resistance +30%<br />Shock Resistance +30%<br />Pull Resistance +30%<br />Imprisonment Resistance +20%<br />Soulshot Damage Resistance +20%<br />Spiritshot Damage Resistance +20%<br />PvP damage +5%<br />Acquired XP/ SP +2%
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/behemoth-doll.png" alt="" />
                <br />
                <span className="skill-text">Behemoth Doll</span>
              </td>
              <td>
              </td>
              <td>
                Damage decrease ignore +100<br />Skill Critical Damage +3%<br />Hold Resistance +5%
              </td>
              <td>
                Damage decrease ignore +200<br />Skill Critical Damage +5%<br />Hold Resistance +10%
              </td>
              <td>
                Damage decrease ignore +300<br />Skill Critical Damage +10%<br />Hold Resistance +20%
              </td>
              <td>
                Damage decrease ignore +400<br />Skill Critical Damage +15%<br />Hold Resistance +22%
              </td>
              <td>
                Damage decrease ignore +500<br />Skill Critical Damage +20%<br />Hold Resistance +25%<br /><br />With a certain chance, summons Behemoth Doll on attack.
              </td>
              <td>
                Damage decrease ignore +700<br />Skill Critical Damage +25%<br />Hold Resistance +30%<br />Received PvP damage +5%<br />Acquired XP/ SP -2%<br /><br />With a certain chance, summons Behemoth Doll on attack.
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/Glakias-doll.png" alt="" />
                <br />
                <span className="skill-text">Glakias Doll</span>
              </td>
              <td>
              </td>
              <td>
                All Weapon P. Atk. +5<br />All Weapon M. Atk. +5<br />Soulshot damage +2%<br />Spiritshot damage +2%<br />Recovers 50 MP on a basic attack and when using attack skills.<br />(Trigger rate: 30%, trigger cooldown: 30 sec.)
              </td>
              <td>
                All Weapon P. Atk. +10<br />All Weapon M. Atk. +10<br />Soulshot damage +5%<br />Spiritshot damage +5%<br />Recovers 100 MP on a basic attack and when using attack skills.<br />(Trigger rate: 30%, trigger cooldown: 30 sec.)
              </td>
              <td>
                All Weapon P. Atk. +15<br />All Weapon M. Atk. +15<br />Soulshot damage +8%<br />Spiritshot damage +8%<br />Recovers 150 MP on a basic attack and when using attack skills.<br />(Trigger rate: 30%, trigger cooldown: 30 sec.)
              </td>
              <td>
                All Weapon P. Atk. +20<br />All Weapon M. Atk. +20<br />Soulshot damage +10%<br />Spiritshot damage +10%<br />Recovers 200 MP on a basic attack and when using attack skills.<br />(Trigger rate: 30%, trigger cooldown: 30 sec.)
              </td>
              <td>
                All Weapon P. Atk. +35<br />All Weapon M. Atk. +35<br />Soulshot damage +15%<br />Spiritshot damage +15%<br />Recovers 300 MP on a basic attack and when using attack skills.<br />(Trigger rate: 30%, trigger cooldown: 30 sec.)<br /><br />With a certain chance, summons Glakias Doll on attack.
              </td>
              <td>
                All Weapon P. Atk. +50<br />All Weapon M. Atk. +50<br />Soulshot damage +20%<br />Spiritshot damage +20%<br />PvP damage +5%<br />Acquired XP/ SP +2%<br />Recovers 500 MP on a basic attack and when using attack skills.<br />(Trigger rate: 30%, trigger cooldown: 25 sec.)<br /><br />With a certain chance, summons Glakias Doll on attack.
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/andreas-van-halter-doll.png" alt="" />
                <br />
                <span className="skill-text">Andreas van Halter Doll</span>
              </td>
              <td>
              </td>
              <td>
                P. Atk. +1000<br />M. Atk. +1000<br />Received Skill Critical Rate -3%
              </td>
              <td>
                P. Atk. +1500<br />M. Atk. +1500<br />Received Skill Critical Rate -5%<br />Received Skill Critical Damage -5%
              </td>
              <td>
                P. Atk. +2000<br />M. Atk. +2000<br />Received Skill Critical Rate -7%<br />Received Skill Critical Damage -7%<br />Received AoE Skill Damage -1%
              </td>
              <td>
                P. Atk. +2500<br />M. Atk. +2500<br />Received Skill Critical Rate -9%<br />Received Skill Critical Damage -9%<br />Received AoE Skill Damage -2%<br />Received AoE Skill Damage -300
              </td>
              <td>
                P. Atk. +3000<br />M. Atk. +3000<br />Received Skill Critical Rate -10%<br />Received Skill Critical Damage -10%<br />Received AoE Skill Damage -3%<br />Received AoE Skill Damage -800<br /><br />With a certain chance, summons Andreas van Halter Doll on attack.
              </td>
              <td>
                P. Atk. +5000<br />M. Atk. +5000<br />Received Skill Critical Rate -15%<br />Received Skill Critical Damage -15%<br />Received AoE Skill Damage -5%<br />Received AoE Skill Damage -1000<br />PvP damage +5%<br />Acquired XP/ SP +2%<br /><br />With a certain chance, summons Andreas van Halter Doll on attack.
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/kelbim-doll.png" alt="" />
                <br />
                <span className="skill-text">Kelbim Doll</span>
              </td>
              <td>
              </td>
              <td>
                DEX/ WIT +1<br />CON/ MEN +1<br />P./ M. Def. +1000<br />All Critical Damage +3%<br />Knockback/ Imprisonment/ Suppression Atk. Rate +10
              </td>
              <td>
                STR/ INT +1<br />DEX/ WIT +1<br />CON/ MEN +1<br />P./ M. Def. +1500<br />All Critical Damage +6%<br />Knockback/ Imprisonment/ Suppression Atk. Rate +20
              </td>
              <td>
                DEX/ WIT +2<br />CON/ MEN +2<br />P./ M. Def. +2000<br />All Critical Damage +9%<br />Knockback/ Imprisonment/ Suppression Atk. Rate +30
              </td>
              <td>
                DEX/ WIT +2<br />CON/ MEN +2<br />P./ M. Def. +2500<br />All Critical Damage +12%<br />Knockback/ Imprisonment/ Suppression Atk. Rate +50
              </td>
              <td>
                STR/ INT +2<br />DEX/ WIT +3<br />CON/ MEN +3<br />P./ M. Def. +3000<br />All Critical Damage +15%<br />Knockback/ Imprisonment/ Suppression Atk. Rate +70<br /><br />With a certain chance, summons Kelbim Doll on attack.
              </td>
              <td>
                STR/ INT +3<br />DEX/ WIT +3<br />CON/ MEN +3<br />P./ M. Def. +5000<br />All Critical Damage +20%<br />Knockback/ Imprisonment/ Suppression Atk. Rate +100<br />Received PvP damage +5%<br />Acquired XP/ SP +2%<br /><br />With a certain chance, summons Kelbim Doll on attack.
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/ferion.png" alt="" />
                <br />
                <span className="skill-text">Ferion Doll</span>
              </td>
              <td>
              </td>
              <td>
                Skill Power +2%<br />All received Critical Damage -100<br />Max HP +500<br />Max MP +500<br />Knockback Resistance +3%
              </td>
              <td>
                Skill Power +4%<br />All received Critical Damage -200<br />Max HP +1000<br />Max MP +1000<br />Knockback Resistance +5%
              </td>
              <td>
                Skill Power +6%<br />All received Critical Damage -300<br />Max HP +1500<br />Max MP +1500<br />Knockback Resistance +7%<br />Damage Reflection Resistance +5%
              </td>
              <td>
                Skill Power +8%<br />All received Critical Damage -400<br />Max HP +2000<br />Max MP +2000<br />Knockback Resistance +9%<br />Damage Reflection Resistance +10%
              </td>
              <td>
                Skill Power +10%<br />All received Critical Damage -500<br />Max HP +3000<br />Max MP +3000<br />Knockback Resistance +12%<br />Damage Reflection Resistance +15%<br />Damage +1%<br /><br />With a certain chance, summons Ferion Doll on attack.
              </td>
              <td>
                Skill Power +12%<br />All received Critical Damage -600<br />Max HP +4000<br />Max MP +4000<br />Knockback Resistance +15%<br />Damage Reflection Resistance +20%<br />Damage +2%<br />Acquired XP/ SP +5%<br /><br />Ferion's Shield<br />Creates a shield, that applies Ferion's Slow to the attacking target when hit.<br />Trigger rate: 1%<br />Duration: 3 sec.<br /><br />Ferion's Slow<br />Decreases Atk. Spd./ Casting Spd./ Speed.<br />Duration: 3 sec.<br /><br />With a certain chance, summons Ferion Doll on attack.
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <div id="enchanting-dolls" className="article-text5">
        Enchanting Dolls
      </div>
      <div className="article-text">
        — Mythic Dolls' stats can be increased by enchanting them up to +3.
      </div>
      <div className="article-table-container">
        <table className="article-table2">
          <thead>
            <tr>
              <th>Doll</th>
              <th>+1</th>
              <th>+2</th>
              <th>+3</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/behemoth2.png" alt="" />
                <br />
                <span className="skill-text">Behemoth Doll</span>
              </td>
              <td>
                Damage decrease ignore +900<br />Skill Critical Damage +25%<br />Hold Resistance +30%<br />Received PvP damage -2%<br />Acquired XP/ SP +5%<br /><br />With a certain chance, summons Behemoth Doll on attack.
              </td>
              <td>
                Damage decrease ignore +1100<br />Skill Critical Damage +25%<br />Hold Resistance +30%<br />Received PvP damage -2%<br />Acquired XP/ SP +5%<br /><br />With a certain chance, summons Behemoth Doll on attack.
              </td>
              <td>
                Damage decrease ignore +1400<br />Skill Critical Damage +25%<br />Hold Resistance +30%<br />Received PvP damage -2%<br />Acquired XP/ SP +5%<br /><br />With a certain chance, summons Behemoth Doll on attack.
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/glakias2.png" alt="" />
                <br />
                <span className="skill-text">Glakias Doll</span>
              </td>
              <td>
                All Weapon P. Atk. +70<br />All Weapon M. Atk. +70<br />Soulshot damage +20%<br />Spiritshot damage +20%<br />PvP damage +2%<br />Acquired XP/ SP +5%<br />Recovers 500 MP on a basic attack and when using attack skills.<br />(Trigger rate: 30%, trigger cooldown: 25 sec.)<br /><br />With a certain chance, summons Glakias Doll on attack.
              </td>
              <td>
                All Weapon P. Atk. +90<br />All Weapon M. Atk. +90<br />Soulshot damage +20%<br />Spiritshot damage +20%<br />PvP damage +2%<br />Acquired XP/ SP +5%<br />Recovers 500 MP on a basic attack and when using attack skills.<br />(Trigger rate: 30%, trigger cooldown: 25 sec.)<br /><br />With a certain chance, summons Glakias Doll on attack.
              </td>
              <td>
                All Weapon P. Atk. +120<br />All Weapon M. Atk. +120<br />Soulshot damage +20%<br />Spiritshot damage +20%<br />PvP damage +2%<br />Acquired XP/ SP +5%<br />Recovers 500 MP on a basic attack and when using attack skills.<br />(Trigger rate: 30%, trigger cooldown: 25 sec.)<br /><br />With a certain chance, summons Glakias Doll on attack.
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/andreas-van-halter2.png" alt="" />
                <br />
                <span className="skill-text">Andreas van Halter Doll</span>
              </td>
              <td>
                P. Atk. +6500<br />M. Atk. +6500<br />Received Skill Critical Rate -15%<br />Received Skill Critical Damage -15%<br />Received AoE Skill Damage -5%<br />Received AoE Skill Damage -1000<br />PvP damage +2%<br />Acquired XP/ SP +5%<br /><br />With a certain chance, summons Andreas van Halter Doll on attack.
              </td>
              <td>
                P. Atk. +8500<br />M. Atk. +8500<br />Received Skill Critical Rate -15%<br />Received Skill Critical Damage -15%<br />Received AoE Skill Damage -5%<br />Received AoE Skill Damage -1000<br />PvP damage +2%<br />Acquired XP/ SP +5%<br /><br />With a certain chance, summons Andreas van Halter Doll on attack.
              </td>
              <td>
                P. Atk. +11,000<br />M. Atk. +11,000<br />Received Skill Critical Rate -15%<br />Received Skill Critical Damage -15%<br />Received AoE Skill Damage -5%<br />Received AoE Skill Damage -1000<br />PvP damage +2%<br />Acquired XP/ SP +5%<br /><br />With a certain chance, summons Andreas van Halter Doll on attack.
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/kelbim2.png" alt="" />
                <br />
                <span className="skill-text">Kelbim Doll</span>
              </td>
              <td>
                STR/ INT +3<br />DEX/ WIT +3<br />CON/ MEN +3<br />P./ M. Def. +6000<br />All Critical Damage +100<br />Knockback/ Imprisonment/ Suppression Atk. Rate +20%<br />Received PvP damage -2%<br />Acquired XP/ SP +5%<br /><br />With a certain chance, summons Kelbim Doll on attack.
              </td>
              <td>
                STR/ INT +3<br />DEX/ WIT +3<br />CON/ MEN +3<br />P./ M. Def. +7400<br />All Critical Damage +100<br />Knockback/ Imprisonment/ Suppression Atk. Rate +20%<br />Received PvP damage -2%<br />Acquired XP/ SP +5%<br /><br />With a certain chance, summons Kelbim Doll on attack.
              </td>
              <td>
                STR/ INT +3<br />DEX/ WIT +3<br />CON/ MEN +3<br />P./ M. Def. +9000<br />All Critical Damage +100<br />Knockback/ Imprisonment/ Suppression Atk. Rate +20%<br />Received PvP damage -2%<br />Acquired XP/ SP +5%<br /><br />With a certain chance, summons Kelbim Doll on attack.
              </td>
            </tr>

            <tr>
              <td className="skill-container">
                <img className="skill-icon" src="/items/icons/doll/ferion.png" alt="" />
                <br />
                <span className="skill-text">Ferion Doll</span>
              </td>
              <td>
                Skill Power +12%<br />All received Critical Damage -600<br />Max HP +4000<br />Max MP +4000<br />Knockback Resistance +15%<br />Damage Reflection Resistance +20%<br />Damage -2%<br />Acquired XP/ SP +5%<br /><br />Ferion's Shield<br />Creates a shield that applies Ferion's Slow on the attacking target when hit.<br />Trigger rate: 3%<br />Duration: 3 sec.<br /><br />Ferion's Slow<br />Decreases Atk. Spd./ Casting Spd./ Speed.<br />Duration: 3 sec.<br /><br />With a certain chance, summons Ferion Doll on attack.
              </td>
              <td>
                Skill Power +12%<br />All received Critical Damage -600<br />Max HP +4000<br />Max MP +4000<br />Knockback Resistance +15%<br />Damage Reflection Resistance +20%<br />Damage -2%<br />Acquired XP/ SP +5%<br /><br />Ferion's Shield<br />Creates a shield that applies Ferion's Slow on the attacking target when hit.<br />Trigger rate: 4%<br />Duration: 4 sec.<br /><br />Ferion's Slow<br />Decreases Atk. Spd./ Casting Spd./ Speed.<br />Duration: 3 sec.<br /><br />With a certain chance, summons Ferion Doll on attack.
              </td>
              <td>
                Skill Power +12%<br />All received Critical Damage -600<br />Max HP +4000<br />Max MP +4000<br />Knockback Resistance +15%<br />Damage Reflection Resistance +20%<br />Damage -2%<br />Acquired XP/ SP +5%<br /><br />Ferion's Shield<br />Creates a shield that applies Ferion's Slow on the attacking target when hit.<br />Trigger rate: 6%<br />Duration: 5 sec.<br /><br />Ferion's Slow<br />Decreases Atk. Spd./ Casting Spd./ Speed.<br />Duration: 3 sec.<br /><br />With a certain chance, summons Ferion Doll on attack.
              </td>
            </tr>

          </tbody>
        </table>
      </div>
      <div className="article-text">
        — Enhancement success rate depends on the number of dolls used as a material.
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>Number of dolls</th>
            <th>Success rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              1
            </td>
            <td>
              10%
            </td>
          </tr>
          <tr>
            <td>
              2
            </td>
            <td>
              20%
            </td>
          </tr>
          <tr>
            <td>
              3
            </td>
            <td>
              30%
            </td>
          </tr>
          <tr>
            <td>
              4
            </td>
            <td>
              50%
            </td>
          </tr>
        </tbody>
      </table>

      <div id="dolls-collections" className="article-text5">
        Dolls Collections
      </div>
      <div className="article-text">
        — All summoned dolls are automatically added to collections that give bonuses to your stats.
      </div>
      <div className="article-table-container">
        <table className="article-table2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Requires</th>
              <th>Effect</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td className="skill-container">
                <span className="skill-text">Idol Doll I</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/princess-molrang.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Princess Molrang Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/deiman.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Deiman Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/satina.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Satina Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/ryuminir.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Ryuminir Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/tiron.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Tiron Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/aizen-kelsour.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Aizen Kelsour Doll</span>
                </div>
              </td>
              <td>Atk. Spd. +5</td>
              <td>Attack</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Idol Doll II</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/king-ignis.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common King Ignis Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-nebula.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Queen Nebula Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/king-procella.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common King Procella Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/king-petram.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common King Petram Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/scarlet-van-halisha.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Scarlet van Halisha Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/anakim.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Anakim Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/lilith.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Lilith Doll</span>
                </div>
              </td>
              <td>Casting Spd. +5</td>
              <td>Attack</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">New Beginning I</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-ant-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Queen Ant Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/orfen-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Orfen Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/core-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Core Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/zaken-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Zaken Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/frintezza-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Frintezza Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/baium-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Baium Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/antharas-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Antharas Doll</span>
                </div>
              </td>
              <td>Speed +1</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Enhanced Idol Doll</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/princess-molrang.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Princess Molrang Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/aizen-kelsour.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Aizen Kelsour Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/anakim.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Anakim Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/lilith.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Lilith Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/tiron.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Tiron Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/scarlet-van-halisha.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Scarlet van Halisha Doll</span>
                </div>
              </td>
              <td>HP Recovery Rate +3</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Hellbound Folk</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/ryuminir.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Ryuminir Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/aizen-kelsour.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Aizen Kelsour Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/deiman.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Deiman Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/satina.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Satina Doll</span>
                </div>
              </td>
              <td>MP Recovery Rate +3</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Elemental Dolls</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/king-ignis.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced King Ignis Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-nebula.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Queen Nebula Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/king-procella.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced King Procella Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/king-petram.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced King Petram Doll</span>
                </div>
              </td>
              <td>Attribute Attack +1</td>
              <td>Attack</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Enhanced Elemental Dolls</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/king-ignis.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior King Ignis Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-nebula.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Queen Nebula Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/king-procella.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior King Procella Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/king-petram.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior King Petram Doll</span>
                </div>
              </td>
              <td>Attribute Attack +3</td>
              <td>Attack</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Rare Elemental Dolls</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/king-ignis.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare King Ignis Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-nebula.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Queen Nebula Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/king-procella.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare King Procella Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/king-petram.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare King Petram Doll</span>
                </div>
              </td>
              <td>Attribute Attack +5</td>
              <td>Attack</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Angel Doll (Enhanced)</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/anakim.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Anakim Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/lilith.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Lilith Doll</span>
                </div>
              </td>
              <td>Max HP +10</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Angel Doll (Superior)</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/anakim.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Anakim Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/lilith.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Lilith Doll</span>
                </div>
              </td>
              <td>Max HP +30</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Angel Doll (Rare)</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/anakim.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Anakim Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/lilith.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Lilith Doll</span>
                </div>
              </td>
              <td>Max HP +50</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Angel Doll (Heroic)</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/anakim.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-Heroic.png" alt="" />
                  <span className="tooltip heroic">Heroic Anakim Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/lilith.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-Heroic.png" alt="" />
                  <span className="tooltip heroic">Heroic Lilith Doll</span>
                </div>
              </td>
              <td>Max HP +70</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Angel Doll (Legendary)</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/anakim.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Anakim Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/lilith.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Lilith Doll</span>
                </div>
              </td>
              <td>Max HP +100</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Best Friend Forever (Enhanced)</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/scarlet-van-halisha.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Scarlet van Halisha Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/frintezza-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Frintezza Doll</span>
                </div>
              </td>
              <td>Max MP +10</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Best Friend Forever (Superior)</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/scarlet-van-halisha.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Scarlet van Halisha Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/frintezza-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Frintezza Doll</span>
                </div>
              </td>
              <td>Max MP +30</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Best Friend Forever (Rare)</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/scarlet-van-halisha.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Scarlet van Halisha Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/frintezza-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Frintezza Doll</span>
                </div>
              </td>
              <td>Max MP +50</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Best Friend Forever (Heroic)</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/scarlet-van-halisha.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-Heroic.png" alt="" />
                  <span className="tooltip heroic">Heroic Scarlet van Halisha Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/frintezza-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-Heroic.png" alt="" />
                  <span className="tooltip heroic">Heroic Frintezza Doll</span>
                </div>
              </td>
              <td>Max MP +70</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Best Friend Forever (Legendary)</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/scarlet-van-halisha.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Scarlet van Halisha Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/frintezza-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Frintezza Doll</span>
                </div>
              </td>
              <td>Max MP +100</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">New Beginning II</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-ant-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Queen Ant Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/orfen-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Orfen Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/core-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Core Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/zaken-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Zaken Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/frintezza-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Frintezza Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/baium-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Baium Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/antharas-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Antharas Doll</span>
                </div>
              </td>
              <td>PvE damage +0.5%, Acquired XP/SP +2%</td>
              <td>Attack</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">New Beginning III</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-ant-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Queen Ant Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/orfen-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Orfen Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/core-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Core Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/zaken-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Zaken Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/frintezza-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Frintezza Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/baium-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Baium Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/antharas-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Antharas Doll</span>
                </div>
              </td>
              <td>PvE damage +1%, Acquired XP/SP +2%</td>
              <td>Attack</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Never-changing Place I</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/glakias-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Glakias Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/behemoth-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Behemoth Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/andreas-van-halter-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Andreas van Halter Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/kelbim-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Kelbim Doll</span>
                </div>
              </td>
              <td>Acquired XP/SP +1%</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Never-changing Place II</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/glakias-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Glakias Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/behemoth-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Behemoth Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/andreas-van-halter-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Andreas van Halter Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/kelbim-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Kelbim Doll</span>
                </div>
              </td>
              <td>Acquired XP/SP +4%</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Never-changing Place III</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/glakias-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Glakias Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/behemoth-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Behemoth Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/andreas-van-halter-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Andreas van Halter Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/kelbim-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Kelbim Doll</span>
                </div>
              </td>
              <td>Acquired XP/SP +6%</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">In the Pagan Temple</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/andreas-van-halter-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Andreas van Halter Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/andreas-van-halter-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Andreas van Halter Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/andreas-van-halter-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Andreas van Halter Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/andreas-van-halter-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-Heroic.png" alt="" />
                  <span className="tooltip heroic">Heroic Andreas van Halter Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/andreas-van-halter-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Andreas van Halter Doll</span>
                </div>
              </td>
              <td>Acquired XP/SP +4%</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Tower Owners I</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/ryuminir.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Ryuminir Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/aizen-kelsour.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Aizen Kelsour Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/baium-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Baium Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/ferion.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Ferion Doll</span>
                </div>
              </td>
              <td>Received AoE skill damage -0.5%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Tower Owners II</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/ryuminir.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Ryuminir Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/aizen-kelsour.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Aizen Kelsour Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/baium-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Baium Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/ferion.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Ferion Doll</span>
                </div>
              </td>
              <td>Received AoE skill damage -1%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">True Tower Owners I</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/baium-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Baium Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/ferion.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Ferion Doll</span>
                </div>
              </td>
              <td>Soulshot/ Spiritshot damage +1%</td>
              <td>Attack</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">True Tower Owners II</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/baium-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-Heroic.png" alt="" />
                  <span className="tooltip heroic">Heroic Baium Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/ferion.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-Heroic.png" alt="" />
                  <span className="tooltip heroic">Heroic Ferion Doll</span>
                </div>
              </td>
              <td>Soulshot/ Spiritshot damage +2%</td>
              <td>Attack</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">True Tower Owners III</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/baium-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Baium Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/ferion.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Ferion Doll</span>
                </div>
              </td>
              <td>Soulshot/ Spiritshot damage +3%</td>
              <td>Attack</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">In Antharas' Lair</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/behemoth-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Behemoth Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/behemoth-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Behemoth Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/behemoth-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-Heroic.png" alt="" />
                  <span className="tooltip heroic">Heroic Behemoth Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/antharas-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Antharas Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/antharas-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Antharas Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/antharas-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Antharas Doll</span>
                </div>
              </td>
              <td>All received Critical Damage -1%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Interesting Past</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/princess-molrang.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Princess Molrang Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/zaken-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Zaken Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/core-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Core Doll</span>
                </div>
              </td>
              <td>All received Critical Rate -1%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Breaking the Limits for the First Time I</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/glakias-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-mythic.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/enchant_panel_01.png" alt="" />
                  <span className="tooltip mythic">+1 Mythic Glakias Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/behemoth-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-mythic.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/enchant_panel_01.png" alt="" />
                  <span className="tooltip mythic">+1 Mythic Behemoth Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/ferion.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-mythic.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/enchant_panel_01.png" alt="" />
                  <span className="tooltip mythic">+1 Mythic Ferion Doll</span>
                </div>
              </td>
              <td>Suppression/ Hold Resistance +1%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Breaking the Limits for the First Time II</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/kelbim-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-mythic.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/enchant_panel_01.png" alt="" />
                  <span className="tooltip mythic">+1 Mythic Kelbim Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/andreas-van-halter-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-mythic.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/enchant_panel_01.png" alt="" />
                  <span className="tooltip mythic">+1 Mythic Andreas van Halter Doll</span>
                </div>
              </td>
              <td>Suppression/ Hold Resistance +1%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Breaking the Limits for the Second Time I</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/glakias-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-mythic.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/enchant_panel_02.png" alt="" />
                  <span className="tooltip mythic">+2 Mythic Glakias Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/behemoth-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-mythic.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/enchant_panel_02.png" alt="" />
                  <span className="tooltip mythic">+2 Mythic Behemoth Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/ferion.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-mythic.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/enchant_panel_02.png" alt="" />
                  <span className="tooltip mythic">+2 Mythic Ferion Doll</span>
                </div>
              </td>
              <td>Knockback Resistance +1%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Breaking the Limits for the Second Time II</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/kelbim-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-mythic.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/enchant_panel_02.png" alt="" />
                  <span className="tooltip mythic">+2 Mythic Kelbim Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/andreas-van-halter-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-mythic.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/enchant_panel_02.png" alt="" />
                  <span className="tooltip mythic">+2 Mythic Andreas van Halter Doll</span>
                </div>
              </td>
              <td>Knockback Resistance +1%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Breaking the Limits for the Third Time I</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/glakias-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-mythic.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/enchant_panel_03.png" alt="" />
                  <span className="tooltip mythic">+3 Mythic Glakias Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/behemoth-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-mythic.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/enchant_panel_03.png" alt="" />
                  <span className="tooltip mythic">+3 Mythic Behemoth Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/ferion.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-mythic.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/enchant_panel_03.png" alt="" />
                  <span className="tooltip mythic">+3 Mythic Ferion Doll</span>
                </div>
              </td>
              <td>Imprisonment/ Mana Flare Resistance +1%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Breaking the Limits for the Third Time II</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/kelbim-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-mythic.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/enchant_panel_03.png" alt="" />
                  <span className="tooltip mythic">+3 Mythic Kelbim Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/andreas-van-halter-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-mythic.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/enchant_panel_03.png" alt="" />
                  <span className="tooltip mythic">+3 Mythic Andreas van Halter Doll</span>
                </div>
              </td>
              <td>Imprisonment/ Mana Flare Resistance +1%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Best Friend of Insects (Superior)</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-ant-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Queen Ant Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/orfen-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Orfen Doll</span>
                </div>
              </td>
              <td>Received PvP damage -0.8%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Best Friend of Insects (Rare)</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-ant-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Queen Ant Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/orfen-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Orfen Doll</span>
                </div>
              </td>
              <td>Received PvP damage -1.5%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Best Friend of Insects (Heroic)</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-ant-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-Heroic.png" alt="" />
                  <span className="tooltip heroic">Heroic Queen Ant Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/orfen-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-Heroic.png" alt="" />
                  <span className="tooltip heroic">Heroic Orfen Doll</span>
                </div>
              </td>
              <td>Received PvP damage -2%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Strongest Best Friend of Insects</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-ant-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Queen Ant Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/orfen-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Orfen Doll</span>
                </div>
              </td>
              <td>Received PvP damage -3%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Frost Lord's Castle I</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/tiron.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Tiron Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/glakias-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Glakias Doll</span>
                </div>
              </td>
              <td>Received PvP damage -1%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Frost Lord's Castle II</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/tiron.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Tiron Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/glakias-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Glakias Doll</span>
                </div>
              </td>
              <td>Received PvP damage -2%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Soaked with Moisture</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-nebula.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Queen Nebula Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-nebula.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Queen Nebula Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-nebula.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Queen Nebula Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-nebula.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Queen Nebula Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/tiron.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Tiron Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/glakias-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Glakias Doll</span>
                </div>
              </td>
              <td>All received Critical Rate -0.5%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Full of Pure Ice Energy</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-nebula.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Queen Nebula Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/tiron.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Tiron Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/glakias-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Glakias Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/glakias-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Glakias Doll</span>
                </div>
              </td>
              <td>All received Critical Rate -1%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Ranks of Heroes</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/core-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-Heroic.png" alt="" />
                  <span className="tooltip heroic">Heroic Core Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/antharas-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-Heroic.png" alt="" />
                  <span className="tooltip heroic">Heroic Antharas Doll</span>
                </div>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/glakias-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-Heroic.png" alt="" />
                  <span className="tooltip heroic">Heroic Glakias Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/behemoth-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-Heroic.png" alt="" />
                  <span className="tooltip heroic">Heroic Behemoth Doll</span>
                </div>
              </td>
              <td>Received M. Skill Critical Damage -1%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Queen's Legend Ending</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-ant-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Queen Ant Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/orfen-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Orfen Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/anakim.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Anakim Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/lilith.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Lilith Doll</span>
                </div>
              </td>
              <td>Recovery Potions' Effect +5</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Something Inappropriate</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/core-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Core Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/scarlet-van-halisha.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Scarlet van Halisha Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/zaken-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Zaken Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/frintezza-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Frintezza Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/baium-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Baium Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/antharas-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Antharas Doll</span>
                </div>
              </td>
              <td>Recovery Potions' Effect +10</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Past Glory I</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/core-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Core Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/antharas-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Antharas Doll</span>
                </div>
              </td>
              <td>M. Def. +40</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Past Glory II</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/orfen-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Orfen Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/zaken-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Zaken Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/frintezza-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Frintezza Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/baium-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Baium Doll</span>
                </div>
              </td>
              <td>M. Def. +60</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Mark on History I</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/core-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Core Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/baium-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Baium Doll</span>
                </div>
              </td>
              <td>P. Def. +40, M. Def. +40</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Mark on History II</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/zaken-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Zaken Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/frintezza-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Frintezza Doll</span>
                </div>
              </td>
              <td>P. Def. +60, M. Def. +60</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Mark on History III</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-ant-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Queen Ant Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/frintezza-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Frintezza Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/zaken-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Zaken Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/orfen-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-Heroic.png" alt="" />
                  <span className="tooltip heroic">Heroic Orfen Doll</span>
                </div>
              </td>
              <td>P. Skill Power +1%, M. Skill Power +1%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Learning New Things I</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/orfen-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Orfen Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/baium-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Baium Doll</span>
                </div>
              </td>
              <td>PvP Received M. Skill Damage -0.5%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Learning New Things II</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/queen-ant-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Queen Ant Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/core-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Core Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/frintezza-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Frintezza Doll</span>
                </div>
              </td>
              <td>PvP Received M. Skill Damage -1%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Generational Change I</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/king-petram.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior King Petram Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/antharas-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Antharas Doll</span>
                </div>
              </td>
              <td>Received AoE skill damage -0.5%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Generational Change II</span>
              </td>
              <td>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/behemoth-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Behemoth Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/glakias-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Glakias Doll</span>
                </div>
              </td>
              <td>Received AoE skill damage -1%</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">We Are Partners I</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/baium-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Baium Doll</span>
                </div>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/antharas-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Antharas Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/vulcan.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Vulcan Doll</span>
                </div>
              </td>
              <td>P. Def. +20</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">We Are Partners II</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/baium-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Baium Doll</span>
                </div>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/antharas-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Antharas Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/vulcan.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Vulcan Doll</span>
                </div>
              </td>
              <td>P. Def. +30</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">We Are Partners III</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/baium-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Baium Doll</span>
                </div>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/antharas-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Antharas Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/vulcan.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Vulcan Doll</span>
                </div>
              </td>
              <td>P. Def. +40</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">We Are Partners IV</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/baium-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Baium Doll</span>
                </div>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/antharas-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Antharas Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/vulcan.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Vulcan Doll</span>
                </div>
              </td>
              <td>P. Def. +60</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">With the Princess</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/princess-molrang.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Princess Molrang Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/princess-molrang.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Princess Molrang Doll</span>
                </div>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/vulcan.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Vulcan Doll</span>
                </div>
              </td>
              <td>Acquired XP/ SP +0.5%</td>
              <td>Support</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Red-Tinted Friends I</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/ryuminir.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Ryuminir Doll</span>
                </div>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/scarlet-van-halisha.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Scarlet van Halisha Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/vulcan.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-common.png" alt="" />
                  <span className="tooltip common">Common Vulcan Doll</span>
                </div>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/king-ignis.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced King Ignis Doll</span>
                </div>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/behemoth-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Behemoth Doll</span>
                </div>
              </td>
              <td>M. Def. +100</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Red-Tinted Friends II</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/ryuminir.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-enhanced.png" alt="" />
                  <span className="tooltip enhanced">Enhanced Ryuminir Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/king-ignis.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior King Ignis Doll</span>
                </div>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/scarlet-van-halisha.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Scarlet van Halisha Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/vulcan.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-superior.png" alt="" />
                  <span className="tooltip superior">Superior Vulcan Doll</span>
                </div>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/behemoth-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-rare.png" alt="" />
                  <span className="tooltip rare">Rare Behemoth Doll</span>
                </div>
              </td>
              <td>M. Def. +200</td>
              <td>Defense</td>
            </tr>
            <tr>
              <td className="skill-container">
                <span className="skill-text">Red-Tinted Friends III</span>
              </td>
              <td>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/scarlet-van-halisha.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Scarlet van Halisha Doll</span>
                </div>
                <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/vulcan.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-legendary.png" alt="" />
                  <span className="tooltip legendary">Legendary Vulcan Doll</span>
                </div>
              <div className="icon-container">
                  <img className="skill-icon3" src="/items/icons/doll/behemoth-doll.png" alt="" />
                  <img className="icon-panel3" src="/items/icons/doll/panel-mythic.png" alt="" />
                  <span className="tooltip mythic">Mythic Behemoth Doll</span>
                </div>
              </td>
              <td>P. Atk. +100, M. Atk. +100</td>
              <td>Attack</td>
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
