import { Table, Title } from "../../components";
import { FROST_LORDS_SPEAR_ENCHANT_V1, FROST_LORDS_SPEAR_TRIGGER_V1, FROST_LORDS_SPEAR_V1, FROST_LORDS_SPEAR_TRIGGER2_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const FrostLordsSpear = () => {
  return (
    <div>
      <Title
        label="Frost Lord's Spear"
        image="/items/icons/frost-lord-weapon/frost-lords-spear.png"
      />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchantment </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_SPEAR_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_SPEAR_V1} />
          </div>
          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Trigger skill: Absolute Zero: Debuff </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_SPEAR_TRIGGER2_V1} />
          </div>
          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Absolute Zero: Damage </h3>
            <div className="type__col2">
              <p className="col__stats">Basic attack</p>
              <p className="col__stats">Skill attack</p>
            </div>
            <Table data={FROST_LORDS_SPEAR_TRIGGER_V1} />
          </div>

        </div>
      </div>
    </div>
  );
};
