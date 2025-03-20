import { Title } from "components";

export const Sapphire = () => {

  return (
    <div>
      <div className="section__items2">
        <Title
          label="Sapphire"
          image="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/icon/17/image_102817.png"
        />
        <table className="article-table">
          <thead>
            <tr>
              <th colSpan={2}>Compounding</th>
              <th rowSpan={2}>Description</th></tr>
            <tr>
              <th>Lv.</th>
              <th>Success rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lv. 1</td>
              <td>-</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />P. Atk. +30<br />M. Atk. +30<br />P. Def. +50<br />M. Def. +50<br />P. Critical Damage +2%<br />M. Skill Critical Damage +2%</td>
            </tr>
            <tr>
              <td>Lv. 2</td>
              <td>65%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />P. Atk. +100<br />M. Atk. +100<br />P. Def. +125<br />M. Def. +125<br />P. Critical Damage +4%<br />M. Skill Critical Damage +4%</td>
            </tr>
            <tr>
              <td>Lv. 3</td>
              <td>40%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />P. Atk. +175<br />M. Atk. +175<br />P. Def. +245<br />M. Def. +245<br />P. Critical Damage +6%<br />M. Skill Critical Damage +6%</td>
            </tr>
            <tr>
              <td>Lv. 4</td>
              <td>35%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />P. Atk. +250<br />M. Atk. +250<br />P. Def. +365<br />M. Def. +365<br />P. Critical Damage +8%<br />M. Skill Critical Damage +8%</td>
            </tr>
            <tr>
              <td>Lv. 5</td>
              <td>30%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />P. Atk. +330<br />M. Atk. +330<br />P. Def. +495<br />M. Def. +495<br />P. Critical Damage +11%<br />M. Skill Critical Damage +11%</td>
            </tr>
            <tr>
              <td>Lv. 6</td>
              <td>25%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />P. Atk. +410<br />M. Atk. +410<br />P. Def. +625<br />M. Def. +625<br />P. Critical Damage +15%<br />P. Skill Critical Damage +2%<br />M. Skill Critical Damage +15%<br />When hit, triggers a special effect.<br /><br /><span style={{ color: '#00FF00' }}>&lt;Special effect&gt;</span><br /><span style={{ color: '#FF8000' }}>Sapphire - Barrier</span><br />Creates a protective barrier with 3000 HP.<br />Duration: 10 sec.<br />Trigger cooldown: 60 sec.</td>
            </tr>
            <tr>
              <td>Lv. 7</td>
              <td>20%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />P. Atk. +490<br />M. Atk. +490<br />P. Def. +765<br />M. Def. +765<br />P. Critical Damage +15%<br />P. Skill Critical Damage +5%<br />M. Skill Critical Damage +19%<br />Skill Power +2%<br />When hit, triggers a special effect.<br /><br /><span style={{ color: '#00FF00' }}>&lt;Special effect&gt;</span><br /><span style={{ color: '#FF8000' }}>Sapphire - Barrier</span><br />Creates a protective barrier with 4000 HP.<br />Duration: 10 sec.<br />Trigger cooldown: 60 sec.</td>
            </tr>
            <tr>
              <td>Lv. 8</td>
              <td>15%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />P. Atk. +570<br />M. Atk. +570<br />P. Def. +905<br />M. Def. +905<br />P. Critical Damage +15%<br />P. Skill Critical Damage +9%<br />M. Skill Critical Damage +23%<br />Skill Power +5%<br />When hit, triggers a special effect.<br /><br /><span style={{ color: '#00FF00' }}>&lt;Special effect&gt;</span><br /><span style={{ color: '#FF8000' }}>Sapphire - Barrier</span><br />Creates a protective barrier with 5000 HP.<br />Duration: 10 sec.<br />Trigger cooldown: 60 sec.</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};
