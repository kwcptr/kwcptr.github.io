import { Table, Title } from "components";
import { BLESSED_DRAGON_BELT_ENCHANT_V1, BLESSED_DRAGON_BELT_TRIGGER_V1, BLESSED_DRAGON_BELT_V1 } from "data";

export const BlessedDragonBelt = () => {

  return (
    <div>
        <Title
          label="Blessed Dragon Belt"
          image="/items/icons/belt/blessed-dragon-belt.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={BLESSED_DRAGON_BELT_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={BLESSED_DRAGON_BELT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Dragon's Protection</h3>
              <Table data={BLESSED_DRAGON_BELT_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
