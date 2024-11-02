import { Table, Title } from "components";
import { TALISMAN_BRACELET_COMPOUND_V1, TALISMAN_BRACELET_V1 } from "data";

export const TalismanBracelet = () => {

  return (
    <div>
        <Title
          label="Talisman Bracelet"
          image="/items/icons/bracelet/talisman-bracelet.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={TALISMAN_BRACELET_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={TALISMAN_BRACELET_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
