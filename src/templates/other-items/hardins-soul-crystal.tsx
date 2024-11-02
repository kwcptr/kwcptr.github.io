import { Table, Title } from "components";
import { HARDINS_SOUL_CRYSTAL_2_V1, HARDINS_SOUL_CRYSTAL_COMPOUND_V1, HARDINS_SOUL_CRYSTAL_TRIGGER_2_V1, HARDINS_SOUL_CRYSTAL_TRIGGER_V1, HARDINS_SOUL_CRYSTAL_V1 } from "data";

export const HardinsSoulCrystal = () => {

  return (
    <div className="fx-top">
        <Title
          label="Hardin's Soul Crystal"
          image="/items/icons/other-item/hardins-soul-crystal.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={HARDINS_SOUL_CRYSTAL_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Physical Abilities</h3>
              <Table data={HARDINS_SOUL_CRYSTAL_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Physical Abilities - Trigger skill: HP Recovery </h3>
              <Table data={HARDINS_SOUL_CRYSTAL_TRIGGER_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Magical Abilities</h3>
              <Table data={HARDINS_SOUL_CRYSTAL_2_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Magical Abilities - Trigger skill: MP Recovery </h3>
              <Table data={HARDINS_SOUL_CRYSTAL_TRIGGER_2_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
