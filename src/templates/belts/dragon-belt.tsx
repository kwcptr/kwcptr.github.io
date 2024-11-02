import { Table, Title } from "components";
import { DRAGON_BELT_ENCHANT_V1, DRAGON_BELT_V1 } from "data";

export const DragonBelt = () => {

  return (
    <div>
        <Title
          label="Dragon Belt"
          image="/items/icons/belt/dragon-belt.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={DRAGON_BELT_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={DRAGON_BELT_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
