import { Table, Title } from "components";
import { SHIELD_OF_PROTECTION_ENCHANT_V1, SHIELD_OF_PROTECTION_TRIGGER_V1, SHIELD_OF_PROTECTION_V1 } from "data";

export const ShieldOfProtection = () => {

  return (
    <div>
        <Title
          label="Shield of Protection"
          image="/items/icons/armor-of-protection/shield-of-protection.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={SHIELD_OF_PROTECTION_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={SHIELD_OF_PROTECTION_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Defense Mode</h3>
              <Table data={SHIELD_OF_PROTECTION_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
