import { Table, Title } from "components";
import { RING_OF_CORE_ACTIVE_V1, RING_OF_CORE_ENCHANT_V1, RING_OF_CORE_TRIGGER_V1, RING_OF_CORE_V1 } from "data";

export const RingOfCore = () => {

  return (
    <div>
        <Title
          label="Ring of Core"
          image="/items/icons/rare-accessory/ring-of-core.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={RING_OF_CORE_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={RING_OF_CORE_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Active skill: Core's Blessing</h3>
              <Table data={RING_OF_CORE_ACTIVE_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Core Power</h3>
              <Table data={RING_OF_CORE_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
