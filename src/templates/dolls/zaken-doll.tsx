import { Table, Title } from "components";
import { ZAKEN_COMPOUND_V1, ZAKEN_DOLL_V1 } from "data";

export const ZakenDoll = () => {

  return (
    <div>
        <Title
          label="Zaken Doll"
          image="/items/icons/doll/zaken-doll.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={ZAKEN_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={ZAKEN_DOLL_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
