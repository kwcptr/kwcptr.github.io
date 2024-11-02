import { Table, Title } from "components";
import { BAIUMS_RING_ENCHANT_V1, BAIUMS_RING_TRIGGER_V1, BAIUMS_RING_V1 } from "data";

export const BaiumsRing = () => {

  return (
    <div>
        <Title
          label="Baium's Ring"
          image="/items/icons/rare-accessory/baiums-ring.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={BAIUMS_RING_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={BAIUMS_RING_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Baium Power</h3>
              <Table data={BAIUMS_RING_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
