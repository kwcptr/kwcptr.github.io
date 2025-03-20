import { Table, Title } from "components";
import { ZAKENS_EARRING_ENCHANT_V1, ZAKENS_EARRING_V1, ZAKENS_EARRING_TRIGGER_V1, ZAKENS_EARRING_TRIGGER2_V1 } from "data";

export const ZakensEarring = () => {

  return (
    <div>
        <Title
          label="Zaken's Earring"
          image="/items/icons/rare-accessory/zakens-earring.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={ZAKENS_EARRING_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={ZAKENS_EARRING_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Zaken Power</h3>
              <Table data={ZAKENS_EARRING_TRIGGER_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Zaken Power</h3>
              <Table data={ZAKENS_EARRING_TRIGGER2_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
