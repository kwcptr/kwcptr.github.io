import { Table, Title } from "components";
import { HEAVENLY_CLOAK_ENCHANT_V1, HEAVENLY_CLOAK_TRIGGER_V1, HEAVENLY_CLOAK_V1 } from "data";

export const HeavenlyCloak = () => {

  return (
    <div>
        <Title
          label="Heavenly Cloak"
          image="/items/icons/cloak/heavenly-cloak.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={HEAVENLY_CLOAK_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={HEAVENLY_CLOAK_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Angelic Recovery</h3>
              <Table data={HEAVENLY_CLOAK_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
