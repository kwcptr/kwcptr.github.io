import { Table, Title } from "components";
import { FRINTEZZA_DOLL_COMPOUND_V1, FRINTEZZA_DOLL_V1 } from "data";

export const FrintezzaDoll = () => {

  return (
    <div>
        <Title
          label="Frintezza Doll"
          image="/items/icons/doll/frintezza-doll.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={FRINTEZZA_DOLL_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={FRINTEZZA_DOLL_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
