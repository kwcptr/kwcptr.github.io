import { Table, Title } from "components";
import { SPINEL_COMPOUND_V1, SPINEL_TRIGGER_V1, SPINEL_V1 } from "data";

export const Spinel = () => {

  return (
    <div>
        <Title
          label="Spinel"
          image="/items/icons/jewel/spinel.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={SPINEL_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={SPINEL_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Spinel - Mana Steal</h3>
              <Table data={SPINEL_TRIGGER_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
