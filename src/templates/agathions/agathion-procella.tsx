import { Table, Title } from "components";
import { AGATHION_PROCELLA_ENCHANT_V1, AGATHION_PROCELLA_V1 } from "data";

export const AgathionProcella = () => {

  return (
    <div>
        <Title
          label="Agathion Procella"
          image="/items/icons/agathion/agathion-procella.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={AGATHION_PROCELLA_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={AGATHION_PROCELLA_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
