import { Table, Title } from "components";
import { CLOAK_OF_PROTECTION_ENCHANT_V1, CLOAK_OF_PROTECTION_V1 } from "data";

export const CloakOfProtection = () => {

  return (
    <div>
        <Title
          label="Cloak of Protection"
          image="/items/icons/cloak/cloak-of-protection.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={CLOAK_OF_PROTECTION_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={CLOAK_OF_PROTECTION_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
