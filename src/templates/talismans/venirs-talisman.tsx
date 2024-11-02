import { Table, Title } from "components";
import { VENIRS_TALISMAN_COMPOUND_V1, VENIRS_TALISMAN_V1 } from "data";

export const VenirsTalisman = () => {

  return (
    <div className="fx-top">
        <Title
          label="Venir's Talisman"
          image="/items/icons/talisman/venirs-talisman.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={VENIRS_TALISMAN_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={VENIRS_TALISMAN_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
