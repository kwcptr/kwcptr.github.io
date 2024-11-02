import { Table, Title } from "components";
import { ADEN_CLOAK_ENCHANT_V1, ADEN_CLOAK_V1 } from "data";

export const AdenCloak = () => {

  return (
    <div>
        <Title
          label="Aden Cloak"
          image="/items/icons/cloak/aden-cloak.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={ADEN_CLOAK_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={ADEN_CLOAK_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
