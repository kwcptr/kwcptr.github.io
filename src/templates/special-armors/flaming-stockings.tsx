import { Table, Title } from "components";
import { FLAMING_STOCKINGS_ENCHANT_V1, FLAMING_STOCKINGS_TRIGGER_V1, FLAMING_STOCKINGS_V1 } from "data";

export const FlamingStockings = () => {

  return (
    <div>
        <Title
          label="Flaming Stockings"
          image="/items/icons/special-armor/flaming-stockings.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={FLAMING_STOCKINGS_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={FLAMING_STOCKINGS_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Flame Weakness</h3>
              <Table data={FLAMING_STOCKINGS_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
