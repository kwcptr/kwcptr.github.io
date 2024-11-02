import { Table, Title } from "components";
import { BROOCH_COMPOUND_V1, BROOCH_V1 } from "data";

export const Brooch = () => {

  return (
    <div>
        <Title
          label="Brooch"
          image="/items/icons/bracelet/brooch.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={BROOCH_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={BROOCH_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
