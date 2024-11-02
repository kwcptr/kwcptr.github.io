import { Table, Title } from "components";
import { ONYX_COMPOUND_V1, ONYX_V1 } from "data";

export const Onyx = () => {

  return (
    <div>
        <Title
          label="Onyx"
          image="/items/icons/jewel/onyx.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={ONYX_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={ONYX_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
