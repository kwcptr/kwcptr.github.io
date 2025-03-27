import { Title } from "components";

export const HardinsTranscendentSoulCrystal = () => {

  return (
    <div>
      <div className="section__items2">
        <Title
          label="Hardin's Transcendent Soul Crystal"
          image="/items/icons/other-item/hardins-transcendent-soul-crystal.png"
        />
        <div className="article-table-container-small">
          <table className="article-table">
            <thead>
              <tr>
                <th colSpan={2}>Compounding</th>
                <th colSpan={3}>Crystal effect (only one can be chosen)</th>
              </tr>
              <tr>
                <th>Lv.</th>
                <th>Success rate</th>
                <th>Physical Abilities</th>
                <th>Magical Abilities</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lv. 1</td>
                <td>30%</td>
                <td>P. Atk. +20%, P. Atk. +1000<br />P. Skill Power +5.5%<br />HP Recovery Rate +15<br />STR +1, CON +5<br />Acquired XP/ SP +10%<br />Recovers 1000 HP when attacking<br />(Trigger rate: 30%, trigger cooldown: 60 seconds)</td>
                <td>M. Atk. +20%, M. Atk. +1000<br />M. Skill Power +5.5%<br />MP Recovery Rate +15<br />INT +1, MEN +5<br />Acquired XP/ SP +10%<br />Recovers 700 MP when attacking<br />(Trigger rate: 30%, trigger cooldown: 60 seconds)</td>
              </tr>
              <tr>
                <td>Lv. 2</td>
                <td>30%</td>
                <td>P. Atk. +20%, P. Atk. +2000<br />P. Skill Power +6%<br />HP Recovery Rate +15<br />STR +2, CON +5<br />Acquired XP/ SP +20%<br />Recovers 1100 HP when attacking<br />(Trigger rate: 30%, trigger cooldown: 60 seconds)</td>
                <td>M. Atk. +20%, M. Atk. +2000<br />M. Skill Power +6%<br />MP Recovery Rate +15<br />INT +2, MEN +5<br />Acquired XP/ SP +20%<br />Recovers 800 MP when attacking<br />(Trigger rate: 30%, trigger cooldown: 60 seconds)</td>
              </tr>
              <tr>
                <td>Lv. 3</td>
                <td>25%</td>
                <td>P. Atk. +20%, P. Atk. +3000<br />P. Skill Power +6.5%<br />HP Recovery Rate +15<br />STR +3, CON +5<br />Acquired XP/ SP +30%<br />Recovers 1200 HP when attacking<br />(Trigger rate: 30%, trigger cooldown: 60 seconds)</td>
                <td>M. Atk. +20%, M. Atk. +3000<br />M. Skill Power +6.5%<br />MP Recovery Rate +15<br />INT +3, MEN +5<br />Acquired XP/ SP +30%<br />Recovers 900 MP when attacking<br />(Trigger rate: 30%, trigger cooldown: 60 seconds)</td>
              </tr>
              <tr>
                <td>Lv. 4</td>
                <td>20%</td>
                <td>P. Atk. +20%, P. Atk. +4000<br />P. Skill Power +7%<br />HP Recovery Rate +15<br />STR +4, CON +5<br />Acquired XP/ SP +40%<br />Recovers 1300 HP when attacking<br />(Trigger rate: 30%, trigger cooldown: 60 seconds)</td>
                <td>M. Atk. +20%, M. Atk. +4000<br />M. Skill Power +7%<br />MP Recovery Rate +15<br />INT +4, MEN +5<br />Acquired XP/ SP +40%<br />Recovers 1000 MP when attacking<br />(Trigger rate: 30%, trigger cooldown: 60 seconds)</td>
              </tr>
              <tr>
                <td>Lv. 5</td>
                <td>15%</td>
                <td>P. Atk. +20%, P. Atk. +5000<br />P. Skill Power +8%<br />HP Recovery Rate +15<br />STR +5, CON +5<br />Acquired XP/ SP +50%<br />Recovers 1500 HP when attacking<br />(Trigger rate: 30%, trigger cooldown: 60 seconds)</td>
                <td>M. Atk. +20%, M. Atk. +5000<br />M. Skill Power +8%<br />MP Recovery Rate +15<br />INT +5, MEN +5<br />Acquired XP/ SP +50%<br />Recovers 1100 MP when attacking<br />(Trigger rate: 30%, trigger cooldown: 60 seconds)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
