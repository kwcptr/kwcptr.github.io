import { Table, Title } from "components";
import { ICE_CRYSTAL_GAITERS_TRIGGER_V1, ICE_CRYSTAL_GAITERS_ENCHANT_V1, ICE_CRYSTAL_GAITERS_V1 } from "data";

export const IceCrystalGaiters = () => {

  return (
    <div>
        <Title
          label="Ice Crystal Gaiters"
          image="/items/icons/special-armor/ice-crystal-gaiters.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={ICE_CRYSTAL_GAITERS_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={ICE_CRYSTAL_GAITERS_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Freezing Affect</h3>
              <Table data={ICE_CRYSTAL_GAITERS_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
