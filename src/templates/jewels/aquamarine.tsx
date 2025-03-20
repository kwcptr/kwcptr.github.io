import { Title } from "components";

export const Aquamarine = () => {

  return (
    <div>
      <div className="section__items2">
        <Title
          label="Aquamarine"
          image="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/icon/27/image_102827.png"
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
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />Atk. Spd. +1%<br />Casting Spd. +1%<br />Acquired XP/ SP +3%</td>
            </tr>
            <tr>
              <td>Lv. 2</td>
              <td>65%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />Atk. Spd. +2%<br />Casting Spd. +2%<br />Acquired XP/ SP +4%</td>
            </tr>
            <tr>
              <td>Lv. 3</td>
              <td>40%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />Atk. Spd. +4%<br />Casting Spd. +4%<br />Acquired XP/ SP +6%</td>
            </tr>
            <tr>
              <td>Lv. 4</td>
              <td>35%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />Atk. Spd. +7%<br />Casting Spd. +7%<br />Acquired XP/ SP +8%</td>
            </tr>
            <tr>
              <td>Lv. 5</td>
              <td>30%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />Atk. Spd. +10%<br />Casting Spd. +10%<br />Acquired XP/ SP +11%</td>
            </tr>
            <tr>
              <td>Lv. 6</td>
              <td>25%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />Atk. Spd. +14%<br />Casting Spd. +14%<br />Speed +1<br />Acquired XP/ SP +15%<br />Acquired Magic Lamp XP +2%</td>
            </tr>
            <tr>
              <td>Lv. 7</td>
              <td>20%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />Atk. Spd. +18%<br />Casting Spd. +18%<br />Speed +2<br />Acquired XP/ SP +20%<br />Acquired Magic Lamp XP +3%</td>
            </tr>
            <tr>
              <td>Lv. 8</td>
              <td>15%</td>
              <td><span style={{ color: '#00FF00' }}>&lt;Base effect&gt;</span><br />Atk. Spd. +22%<br />Casting Spd. +22%<br />Speed +3<br />Acquired XP/ SP +25%<br />Acquired Magic Lamp XP +5%</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};
