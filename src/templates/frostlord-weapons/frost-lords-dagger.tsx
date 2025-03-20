import { Table, Title } from "../../components";
import { FROST_LORDS_DAGGER_ENCHANT_V1, FROST_LORDS_DAGGER_TRIGGER_V1, FROST_LORDS_DAGGER_V1, FROST_LORDS_DAGGER_TRIGGER2_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const FrostLordsDagger = () => {
  return (
    <div className="contain">
      <Title
        label="Frost Lord's Dagger"
        image="/items/icons/frost-lord-weapon/frost-lords-dagger.png"
      />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_DAGGER_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_DAGGER_V1} />
          </div>
          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Trigger skill: Furious Frost: Debuff </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_DAGGER_TRIGGER2_V1} />
          </div>
          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Furious Frost: Damage </h3>
            <div className="type__col2">
              <p className="col__stats">Basic attack</p>
              <p className="col__stats">Skill attack</p>
            </div>
            <Table data={FROST_LORDS_DAGGER_TRIGGER_V1} />
          </div>

        </div>
      </div>
    </div>
  );
};
