import { Table, Title } from "components";
import { HELLBOUND_RING_ENCHANT_V1, HELLBOUND_RING_V1 } from "data";

export const HellboundRing = () => {

  return (
    <div>
        <Title
          label="Hellbound Ring"
          image="/items/icons/special-accessory/hellbound-ring.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={HELLBOUND_RING_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={HELLBOUND_RING_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
