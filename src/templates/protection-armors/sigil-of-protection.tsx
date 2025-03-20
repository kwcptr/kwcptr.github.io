import { Table, Title } from "components";
import { SIGIL_OF_PROTECTION_V1, SIGIL_OF_PROTECTION_TRIGGER_V1, SIGIL_OF_PROTECTION_ENCHANT_V1 } from "data";

export const SigilOfProtection = () => {

  return (
    <div>
        <Title
          label="Sigil of Protection"
          image="/items/icons/armor-of-protection/sigil-of-protection.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={SIGIL_OF_PROTECTION_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={SIGIL_OF_PROTECTION_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Defense Curse</h3>
              <Table data={SIGIL_OF_PROTECTION_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
