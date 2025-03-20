import { Table, Title } from "components";
import { TALISMAN_OF_SPEED_ENCHANT_V1, TALISMAN_OF_SPEED_V1, TALISMAN_OF_SPEED_TRIGGER_V1 } from "data";

export const TalismanOfSpeed = () => {

  return (
    <div>
        <Title
          label="Talisman of Speed"
          image="/items/icons/talisman/talisman-of-speed.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={TALISMAN_OF_SPEED_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={TALISMAN_OF_SPEED_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Energy of Speed</h3>
              <Table data={TALISMAN_OF_SPEED_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
