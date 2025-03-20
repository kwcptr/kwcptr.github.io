import { Table, Title } from "components";
import { HELMET_OF_MANA_ENCHANT_V1, HELMET_OF_MANA_TRIGGER_V1, HELMET_OF_MANA_V1 } from "data";

export const HelmetOfMana = () => {

  return (
    <div>
        <Title
          label="Helmet of Mana"
          image="/items/icons/special-armor/helmet-of-mana.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={HELMET_OF_MANA_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={HELMET_OF_MANA_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Benefits of Wisdom</h3>
              <Table data={HELMET_OF_MANA_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
