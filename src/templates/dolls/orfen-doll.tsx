import { Table, Title } from "components";
import { ORFEN_COMPOUND_V1, ORFEN_DOLL_V1 } from "data";

export const OrfenDoll = () => {

  return (
    <div>
        <Title
          label="Orfen Doll"
          image="/items/icons/doll/orfen-doll.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={ORFEN_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={ORFEN_DOLL_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
