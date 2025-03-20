import { Table, Title } from "components";
import { STUN_GAUNTLETS_ENCHANT_V1, STUN_GAUNTLETS_TRIGGER_V1, STUN_GAUNTLETS_V1 } from "data";

export const StunGauntlets = () => {

  return (
    <div>
        <Title
          label="Stun Gauntlets"
          image="/items/icons/special-armor/stun-gauntlets.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={STUN_GAUNTLETS_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={STUN_GAUNTLETS_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Swift Fist</h3>
              <Table data={STUN_GAUNTLETS_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
