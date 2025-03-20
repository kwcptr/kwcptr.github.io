import { Table, Title } from "components";
import { AGATHION_VALAKAS_ENCHANT_V1, AGATHION_VALAKAS_TRIGGER_V1, AGATHION_VALAKAS_V1 } from "data";

export const AgathionValakas = () => {

  return (
    <div>
        <Title
          label="Agathion Valakas"
          image="/items/icons/agathion/agathion-valakas.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={AGATHION_VALAKAS_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={AGATHION_VALAKAS_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Valakas' Roar</h3>
              <Table data={AGATHION_VALAKAS_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
