import { Table, Title } from "components";
import { GAITERS_OF_PROTECTION_ENCHANT_V1, GAITERS_OF_PROTECTION_V1, GAITERS_OF_PROTECTION_TRIGGER_V1 } from "data";

export const GaitersOfProtection = () => {

  return (
    <div>
        <Title
          label="Gaiters of Protection"
          image="/items/icons/armor-of-protection/gaiters-of-protection.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={GAITERS_OF_PROTECTION_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={GAITERS_OF_PROTECTION_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Damage Limit</h3>
              <Table data={GAITERS_OF_PROTECTION_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
