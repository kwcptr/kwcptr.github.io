import { Table, Title } from "components";
import { LEATHER_ARMOR_OF_PROTECTION_ENCHANT_V1, LEATHER_ARMOR_OF_PROTECTION_TRIGGER_V1, LEATHER_ARMOR_OF_PROTECTION_V1 } from "data";

export const LeatherArmorOfProtection = () => {

  return (
    <div>
        <Title
          label="Leather Armor of Protection"
          image="/items/icons/armor-of-protection/leather-armor-of-protection.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={LEATHER_ARMOR_OF_PROTECTION_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={LEATHER_ARMOR_OF_PROTECTION_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Counter Paralysis</h3>
              <Table data={LEATHER_ARMOR_OF_PROTECTION_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
