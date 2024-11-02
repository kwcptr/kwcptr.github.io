import { Table, Title } from "components";
import { MOONSTONE_COMPOUND_V1, MOONSTONE_V1 } from "data";

export const Moonstone = () => {

  return (
    <div>
        <Title
          label="Moonstone"
          image="/items/icons/jewel/moonstone.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={MOONSTONE_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={MOONSTONE_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
