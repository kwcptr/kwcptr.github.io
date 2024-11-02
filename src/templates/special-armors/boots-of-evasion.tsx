import { Table, Title } from "components";
import { BOOTS_OF_EVASION_V1, BOOTS_OF_EVASION_ENCHANT_V1, BOOTS_OF_EVASION_TRIGGER_V1 } from "data";

export const BootsOfEvasion = () => {

  return (
    <div>
        <Title
          label="Boots of Evasion"
          image="/items/icons/special-armor/boots-of-evasion.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={BOOTS_OF_EVASION_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={BOOTS_OF_EVASION_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Swift Evasion</h3>
              <Table data={BOOTS_OF_EVASION_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
