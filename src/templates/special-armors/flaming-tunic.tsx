import { Table, Title } from "components";
import { FLAMING_TUNIC_ENCHANT_V1, FLAMING_TUNIC_TRIGGER2_V1, FLAMING_TUNIC_TRIGGER_V1, FLAMING_TUNIC_V1 } from "data";

export const FlamingTunic = () => {

  return (
    <div>
        <Title
          label="Flaming Tunic"
          image="/items/icons/special-armor/flaming-tunic.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={FLAMING_TUNIC_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={FLAMING_TUNIC_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Flame Shield</h3>
              <Table data={FLAMING_TUNIC_TRIGGER_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Flame Bind</h3>
              <Table data={FLAMING_TUNIC_TRIGGER2_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
