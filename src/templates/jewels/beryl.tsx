import { Table, Title } from "components";
import { BERYL_COMPOUND_V1, BERYL_TRIGGER_V1, BERYL_V1 } from "data";

export const Beryl = () => {

  return (
    <div>
        <Title
          label="Beryl"
          image="/items/icons/jewel/beryl.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={BERYL_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={BERYL_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Beryl - Barrier</h3>
              <Table data={BERYL_TRIGGER_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
