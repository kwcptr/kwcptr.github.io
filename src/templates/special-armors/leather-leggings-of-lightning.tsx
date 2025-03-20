import { Table, Title } from "components";
import { LEATHER_LEGGINGS_OF_LIGHTNING_ENCHANT_V1, LEATHER_LEGGINGS_OF_LIGHTNING_V1, LEATHER_LEGGINGS_OF_LIGHTNING_TRIGGER_V1 } from "data";

export const LeatherLeggingsOfLightning = () => {

  return (
    <div>
        <Title
          label="Leather Leggings of Lightning"
          image="/items/icons/special-armor/leather-leggings-of-lightning.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={LEATHER_LEGGINGS_OF_LIGHTNING_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={LEATHER_LEGGINGS_OF_LIGHTNING_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Electric Disorder</h3>
              <Table data={LEATHER_LEGGINGS_OF_LIGHTNING_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
