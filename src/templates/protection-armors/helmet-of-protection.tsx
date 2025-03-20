import { Table, Title } from "components";
import { HELMET_OF_PROTECTION_V1, HELMET_OF_PROTECTION_TRIGGER_V1, HELMET_OF_PROTECTION_ENCHANT_V1 } from "data";

export const HelmetOfProtection = () => {

  return (
    <div>
        <Title
          label="Helmet of Protection"
          image="/items/icons/armor-of-protection/helmet-of-protection.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={HELMET_OF_PROTECTION_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={HELMET_OF_PROTECTION_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Critical Rate Defense</h3>
              <Table data={HELMET_OF_PROTECTION_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
