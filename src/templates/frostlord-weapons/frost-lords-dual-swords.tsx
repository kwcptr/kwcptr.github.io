import { Table, Title } from "../../components";
import { FROST_LORDS_DUAL_SWORDS_ENCHANT_V1, FROST_LORDS_DUAL_SWORDS_TRIGGER_V1, FROST_LORDS_DUAL_SWORDS_V1, FROST_LORDS_DUAL_SWORDS_TRIGGER2_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const FrostLordsDualSwords = () => {
  return (
    <div>
      <Title
        label="Frost Lord's Dual Swords"
        image="/items/icons/frost-lord-weapon/frost-lords-dual-swords.png"
      />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_DUAL_SWORDS_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_DUAL_SWORDS_V1} />
          </div>
          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Trigger skill: Absolute Zero: Debuff </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_DUAL_SWORDS_TRIGGER2_V1} />
          </div>
          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Absolute Zero: Damage </h3>
            <div className="type__col2">
              <p className="col__stats">Basic attack</p>
              <p className="col__stats">Skill attack</p>
            </div>
            <Table data={FROST_LORDS_DUAL_SWORDS_TRIGGER_V1} />
          </div>

        </div>
      </div>
    </div>
  );
};
