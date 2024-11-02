import { Table, Title } from "components";
import { BAIUM_DOLL_COMPOUND_V1, BAIUM_DOLL_V1 } from "data";

export const BaiumDoll = () => {

  return (
    <div>
        <Title
          label="Baium Doll"
          image="/items/icons/doll/baium-doll.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={BAIUM_DOLL_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={BAIUM_DOLL_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
