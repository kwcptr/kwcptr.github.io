import { Table, Title } from "components";
import { BERSERKERS_SHIELD_2_V1, BERSERKERS_SHIELD_ENCHANT_V1, BERSERKERS_SHIELD_TRIGGER_2_V1, BERSERKERS_SHIELD_TRIGGER_V1, BERSERKERS_SHIELD_V1 } from "data";

export const BerserkersShield = () => {

  return (
    <div>
        <Title
          label="Berserker's Shield"
          image="/items/icons/berserkers-shield.png"
        />
        <div className="contain">
          <div className="table__container">

          <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={BERSERKERS_SHIELD_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Basic bonus</h3>
              <Table data={BERSERKERS_SHIELD_2_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={BERSERKERS_SHIELD_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Berserker's Resurrection</h3>
              <Table data={BERSERKERS_SHIELD_TRIGGER_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Absolute Vengeance</h3>
              <Table data={BERSERKERS_SHIELD_TRIGGER_2_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
