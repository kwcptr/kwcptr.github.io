import ReactGA from "react-ga4";

export const Article4 = () => {

  ReactGA.send("pageviewarticle3");

  return (
    <div className="news-article">
      <header className="article-header">
        <h1 className="article-title">New Race: High Elves</h1>
        <div className="article-metadata">
          {/* <span className="author">Bona</span> */}
          <span className="date">October 25, 2023</span>
        </div>
      </header>
      <div className="table-of-contents">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#spirit-wizard">Spirit Wizard</a></li>
          <li><a href="#sacred-templar">Sacred Templar</a></li>
        </ul>
      </div>
      <div id="spirit-wizard" className="article-content">
        <div className="article-subtitle3">
        </div>
        <div className="article-text2">
        <img className="class-banner" src="/items/icons/spirit-wizard.png" alt="Spirit Wizard" />
          <video controls src="https://vod.plaync.com/lineage2/update/231025/Skills/SpiritWizard_Hunting.mp4"></video>
        </div>
        <div className="article-text">
          <img className="skill-icon2" src="/items/icons/spirit-skill-1.png" alt="Sephiroth: Master" />
          <span className="article-subtitle2">Sephiroth: Master</span>
          <br />A powerful area attack using the Bow of Light.
          <br />Grant an additional attack buff to both yourself and your party members, and summon a World Tree that bestows a recovery buff.
          <video controls src="https://vod.plaync.com/lineage2/update/231025/Skills/SpiritWizard_Sephiroth.mp4"></video>
        </div>
        <div className="article-text">
          <img className="skill-icon2" src="/items/icons/spirit-skill-2.png" alt="Blazing Tempest & Glacial Strike" />
          <span className="article-subtitle2">Blazing Tempest & Glacial Strike</span>
          <br />An area attack involving Fire and Cold.
          <br />When used consecutively, it inflicts significant additional damage.
          <video controls src="https://vod.plaync.com/lineage2/update/231025/Skills/SpiritWizard_Blazing.mp4"></video>
        </div>
        <div className="article-text">
          <img className="skill-icon2" src="/items/icons/spirit-skill-3.png" alt="Clive Solis" />
          <span className="article-subtitle2">Clive Solis</span>
          <br />Summon a sword of light to strike nearby enemies within a certain range.
          <video controls src="https://vod.plaync.com/lineage2/update/231025/Skills/SpiritWizard_solais.mp4"></video>
        </div>
        <div className="article-text">
          <img className="skill-icon2" src="/items/icons/spirit-skill-4.png" alt="Bloom + Radiance Magic" />
          <span className="article-subtitle2">Bloom + Radiance Magic</span>
          <br />A debuff is applied by planting a plant nearby, and when the plant grows, a hold effect is applied with a certain chance.
          <br />Using brilliance magic on a target affected by the plant debuff results in additional damage.
          <video controls src="https://vod.plaync.com/lineage2/update/231025/Skills/SpiritWizard_Bloom.mp4"></video>
        </div>
        <div className="article-text">
          <img className="skill-icon2" src="/items/icons/spirit-skill-5.png" alt="Flame Orb & Freezing Orb" />
          <span className="article-subtitle2">Flame Orb & Freezing Orb</span>
          <br />A powerful additional attack is triggered when performing consecutive single attacks with Fire and Cold.
          <video controls src="https://vod.plaync.com/lineage2/update/231025/Skills/SpiritWizard_Flame.mp4"></video>
        </div>
        <div className="article-text">
          <img className="skill-icon2" src="/items/icons/spirit-skill-6.png" alt="Natural Spirit + Bright Magic" />
          <span className="article-subtitle2">Natural Spirit + Bright Magic</span>
          <br />Increases HP/MP recovery, reduces the duration of debuffs/anomalies, and has a chance to apply a strengthening buff when using brilliance magic while Natural Spirit is active.
          <video controls src="https://vod.plaync.com/lineage2/update/231025/Skills/SpiritWizard_NaturalSpirit.mp4"></video>
        </div>
      </div>
      <header id="sacred-templar" className="article-header">
      </header>
      <div className="article-content">
        <div className="article-subtitle3">
        </div>
        <div className="article-text">
        <img className="class-banner" src="/items/icons/sacred-templar.png" alt="Spirit Wizard" />
          <video controls src="https://vod.plaync.com/lineage2/update/231025/Skills/SacredTemplar_Hunting.mp4"></video>
        </div>
        <div className="article-text">
          <img className="skill-icon2" src="/items/icons/sacred-skill-1.png" alt="Sacrosanctity: Master" />
          <span className="article-subtitle2">Sacrosanctity: Master</span>
          <br />Deploys an area of light to apply powerful range attack and stun effects to enemies,
          <br />and provides continuous HP recovery and debuff/anomaly resistance effects to allies.
          <video controls src="https://vod.plaync.com/lineage2/update/231025/Skills/SacredTemplar_Sacro.mp4"></video>
        </div>
        <div className="article-text">
          <img className="skill-icon2" src="/items/icons/sacred-skill-2.png" alt="Light Discharge" />
          <span className="article-subtitle2">Light Discharge</span>
          <br />Skill effect changes depending on the target of its use:
          <br />A range attack to enemies in front, stunning them with a certain chance, restores HP to nearby allies.
          <video controls src="https://vod.plaync.com/lineage2/update/231025/Skills/SacredTemplar_light.mp4"></video>
        </div>
        <div className="article-text">
          <img className="skill-icon2" src="/items/icons/sacred-skill-3.png" alt="Justice" />
          <span className="article-subtitle2">Justice</span>
          <br />Skill effect changes depending on the target of its use:
          <br />A range attack to enemies in front, grants a debuff/anomaly resistance buff to allies.
          <video controls src="https://vod.plaync.com/lineage2/update/231025/Skills/SacredTemplar_Justice.mp4"></video>
        </div>
        <div className="article-text">
          <img className="skill-icon2" src="/items/icons/sacred-skill-4.png" alt="Wing Leap" />
          <span className="article-subtitle2">Wing Leap</span>
          <br />Leap towards the target and apply area damage, knocking enemies down with a certain chance.
          <video controls src="https://vod.plaync.com/lineage2/update/231025/Skills/SacredTemplar_Wingleap.mp4"></video>
        </div>
        <div className="article-text">
          <img className="skill-icon2" src="/items/icons/sacred-skill-5.png" alt="Sacred Guardian" />
          <span className="article-subtitle2">Sacred Guardian</span>
          <br />Summon a guardian that uses the same skills as you.
          <video controls src="https://vod.plaync.com/lineage2/update/231025/Skills/SacredTemplar_Guardian.mp4"></video>
        </div>
        <div className="article-text">
          <img className="skill-icon2" src="/items/icons/sacred-skill-6.png" alt="Sacred Bash & Purge" />
          <span className="article-subtitle2">Sacred Bash & Purge</span>
          <br />Skill effect changes depending on the target of its use:
          <br />Inflicts damage to a single enemy, grants a beneficial effect to a single ally.
          <video controls src="https://vod.plaync.com/lineage2/update/231025/Skills/SacredTemplar_Bash.mp4"></video>
        </div>
      </div>
      <div className="article-text3">
        *Skills effects are subject to potential changes in future updates.
      </div>
    </div>
  );
};
