import { Table, Title } from "components";
import { LEATHER_ARMOR_OF_LIGHTNING_ENCHANT_V1, LEATHER_ARMOR_OF_LIGHTNING_V1, LEATHER_ARMOR_OF_LIGHTNING_TRIGGER_V1, LEATHER_ARMOR_OF_LIGHTNING_TRIGGER2_V1 } from "data";

export const LeatherArmorOfLightning = () => {

  return (
    <div>
        <Title
          label="Leather Armor of Lightning"
          image="/items/icons/special-armor/leather-armor-of-lightning.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={LEATHER_ARMOR_OF_LIGHTNING_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={LEATHER_ARMOR_OF_LIGHTNING_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Electric Defense</h3>
              <Table data={LEATHER_ARMOR_OF_LIGHTNING_TRIGGER_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Electric Shock</h3>
              <Table data={LEATHER_ARMOR_OF_LIGHTNING_TRIGGER2_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
