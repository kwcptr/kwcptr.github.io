import { Table, Title } from "../../components";
import { FROST_LORDS_MAGIC_BLUNT_WEAPON_ENCHANT_V1, FROST_LORDS_MAGIC_BLUNT_WEAPON_TRIGGER_V1, FROST_LORDS_MAGIC_BLUNT_WEAPON_V1, FROST_LORDS_MAGIC_BLUNT_WEAPON_TRIGGER2_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const FrostLordsMagicBluntWeapon = () => {
  return (
    <div>
      <Title
        label="Frost Lord's Magic Blunt Weapon"
        image="/items/icons/frost-lord-weapon/frost-lords-magic-blunt-weapon.png"
      />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_MAGIC_BLUNT_WEAPON_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_MAGIC_BLUNT_WEAPON_V1} />
          </div>
          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Trigger skill: Stay Frozen: Debuff </h3>
            <div className="type__col" />
            <Table data={FROST_LORDS_MAGIC_BLUNT_WEAPON_TRIGGER2_V1} />
          </div>
          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Stay Frozen: Damage </h3>
            <div className="type__col2">
              <p className="col__stats">Basic attack</p>
              <p className="col__stats">Skill attack</p>
            </div>
            <Table data={FROST_LORDS_MAGIC_BLUNT_WEAPON_TRIGGER_V1} />
          </div>

        </div>
      </div>
    </div>
  );
};
