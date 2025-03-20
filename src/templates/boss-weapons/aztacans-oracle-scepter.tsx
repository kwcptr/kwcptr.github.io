import { Table, Title } from "components";
import { AZTAKANS_ORACLE_WAND_ENCHANT_V1, AZTAKANS_ORACLE_WAND_V1 } from "data";

export const AztacansOracleScepter = () => {

  return (
    <div>
        <Title
          label="Aztacan's Oracle Scepter"
          image="/items/icons/boss-weapon/aztakans-oracle-wand.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={AZTAKANS_ORACLE_WAND_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={AZTAKANS_ORACLE_WAND_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
