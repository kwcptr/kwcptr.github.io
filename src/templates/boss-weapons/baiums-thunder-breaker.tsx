import { Table, Title } from "../../components";
import { BAIUMS_THUNDER_BREAKER_ENCHANT_V1, BAIUMS_THUNDER_BREAKER_TRIGGER2_V1, BAIUMS_THUNDER_BREAKER_TRIGGER_V1, BAIUMS_THUNDER_BREAKER_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const BaiumsThunderBreaker = () => {
  return (
    <div>
      <Title
        label="Baium's Thunder Breaker"
        image="/items/icons/boss-weapon/baiums-thunder-breaker.png"
      />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchantment </h3>
            <div className="type__col" />
            <Table data={BAIUMS_THUNDER_BREAKER_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={BAIUMS_THUNDER_BREAKER_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Baium's Thunder Bolt </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={BAIUMS_THUNDER_BREAKER_TRIGGER_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Baium's Enhanced Thunder Bolt </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={BAIUMS_THUNDER_BREAKER_TRIGGER2_V1} />
          </div>
        </div>
      </div>
    </div>
  );
};
