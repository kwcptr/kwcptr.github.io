import { Table, Title } from "components";
import { SIGIL_OF_INEVITABILITY_V1, SIGIL_OF_INEVITABILITY_ENCHANT_V1, SIGIL_OF_INEVITABILITY_TRIGGER_V1, SIGIL_OF_INEVITABILITY_TRIGGER2_V1 } from "data";

export const SigilOfInevitability = () => {

  return (
    <div>
        <Title
          label="Sigil of Inevitability"
          image="/items/icons/special-armor/sigil-of-inevitability.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={SIGIL_OF_INEVITABILITY_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={SIGIL_OF_INEVITABILITY_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Fatal Power</h3>
              <Table data={SIGIL_OF_INEVITABILITY_TRIGGER_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Fatal Impulse</h3>
              <Table data={SIGIL_OF_INEVITABILITY_TRIGGER2_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
