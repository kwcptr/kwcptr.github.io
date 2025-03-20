import { Table, Title } from "components";
import { AGATHION_IGNIS_ENCHANT_V1, AGATHION_IGNIS_V1 } from "data";

export const AgathionIgnis = () => {

  return (
    <div>
        <Title
          label="Agathion Ignis"
          image="/items/icons/agathion/agathion-ignis.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={AGATHION_IGNIS_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={AGATHION_IGNIS_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
