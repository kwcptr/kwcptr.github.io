import { Table, Title } from "components";
import { ADENS_SOUL_CRYSTAL_WEAPON_COMPOUND_V1, ADENS_SOUL_CRYSTAL_WEAPON_V1 } from "data";

export const AdensSoulCrystalWeapon = () => {

  return (
    <div className="fx-top">
        <Title
          label="Aden's Soul Crystal - Weapon"
          image="/items/icons/other-item/adens-soul-crystal-weapon.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={ADENS_SOUL_CRYSTAL_WEAPON_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects (only one can be chosen)</h3>
              <Table data={ADENS_SOUL_CRYSTAL_WEAPON_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
