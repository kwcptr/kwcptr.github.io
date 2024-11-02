import { Table, Title } from "components";
import { CORAL_COMPOUND_V1, CORAL_V1 } from "data";

export const Coral = () => {

  return (
    <div>
        <Title
          label="Coral"
          image="/items/icons/jewel/coral.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={CORAL_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={CORAL_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
