import { Table, Title } from "components";
import { TALISMAN_OF_AUTHORITY_V1, TALISMAN_OF_AUTHORITY_ENCHANT_V1 } from "data";

export const TalismanOfAuthority = () => {

  return (
    <div>
        <Title
          label="Talisman of Authority"
          image="/items/icons/talisman/talisman-of-authority.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={TALISMAN_OF_AUTHORITY_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={TALISMAN_OF_AUTHORITY_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
