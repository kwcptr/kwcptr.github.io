import { Table, Title } from "components";
import { ADENS_SOUL_CRYSTAL_ARMOR_COMPOUND_V1, ADENS_SOUL_CRYSTAL_ARMOR_2_V1, ADENS_SOUL_CRYSTAL_ARMOR_V1 } from "data";

export const AdensSoulCrystalArmor = () => {

  return (
    <div className="fx-top">
        <Title
          label="Aden's Soul Crystal - Armor"
          image="/items/icons/other-item/adens-soul-crystal-armor.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={ADENS_SOUL_CRYSTAL_ARMOR_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Defense Property - Helmet, Upper Armor, Lower Armor, Gloves, Boots</h3>
              <Table data={ADENS_SOUL_CRYSTAL_ARMOR_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Defense Property - Upper/Lower Armor</h3>
              <Table data={ADENS_SOUL_CRYSTAL_ARMOR_2_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
