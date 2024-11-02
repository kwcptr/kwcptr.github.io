import { Table, Title } from "components";
import { HIDDEN_POWER_UPGRADE_V1, FIRST_SLOT_V1, SECOND_SLOT_V1, THIRD_SLOT_V1, FOURTH_SLOT_V1 } from "data";

export const Hiddenpower = () => {

  return (
    <div>
        {/* <Title
          label="Hidden Power"
          image="/items/icons/patterns-and-hidden-power.png"
        /> */}
        <div className="contain">
        <br />
        <br />
          <div className="table__container">
            <div className="container__subTable">
              <h3 className="subTitle">Upgrade</h3>
              <Table data={HIDDEN_POWER_UPGRADE_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">First Slot</h3>
              <Table data={FIRST_SLOT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Second Slot</h3>
              <Table data={SECOND_SLOT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Third Slot</h3>
              <Table data={THIRD_SLOT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Fourth Slot</h3>
              <Table data={FOURTH_SLOT_V1} />
            </div>
          </div>
        </div>

    </div>

);
};
