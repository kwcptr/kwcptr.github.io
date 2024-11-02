import { Table, Title } from "components";
import { PIERCING_MASK_ENCHANT_V1, PIERCING_MASK_V1 } from "data";

export const PiercingMask = () => {

  return (
    <div>
        <Title
          label="Piercing Mask"
          image="/items/icons/head-accessory/piercing-mask.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={PIERCING_MASK_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={PIERCING_MASK_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
