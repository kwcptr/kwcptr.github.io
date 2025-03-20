import { Table, Title } from "components";
import { PHANTOM_MASK_ENCHANT_V1, PHANTOM_MASK_TRIGGER_V1, PHANTOM_MASK_V1 } from "data";

export const PhantomMask = () => {

  return (
    <div>
        <Title
          label="Phantom Mask"
          image="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/icon/45/image_100545.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={PHANTOM_MASK_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={PHANTOM_MASK_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Special Effect</h3>
              <Table data={PHANTOM_MASK_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
