import { Table, Title } from "components";
import { QUEEN_ANTS_RING_ENCHANT_V1, QUEEN_ANTS_RING_TRIGGER_V1, QUEEN_ANTS_RING_V1 } from "data";

export const QueenAntsRing = () => {

  return (
    <div>
        <Title
          label="Queen Ant's Ring"
          image="/items/icons/rare-accessory/queen-ants-ring.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={QUEEN_ANTS_RING_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={QUEEN_ANTS_RING_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Queen Ant Power</h3>
              <Table data={QUEEN_ANTS_RING_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
