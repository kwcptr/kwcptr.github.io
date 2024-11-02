import { Table, Title } from "components";
import { AMBER_COMPOUND_V1, AMBER_TRIGGER_V1, AMBER_V1 } from "data";

export const Amber = () => {

  return (
    <div>
        <Title
          label="Amber"
          image="/items/icons/jewel/amber.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={AMBER_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Active skill: Amber</h3>
              <Table data={AMBER_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Amber - Special Seal</h3>
              <Table data={AMBER_TRIGGER_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
