import { Table, Title } from "components";
import { TALISMAN_OF_ADEN_V1, TALISMAN_OF_ADEN_ENCHANT_V1 } from "data";

export const TalismanOfAden = () => {

  return (
    <div>
        <Title
          label="Talisman of Aden"
          image="/items/icons/talisman/talisman-of-aden.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={TALISMAN_OF_ADEN_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={TALISMAN_OF_ADEN_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
