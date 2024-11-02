import { Table, Title } from "components";
import { GLAKIAS_DOLL_COMPOUND_V1, GLAKIAS_DOLL_V1, GLAKIAS_DOLL_TRIGGER_V1 } from "data";

export const GlakiasDoll = () => {

  return (
    <div>
        <Title
          label="Glakias Doll"
          image="/items/icons/doll/glakias-doll.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={GLAKIAS_DOLL_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={GLAKIAS_DOLL_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: MP Recovery</h3>
              <Table data={GLAKIAS_DOLL_TRIGGER_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
