import { Table, Title } from "components";
import { AGATHION_PETRAM_V1, AGATHION_PETRAM_ENCHANT_V1 } from "data";

export const AgathionPetram = () => {

  return (
    <div>
        <Title
          label="Agathion Petram"
          image="/items/icons/agathion/agathion-petram.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={AGATHION_PETRAM_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={AGATHION_PETRAM_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
