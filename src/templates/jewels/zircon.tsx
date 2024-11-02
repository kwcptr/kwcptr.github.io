import { Table, Title } from "components";
import { ZIRCON_COMPOUND_V1, ZIRCON_V1 } from "data";

export const Zircon = () => {

  return (
    <div>
        <Title
          label="Zircon"
          image="/items/icons/jewel/zircon.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={ZIRCON_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={ZIRCON_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
