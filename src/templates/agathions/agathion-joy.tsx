import { Table, Title } from "components";
import { AGATHION_JOY_ENCHANT_V1, AGATHION_JOY_V1 } from "data";

export const AgathionJoy = () => {

  return (
    <div>
        <Title
          label="Agathion Joy"
          image="/items/icons/agathion/agathion-joy.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={AGATHION_JOY_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={AGATHION_JOY_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
