import { Table, Title } from "components";
import { DIAMOND_COMPOUND_V1, DIAMOND_TRIGGER_V1, DIAMOND_V1 } from "data";

export const Diamond = () => {

  return (
    <div>
        <Title
          label="Diamond"
          image="/items/icons/jewel/diamond.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={DIAMOND_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={DIAMOND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Diamond - Special Ability</h3>
              <Table data={DIAMOND_TRIGGER_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
