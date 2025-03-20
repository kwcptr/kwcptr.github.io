import { Table, Title } from "components";
import { LEATHER_LEGGINGS_OF_PROTECTION_TRIGGER_V1, LEATHER_LEGGINGS_OF_PROTECTION_ENCHANT_V1, LEATHER_LEGGINGS_OF_PROTECTION_V1 } from "data";

export const LeatherLeggingsOfProtection = () => {

  return (
    <div>
        <Title
          label="Leather Leggings of Protection"
          image="/items/icons/armor-of-protection/leather-leggings-of-protection.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={LEATHER_LEGGINGS_OF_PROTECTION_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={LEATHER_LEGGINGS_OF_PROTECTION_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Critical Damage Defense</h3>
              <Table data={LEATHER_LEGGINGS_OF_PROTECTION_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
