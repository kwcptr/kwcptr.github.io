import { Table, Title } from "components";
import { CORE_DOLL_COMPOUND_V1, CORE_DOLL_V1 } from "data";

export const CoreDoll = () => {

  return (
    <div>
        <Title
          label="Core Doll"
          image="/items/icons/doll/core-doll.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={CORE_DOLL_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={CORE_DOLL_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
