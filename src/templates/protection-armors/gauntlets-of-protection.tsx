import { Table, Title } from "components";
import { GAUNTLETS_OF_PROTECTION_ENCHANT_V1, GAUNTLETS_OF_PROTECTION_TRIGGER_V1, GAUNTLETS_OF_PROTECTION_V1 } from "data";

export const GauntletsOfProtection = () => {

  return (
    <div>
        <Title
          label="Gauntlets of Protection"
          image="/items/icons/armor-of-protection/gauntlets-of-protection.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={GAUNTLETS_OF_PROTECTION_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={GAUNTLETS_OF_PROTECTION_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Power Defense</h3>
              <Table data={GAUNTLETS_OF_PROTECTION_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
