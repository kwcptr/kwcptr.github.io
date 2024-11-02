import { Table, Title } from "components";
import { OPAL_COMPOUND_V1, OPAL_TRIGGER_V1, OPAL_V1 } from "data";

export const Opal = () => {

  return (
    <div>
        <Title
          label="Opal"
          image="/items/icons/jewel/opal.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={OPAL_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={OPAL_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Active skill: Special Ability: Opal</h3>
              <Table data={OPAL_TRIGGER_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
