import { Table, Title } from "components";
import { ICE_CRYSTAL_BREASTPLATE_ENCHANT_V1, ICE_CRYSTAL_BREASTPLATE_V1, ICE_CRYSTAL_BREASTPLATE_TRIGGER_V1, ICE_CRYSTAL_BREASTPLATE_TRIGGER2_V1 } from "data";

export const IceCrystalBreastplate = () => {

  return (
    <div>
        <Title
          label="Ice Crystal Breastplate"
          image="/items/icons/special-armor/ice-crystal-breastplate.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={ICE_CRYSTAL_BREASTPLATE_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={ICE_CRYSTAL_BREASTPLATE_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Frozen Blessing</h3>
              <Table data={ICE_CRYSTAL_BREASTPLATE_TRIGGER_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Freezing Paralysis</h3>
              <Table data={ICE_CRYSTAL_BREASTPLATE_TRIGGER2_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
