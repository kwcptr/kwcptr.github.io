import { Table, Title } from "../../components";
import { FROST_LORDS_RAPIER_ENCHANT_V1, FROST_LORDS_RAPIER_TRIGGER_V1, FROST_LORDS_RAPIER_V1, FROST_LORDS_RAPIER_TRIGGER2_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const FrostLordsRapier = () => {
  return (
    <div>
      <Title
        label="Frost Lord's Rapier"
        image="/items/icons/frost-lord-weapon/frost-lords-rapier.png"
      />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_RAPIER_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_RAPIER_V1} />
          </div>
          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Trigger skill: Furious Frost: Debuff </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_RAPIER_TRIGGER2_V1} />
          </div>
          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Furious Frost: Damage </h3>
            <div className="type__col2">
              <p className="col__stats">Basic attack</p>
              <p className="col__stats">Skill attack</p>
            </div>
            <Table data={FROST_LORDS_RAPIER_TRIGGER_V1} />
          </div>

        </div>
      </div>
    </div>
  );
};
