import { Table, Title } from "components";
import { AGATHION_NEBULA_ENCHANT_V1, AGATHION_NEBULA_V1 } from "data";

export const AgathionNebula = () => {

  return (
    <div>
        <Title
          label="Agathion Nebula"
          image="/items/icons/agathion/agathion-nebula.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={AGATHION_NEBULA_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={AGATHION_NEBULA_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
