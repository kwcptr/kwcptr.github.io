import { Table, Title } from "components";
import { BREASTPLATE_OF_PROTECTION_ENCHANT_V1, BREASTPLATE_OF_PROTECTION_TRIGGER_V1, BREASTPLATE_OF_PROTECTION_V1 } from "data";

export const BreastplateOfProtection = () => {

  return (
    <div>
        <Title
          label="Breastplate of Protection"
          image="/items/icons/armor-of-protection/breastplate-of-protection.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={BREASTPLATE_OF_PROTECTION_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={BREASTPLATE_OF_PROTECTION_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Counter Paralysis</h3>
              <Table data={BREASTPLATE_OF_PROTECTION_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
