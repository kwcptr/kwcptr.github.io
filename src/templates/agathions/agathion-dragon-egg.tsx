import { Table, Title } from "components";
import { DRAGONS_EGG_AGATHION_ENCHANT_V1, DRAGONS_EGG_AGATHION_V1 } from "data";

export const AgathionDragonEgg = () => {

  return (
    <div>
        <Title
          label="Agathion Dragon Egg"
          image="/items/icons/agathion/agathion-dragon-egg.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={DRAGONS_EGG_AGATHION_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={DRAGONS_EGG_AGATHION_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
