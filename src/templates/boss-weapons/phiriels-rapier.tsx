import { Table, Title } from "../../components";
import { PHIRIELS_RAPIER_ENCHANT_V1, PHIRIELS_RAPIER_TRIGGER2_V1, PHIRIELS_RAPIER_TRIGGER_V1, PHIRIELS_RAPIER_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const PhirielsRapier = () => {
  return (
    <div>
      <Title
        label="Phiriel's Rapier"
        image="/items/icons/boss-weapon/phiriels-rapier.png"
      />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant </h3>
            <div className="type__col" />
            <Table data={PHIRIELS_RAPIER_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={PHIRIELS_RAPIER_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Phiriel's Justice </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={PHIRIELS_RAPIER_TRIGGER_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Phiriel's Enhanced Justice </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={PHIRIELS_RAPIER_TRIGGER2_V1} />
          </div>
        </div>
      </div>
    </div>
  );
};
