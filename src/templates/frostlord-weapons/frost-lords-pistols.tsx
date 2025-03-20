import { Table, Title } from "../../components";
import { FROST_LORDS_PISTOLS_ENCHANT_V1, FROST_LORDS_PISTOLS_TRIGGER_V1, FROST_LORDS_PISTOLS_V1, FROST_LORDS_PISTOLS_TRIGGER2_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const FrostLordsPistols = () => {
  return (
    <div>
      <Title
        label="Frost Lord's Pistols"
        image="/items/icons/frost-lord-weapon/frost-lords-pistols.png"
      />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_PISTOLS_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_PISTOLS_V1} />
          </div>
          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Trigger skill: Stay Frozen: Debuff </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_PISTOLS_TRIGGER2_V1} />
          </div>
          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Stay Frozen: Damage </h3>
            <div className="type__col2">
              <p className="col__stats">Basic attack</p>
              <p className="col__stats">Skill attack</p>
            </div>
            <Table data={FROST_LORDS_PISTOLS_TRIGGER_V1} />
          </div>

        </div>
      </div>
    </div>
  );
};
