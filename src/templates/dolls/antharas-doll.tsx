import { Table, Title } from "components";
import { ANTHARAS_DOLL_COMPOUND_V1, ANTHARAS_DOLL_V1 } from "data";

export const AntharasDoll = () => {

  return (
    <div>
        <Title
          label="Antharas Doll"
          image="/items/icons/doll/antharas-doll.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={ANTHARAS_DOLL_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={ANTHARAS_DOLL_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
