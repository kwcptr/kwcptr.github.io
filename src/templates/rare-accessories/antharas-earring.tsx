import { Table, Title } from "components";
import { ANTHARAS_EARRING_ENCHANT_V1, ANTHARAS_EARRING_V1, ANTHARAS_EARRING_TRIGGER_V1, ANTHARAS_EARRING_TRIGGER2_V1, ANTHARAS_EARRING_TRIGGER3_V1 } from "data";

export const AntharasEarring = () => {

  return (
    <div>
        <Title
          label="Antharas' Earring"
          image="/items/icons/rare-accessory/antharas-earring.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={ANTHARAS_EARRING_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={ANTHARAS_EARRING_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Antharas Power</h3>
              <Table data={ANTHARAS_EARRING_TRIGGER_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Antharas Power</h3>
              <Table data={ANTHARAS_EARRING_TRIGGER2_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: MP Recovery</h3>
              <Table data={ANTHARAS_EARRING_TRIGGER3_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
