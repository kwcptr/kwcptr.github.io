import { Table, Title } from "components";
import { BEHEMOTH_DOLL_COMPOUND_V1, BEHEMOTH_DOLL_V1 } from "data";

export const BehemothDoll = () => {

  return (
    <div>
        <Title
          label="Behemoth Doll"
          image="/items/icons/doll/behemoth-doll.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={BEHEMOTH_DOLL_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={BEHEMOTH_DOLL_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
