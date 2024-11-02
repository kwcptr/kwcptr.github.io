import { Table, Title } from "components";
import { RING_OF_INSOLENCE_ENCHANT_V1, RING_OF_INSOLENCE_V1 } from "data";

export const RingOfInsolence = () => {

  return (
    <div>
        <Title
          label="Ring Of Insolence"
          image="/items/icons/special-accessory/ring-of-insolence.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={RING_OF_INSOLENCE_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={RING_OF_INSOLENCE_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
