import { Table, Title } from "components";
import { TALISMAN_OF_EVA_V1, TALISMAN_OF_EVA_ENCHANT_V1 } from "data";

export const TalismanOfEva = () => {

  return (
    <div>
        <Title
          label="Talisman of Eva"
          image="/items/icons/talisman/talisman-of-eva.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={TALISMAN_OF_EVA_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={TALISMAN_OF_EVA_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
