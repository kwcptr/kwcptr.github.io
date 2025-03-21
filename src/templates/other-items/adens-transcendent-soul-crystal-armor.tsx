import { Title } from "components";

export const AdensTranscendentSoulCrystalArmor = () => {

  return (
    <div>
      <div className="section__items2">
        <Title
          label="Aden's Transcendent Soul Crystal - Armor"
          image="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/icon/99/image_100199.png"
        />
        <div className="article-table-container-small">
          <table className="article-table">
            <thead>
              <tr>
                <th colSpan={2}>Compounding</th>
                <th colSpan={3}>Crystal effect: Incredible Defense - Upper Armor / Lower Armor / Helmet / Gloves / Boots / Upper/Lower Armor (only one can be chosen)</th>
              </tr>
              <tr>
                <th>Lv.</th>
                <th>Success rate</th>
                <th>Shock</th>
                <th>Hold</th>
                <th>Knockback</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lv. 1</td>
                <td>30%</td>
                <td>P./ M. Def. +600<br />Shock Resistance +2%</td>
                <td>P./ M. Def. +600<br />Hold Resistance +2%</td>
                <td>P./ M. Def. +600<br />Knockback Resistance +2%</td>
              </tr>
              <tr>
                <td>Lv. 2</td>
                <td>30%</td>
                <td>P./ M. Def. +800<br />Shock Resistance +3%<br />Damage decrease -50</td>
                <td>P./ M. Def. +800<br />Hold Resistance +3%<br />Damage decrease -50</td>
                <td>P./ M. Def. +800<br />Knockback Resistance +3%<br />Damage decrease -50</td>
              </tr>
              <tr>
                <td>Lv. 3</td>
                <td>25%</td>
                <td>P./ M. Def. +1000<br />Shock Resistance +4%<br />Damage decrease -100</td>
                <td>P./ M. Def. +1000<br />Hold Resistance +4%<br />Damage decrease -100</td>
                <td>P./ M. Def. +1000<br />Knockback Resistance +4%<br />Damage decrease -100</td>
              </tr>
              <tr>
                <td>Lv. 4</td>
                <td>20%</td>
                <td>P./ M. Def. +1200<br />Shock Resistance +5%<br />Damage decrease -150</td>
                <td>P./ M. Def. +1200<br />Hold Resistance +5%<br />Damage decrease -150</td>
                <td>P./ M. Def. +1200<br />Knockback Resistance +5%<br />Damage decrease -150</td>
              </tr>
              <tr>
                <td>Lv. 5</td>
                <td>15%</td>
                <td>P./ M. Def. +1400<br />Shock Resistance +6%<br />Damage decrease -200</td>
                <td>P./ M. Def. +1400<br />Hold Resistance +6%<br />Damage decrease -200</td>
                <td>P./ M. Def. +1400<br />Knockback Resistance +6%<br />Damage decrease -200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
