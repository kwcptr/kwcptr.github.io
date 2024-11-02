import { Table, Title } from "components";
import { QUEEN_ANT_DOLL_COMPOUND_V1, QUEEN_ANT_DOLL_V1 } from "data";

export const QueenAntDoll = () => {

  return (
    <div>
        <Title
          label="Queen Ant Doll"
          image="/items/icons/doll/queen-ant-doll.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={QUEEN_ANT_DOLL_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={QUEEN_ANT_DOLL_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
