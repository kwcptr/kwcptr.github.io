import { Table, Title } from "components";
import { DRAGON_VALLEYS_EARRING_ENCHANT_V1, DRAGON_VALLEYS_EARRING_V1 } from "data";

export const DragonValleysEarring = () => {

  return (
    <div>
        <Title
          label="Dragon Valley's Earring"
          image="/items/icons/special-accessory/dragon-valleys-earring.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={DRAGON_VALLEYS_EARRING_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={DRAGON_VALLEYS_EARRING_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
