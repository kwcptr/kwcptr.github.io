import { Table, Title } from "../../components";
import { GALAXIAS_ANCIENT_SWORD_ENCHANT_V1, GALAXIAS_ANCIENT_SWORD_TRIGGER2_V1, GALAXIAS_ANCIENT_SWORD_TRIGGER_V1, GALAXIAS_ANCIENT_SWORD_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const GalaxiasAncientSword = () => {
  return (
    <div>
      <Title
        label="Galaxia's Ancient Sword"
        image="/items/icons/boss-weapon/galaxias-ancient-sword.png"
      />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant </h3>
            <div className="type__col" />
            <Table data={GALAXIAS_ANCIENT_SWORD_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={GALAXIAS_ANCIENT_SWORD_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Galaxia's Justice </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={GALAXIAS_ANCIENT_SWORD_TRIGGER_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Galaxia's Enhanced Justice </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={GALAXIAS_ANCIENT_SWORD_TRIGGER2_V1} />
          </div>
        </div>
      </div>
    </div>
  );
};
