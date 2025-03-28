import { Table, Title } from "components";
import { BLESSED_TALISMAN_OF_ADEN_ENCHANT_V1, BLESSED_TALISMAN_OF_ADEN_V1 } from "data";

export const BlessedTalismanOfAden = () => {

  return (
    <div>
        <Title
          label="Blessed Talisman of Aden"
          image="/items/icons/talisman/blessed-talisman-of-aden.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={BLESSED_TALISMAN_OF_ADEN_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={BLESSED_TALISMAN_OF_ADEN_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
