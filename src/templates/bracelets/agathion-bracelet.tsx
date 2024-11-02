import { Table, Title } from "components";
import { AGATHION_BRACELET_COMPOUND_V1, AGATHION_BRACELET_V1 } from "data";

export const AgathionBracelet = () => {

  return (
    <div>
        <Title
          label="Agathion Bracelet"
          image="/items/icons/bracelet/agathion-bracelet.png"
          />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={AGATHION_BRACELET_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={AGATHION_BRACELET_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
