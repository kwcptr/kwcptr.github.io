import { Table, Title } from "../../components";
import { ORFENS_VENOM_SWORD_ENCHANT_V1, ORFENS_VENOM_SWORD_TRIGGER2_V1, ORFENS_VENOM_SWORD_V1, ORFENS_VENOM_SWORD_TRIGGER_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const OrfensVenomSword = () => {
  return (
    <div>
      <Title
        label="Orfen's Venom Sword"
        image="/items/icons/boss-weapon/orfens-venom-sword.png"
      />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant </h3>
            <div className="type__col" />
            <Table data={ORFENS_VENOM_SWORD_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={ORFENS_VENOM_SWORD_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Orfen's Poison Storm </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={ORFENS_VENOM_SWORD_TRIGGER_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Orfen's Enhanced Poison Storm </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={ORFENS_VENOM_SWORD_TRIGGER2_V1} />
          </div>
        </div>
      </div>
    </div>
  );
};
