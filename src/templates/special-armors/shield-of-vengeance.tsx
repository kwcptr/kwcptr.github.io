import { Table, Title } from "components";
import { SHIELD_OF_VENGEANCE_V1, SHIELD_OF_VENGEANCE_ENCHANT_V1, SHIELD_OF_VENGEANCE_TRIGGER2_V1, SHIELD_OF_VENGEANCE_TRIGGER_V1 } from "data";

export const ShieldOfVengeance = () => {

  return (
    <div>
        <Title
          label="Shield of Vengeance"
          image="/items/icons/special-armor/shield-of-vengeance.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={SHIELD_OF_VENGEANCE_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={SHIELD_OF_VENGEANCE_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Protective Barrier</h3>
              <Table data={SHIELD_OF_VENGEANCE_TRIGGER_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Retribution Defense</h3>
              <Table data={SHIELD_OF_VENGEANCE_TRIGGER2_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
