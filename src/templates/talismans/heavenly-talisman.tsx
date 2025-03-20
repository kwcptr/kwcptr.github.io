import { Table, Title } from "components";
import { HEAVENLY_TALISMAN_ENCHANT_V1, HEAVENLY_TALISMAN_TRIGGER_V1, HEAVENLY_TALISMAN_V1 } from "data";

export const HeavenlyTalisman = () => {

  return (
    <div>
        <Title
          label="Heavenly Talisman"
          image="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/icon/47/image_100547.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={HEAVENLY_TALISMAN_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={HEAVENLY_TALISMAN_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Limit Count</h3>
              <Table data={HEAVENLY_TALISMAN_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
