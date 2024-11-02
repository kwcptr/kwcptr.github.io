import { Table, Title } from "components";
import { ORFENS_EARRING_ENCHANT_V1, ORFENS_EARRING_TRIGGER2_V1, ORFENS_EARRING_TRIGGER_V1, ORFENS_EARRING_V1 } from "data";

export const OrfensEarring = () => {

  return (
    <div>
        <Title
          label="Orfen's Earring"
          image="/items/icons/rare-accessory/orfens-earring.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={ORFENS_EARRING_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={ORFENS_EARRING_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Orfen Power</h3>
              <Table data={ORFENS_EARRING_TRIGGER_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Orfen Power</h3>
              <Table data={ORFENS_EARRING_TRIGGER2_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
