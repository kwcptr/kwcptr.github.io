import { Title } from "components";

export const Amber = () => {

  return (
    <div>
      <div className="section__items2">
        <Title
          label="Amber"
          image="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/icon/36/image_92036.png  "
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
              <td>Interrupts the target's skill casting.<br /><br /><span style={{ color: '#FFBB00' }}>&lt;PvP effect&gt;</span><br /> Deals 500 fixed damage.<br />Ignores protective barriers and CP.</td>
              </tr>
            <tr>
              <td>Lv. 2</td>
              <td>65%</td>
              <td>Interrupts the target's skill casting.<br /><br /><span style={{ color: '#FFBB00' }}>&lt;PvP effect&gt;</span><br /> Deals 700 fixed damage.<br />Ignores protective barriers and CP.</td>
              </tr>
            <tr>
              <td>Lv. 3</td>
              <td>40%</td>
              <td>Interrupts the target's skill casting.<br /><br /><span style={{ color: '#FFBB00' }}>&lt;PvP effect&gt;</span><br /> Deals 1000 fixed damage.<br />Ignores protective barriers and CP.</td>
              </tr>
            <tr>
              <td>Lv. 4</td>
              <td>35%</td>
              <td>Interrupts the target's skill casting.<br /><br /><span style={{ color: '#FFBB00' }}>&lt;PvP effect&gt;</span><br /> Deals 1500 fixed damage.<br />Ignores protective barriers and CP.</td>
              </tr>
            <tr>
              <td>Lv. 5</td>
              <td>30%</td>
              <td>Interrupts the target's skill casting.<br /><br /><span style={{ color: '#FFBB00' }}>&lt;PvP effect&gt;</span><br /> Deals 2000 fixed damage.<br />Ignores protective barriers and CP.</td>
              </tr>
            <tr>
              <td>Lv. 6</td>
              <td>25%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Special effect&gt;</span><br /><span style={{ color: '#FF8000' }}>Amber - Special Imprisonmen</span><br />Debuff effect: When hit, blocks the enemy's <span style={{ color: '#FFBB00' }}>additional attack</span> damage.<br />Trigger rate: 1%<br />Duration: 10 sec.<br /><br />Interrupts the target's skill casting.<br /><br /><span style={{ color: '#FFBB00' }}>&lt;PvP effect&gt;</span><br /> Deals 2500 fixed damage.<br />Ignores protective barriers and CP.<br />P./ M. Def. -4%.<br />With a 20% chance, removes debuffs and anomalies.<br /><br /><span style={{ color: '#FFBB00' }}>&lt;PvE effect&gt;</span><br />P./ M. Def. -10%.</td>
              </tr>
            <tr>
              <td>Lv. 7</td>
              <td>20%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Special effect&gt;</span><br /><span style={{ color: '#FF8000' }}>Amber - Special Imprisonmen</span><br />Debuff effect: When hit, blocks the enemy's <span style={{ color: '#FFBB00' }}>additional attack</span> damage.<br />Trigger rate: 2%<br />Duration: 10 sec.<br /><br />Interrupts the target's skill casting.<br /><br /><span style={{ color: '#FFBB00' }}>&lt;PvP effect&gt;</span><br /> Deals 3000 fixed damage.<br />Ignores protective barriers and CP.<br />P./ M. Def. -8%.<br />With a 30% chance, removes debuffs and anomalies.<br /><br /><span style={{ color: '#FFBB00' }}>&lt;PvE effect&gt;</span><br />P./ M. Def. -15%.</td>
              </tr>
            <tr>
              <td>Lv. 8</td>
              <td>15%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Special effect&gt;</span><br /><span style={{ color: '#FF8000' }}>Amber - Special Imprisonmen</span><br />Debuff effect: When hit, blocks the enemy's <span style={{ color: '#FFBB00' }}>additional attack</span> damage.<br />Trigger rate: 5%<br />Duration: 10 sec.<br /><br />Interrupts the target's skill casting.<br /><br /><span style={{ color: '#FFBB00' }}>&lt;PvP effect&gt;</span><br /> Deals 3500 fixed damage.<br />Ignores protective barriers and CP.<br />P./ M. Def. -12%.<br />With a 50% chance, removes debuffs and anomalies.<br /><br /><span style={{ color: '#FFBB00' }}>&lt;PvE effect&gt;</span><br />P./ M. Def. -20%.</td>
              </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};
