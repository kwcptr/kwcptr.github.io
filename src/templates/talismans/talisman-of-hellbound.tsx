import { Table, Title } from "components";
import { TALISMAN_OF_HELLBOUND_COMPOUND_V1, TALISMAN_OF_HELLBOUND_V1, TALISMAN_OF_HELLBOUND_TRIGGER_V1 } from "data";

export const TalismanOfHellbound = () => {

  return (
    <div>
        <Title
          label="Talisman of Hellbound"
          image="/items/icons/talisman/talisman-of-hellbound.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={TALISMAN_OF_HELLBOUND_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={TALISMAN_OF_HELLBOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Hell Lightning</h3>
              <Table data={TALISMAN_OF_HELLBOUND_TRIGGER_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
