import { Table, Title } from "components";
import { BOOTS_OF_PROTECTION_ENCHANT_V1, BOOTS_OF_PROTECTION_V1, BOOTS_OF_PROTECTION_TRIGGER_V1 } from "data";

export const BootsOfProtection = () => {

  return (
    <div>
        <Title
          label="Boots Of Protection"
          image="/items/icons/armor-of-protection/boots-of-protection.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={BOOTS_OF_PROTECTION_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={BOOTS_OF_PROTECTION_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Debuff Defense</h3>
              <Table data={BOOTS_OF_PROTECTION_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
