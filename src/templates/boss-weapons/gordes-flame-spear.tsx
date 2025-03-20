import { Table, Title } from "../../components";
import { GORDES_FLAME_SPEAR_ENCHANT_V1, GORDES_FLAME_SPEAR_TRIGGER2_V1, GORDES_FLAME_SPEAR_TRIGGER_V1, GORDES_FLAME_SPEAR_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const GordesFlameSpear = () => {
  return (
    <div>
      <Title
        label="Gorde's Flame Spear"
        image="/items/icons/boss-weapon/gordes-flame-spear.png"
      />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant </h3>
            <div className="type__col" />
            <Table data={GORDES_FLAME_SPEAR_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={GORDES_FLAME_SPEAR_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Gorde's Hellfire </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={GORDES_FLAME_SPEAR_TRIGGER_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Gorde's Enhanced Hellfire </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={GORDES_FLAME_SPEAR_TRIGGER2_V1} />
          </div>
        </div>
      </div>
    </div>
  );
};
