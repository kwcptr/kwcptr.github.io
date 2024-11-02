import { Table, Title } from "components";
import { BERSERKERS_SIGIL_ENCHANT_V1, BERSERKERS_SIGIL_TRIGGER_2_V1, BERSERKERS_SIGIL_TRIGGER_V1, BERSERKERS_SIGIL_V1, BERSERKERS_SIGIL_2_V1 } from "data";

export const BerserkersSigil = () => {

  return (
    <div>
        <Title
          label="Berserker's Sigil"
          image="/items/icons/berserkers-sigil.png"
        />
        <div className="contain">
          <div className="table__container">

          <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={BERSERKERS_SIGIL_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Basic bonus</h3>
              <Table data={BERSERKERS_SIGIL_2_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={BERSERKERS_SIGIL_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Hellish Berserker</h3>
              <Table data={BERSERKERS_SIGIL_TRIGGER_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Berserker's Wrath</h3>
              <Table data={BERSERKERS_SIGIL_TRIGGER_2_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
