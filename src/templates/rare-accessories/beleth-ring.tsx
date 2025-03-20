import { Table, Title } from "components";
import { BELETH_RING_ENCHANT_V1, BELETH_RING_TRIGGER_V1, BELETH_RING_V1 } from "data";

export const BelethRing = () => {

  return (
    <div>
        <Title
          label="Beleth' Ring"
          image="/items/icons/rare-accessory/beleth-ring.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={BELETH_RING_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={BELETH_RING_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Beleth Power</h3>
              <Table data={BELETH_RING_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
