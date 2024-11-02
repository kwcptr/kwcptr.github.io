import { Table, Title } from "components";
import { BLESSED_TALISMAN_OF_EVA_V1, BLESSED_TALISMAN_OF_EVA_ENCHANT_V1 } from "data";

export const BlessedTalismanOfEva = () => {

  return (
    <div>
        <Title
          label="Blessed Talisman of Eva"
          image="/items/icons/talisman/blessed-talisman-of-eva.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={BLESSED_TALISMAN_OF_EVA_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={BLESSED_TALISMAN_OF_EVA_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
