import { Table, Title } from "components";
import { STOCKINGS_OF_PROTECTION_ENCHANT_V1, STOCKINGS_OF_PROTECTION_TRIGGER_V1, STOCKINGS_OF_PROTECTION_V1 } from "data";

export const StockingsOfProtection = () => {

  return (
    <div>
        <Title
          label="Stockings of Protection"
          image="/items/icons/armor-of-protection/stockings-of-protection.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={STOCKINGS_OF_PROTECTION_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={STOCKINGS_OF_PROTECTION_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Defense Shield</h3>
              <Table data={STOCKINGS_OF_PROTECTION_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
