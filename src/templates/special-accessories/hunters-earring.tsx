import { Table, Title } from "components";
import { HUNTERS_EARRING_ENCHANT_V1, HUNTERS_EARRING_V1 } from "data";

export const HuntersEarring = () => {

  return (
    <div>
        <Title
          label="Hunter's Earring"
          image="/items/icons/special-accessory/hunters-earring.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={HUNTERS_EARRING_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={HUNTERS_EARRING_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
