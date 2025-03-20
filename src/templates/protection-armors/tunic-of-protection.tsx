import { Table, Title } from "components";
import { TUNIC_OF_PROTECTION_ENCHANT_V1, TUNIC_OF_PROTECTION_TRIGGER_V1, TUNIC_OF_PROTECTION_V1 } from "data";

export const TunicOfProtection = () => {

  return (
    <div>
        <Title
          label="Tunic of Protection"
          image="/items/icons/armor-of-protection/tunic-of-protection.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={TUNIC_OF_PROTECTION_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={TUNIC_OF_PROTECTION_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Counter Paralysis</h3>
              <Table data={TUNIC_OF_PROTECTION_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
