import { Table, Title } from "components";
import { GLOVES_OF_SILENCE_TRIGGER2_V1, GLOVES_OF_SILENCE_TRIGGER_V1, GLOVES_OF_SILENCE_V1, GLOVES_OF_SILENCE_ENCHANT_V1 } from "data";

export const GlovesOfSilence = () => {

  return (
    <div>
        <Title
          label="Gloves of Silence"
          image="/items/icons/special-armor/gloves-of-silence.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={GLOVES_OF_SILENCE_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={GLOVES_OF_SILENCE_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Force of Silence</h3>
              <Table data={GLOVES_OF_SILENCE_TRIGGER_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Mana Burn</h3>
              <Table data={GLOVES_OF_SILENCE_TRIGGER2_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
