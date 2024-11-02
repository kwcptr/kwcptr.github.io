import { Table, Title } from "components";
import { CIRCLET_OF_HERO_ENCHANT_V1, CIRCLET_OF_HERO_TRIGGER_V1, CIRCLET_OF_HERO_V1 } from "data";

export const CircletOfHero = () => {

  return (
    <div>
        <Title
          label="Circlet of Hero"
          image="/items/icons/head-accessory/circlet-of-hero.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={CIRCLET_OF_HERO_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={CIRCLET_OF_HERO_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Fatal Critical Strike</h3>
              <Table data={CIRCLET_OF_HERO_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
