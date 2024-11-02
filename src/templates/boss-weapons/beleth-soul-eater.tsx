import { Table, Title } from "../../components";
import { BELETH_SOUL_EATER_ENCHANT_V1, BELETH_SOUL_EATER_TRIGGER2_V1, BELETH_SOUL_EATER_TRIGGER_V1, BELETH_SOUL_EATER_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const BelethSoulEater = () => {
  return (
    <div>
      <Title
        label="Beleth' Soul Eater"
        image="/items/icons/boss-weapon/beleth-soul-eater.png"
      />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchantment </h3>
            <div className="type__col" />
            <Table data={BELETH_SOUL_EATER_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={BELETH_SOUL_EATER_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Beleth' Killing Thunder </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={BELETH_SOUL_EATER_TRIGGER_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Beleth' Mighty Killing Thunder </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={BELETH_SOUL_EATER_TRIGGER2_V1} />
          </div>
        </div>
      </div>
    </div>
  );
};
