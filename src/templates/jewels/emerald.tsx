import { Title } from "components";

export const Emerald = () => {

  return (
    <div>
      <div className="section__items2">
        <Title
          label="Emerald"
          image="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/icon/07/image_102807.png"
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
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />Soulshot/ Spiritshot Damage +2%<br />CON +1<br />P. Def. +20<br />M. Def. +10<br /><br /><span style={{ color: '#00FF00' }}>&lt;Special effect&gt;</span><br /><span style={{ color: '#FF8000' }}>Emerald - Mana Recovery</span><br />When triggered: Recovers 12 MP when using a skill.<br />Trigger rate: 10%<br />Trigger cooldown: 3 sec.</td>
            </tr>
            <tr>
              <td>Lv. 2</td>
              <td>65%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />Soulshot/ Spiritshot Damage +3%<br />CON/MEN +1<br />P. Def. +30<br />M. Def. +20<br /><br /><span style={{ color: '#00FF00' }}>&lt;Special effect&gt;</span><br /><span style={{ color: '#FF8000' }}>Emerald - Mana Recovery</span><br />When triggered: Recovers 16 MP when using a skill.<br />Trigger rate: 10%<br />Trigger cooldown: 3 sec.</td>
            </tr>
            <tr>
              <td>Lv. 3</td>
              <td>40%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />Soulshot/ Spiritshot Damage +5%<br />DEX/CON/MEN +1<br />P. Def. +60<br />M. Def. +30<br /><br /><span style={{ color: '#00FF00' }}>&lt;Special effect&gt;</span><br /><span style={{ color: '#FF8000' }}>Emerald - Mana Recovery</span><br />When triggered: Recovers 20 MP when using a skill.<br />Trigger rate: 10%<br />Trigger cooldown: 3 sec.</td>
            </tr>
            <tr>
              <td>Lv. 4</td>
              <td>35%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />Soulshot/ Spiritshot Damage +8%<br />DEX/WIT/CON/MEN +1<br />Received P. Critical Damage -4%<br />Received M. Skill Critical Damage -4%<br />P. Def. +100<br />M. Def. +60<br /><br /><span style={{ color: '#00FF00' }}>&lt;Special effect&gt;</span><br /><span style={{ color: '#FF8000' }}>Emerald - Mana Recovery</span><br />When triggered: Recovers 30 MP when using a skill.<br />Trigger rate: 10%<br />Trigger cooldown: 3 sec.</td>
            </tr>
            <tr>
              <td>Lv. 5</td>
              <td>30%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />Soulshot/ Spiritshot Damage +12%<br />STR/INT/DEX/WIT/CON/MEN +1<br />Received P. Critical Damage -7%<br />Received M. Skill Critical Damage -7%<br />P. Def. +150<br />M. Def. +100<br /><br /><span style={{ color: '#00FF00' }}>&lt;Special effect&gt;</span><br /><span style={{ color: '#FF8000' }}>Emerald - Mana Recovery</span><br />When triggered: Recovers 40 MP when using a skill.<br />Trigger rate: 10%<br />Trigger cooldown: 3 sec.</td>
            </tr>
            <tr>
              <td>Lv. 6</td>
              <td>25%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />Soulshot/ Spiritshot Damage +16%<br />P. Atk. +50<br />M. Atk. +50<br />STR/INT/DEX/WIT +1<br />CON/MEN +2<br />Received P. Critical Damage -10%<br />Received M. Skill Critical Damage -10%<br />P. Def. +200<br />M. Def. +150<br /><br /><span style={{ color: '#00FF00' }}>&lt;Special effect&gt;</span><br /><span style={{ color: '#FF8000' }}>Emerald - Mana Recovery</span><br />When triggered: Recovers 50 MP when using a skill.<br />Trigger rate: 10%<br />Trigger cooldown: 3 sec.</td>
            </tr>
            <tr>
              <td>Lv. 7</td>
              <td>20%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />Soulshot/ Spiritshot Damage +20%<br />P. Atk. +150<br />M. Atk. +150<br />STR/INT/DEX/WIT/CON/MEN +2<br />All received Critical Damage -15%<br />P. Def. +250<br />M. Def. +220<br /><br /><span style={{ color: '#00FF00' }}>&lt;Special effect&gt;</span><br /><span style={{ color: '#FF8000' }}>Emerald - Mana Recovery</span><br />When triggered: Recovers 60 MP when using a skill.<br />Trigger rate: 10%<br />Trigger cooldown: 3 sec.</td>
            </tr>
            <tr>
              <td>Lv. 8</td>
              <td>15%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />Soulshot/ Spiritshot Damage +25%<br />P. Atk. +300<br />M. Atk. +300<br />STR/INT/DEX/WIT/CON/MEN +3<br />All received Critical Damage -20%<br />P. Def. +350<br />M. Def. +300<br /><br /><span style={{ color: '#00FF00' }}>&lt;Special effect&gt;</span><br /><span style={{ color: '#FF8000' }}>Emerald - Mana Recovery</span><br />When triggered: Recovers 70 MP when using a skill.<br />Trigger rate: 10%<br />Trigger cooldown: 3 sec.</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};
