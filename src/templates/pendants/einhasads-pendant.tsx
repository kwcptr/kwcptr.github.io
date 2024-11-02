import { Table, Title } from "components";
import { EINHASADS_PENDANT_ACTIVE_V1, EINHASADS_PENDANT_COMPOUND_V1, EINHASADS_PENDANT_V1, EINHASADS_PENDANT_PET_V1 } from "data";

export const EinhasadsPendant = () => {

  return (
    <div>
        <Title
          label="Einhasad's Pendant"
          image="/items/icons/pendant/einhasads-pendant.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={EINHASADS_PENDANT_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={EINHASADS_PENDANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Active skill: Inovocation</h3>
              <Table data={EINHASADS_PENDANT_ACTIVE_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">When equipped on a pet</h3>
              <Table data={EINHASADS_PENDANT_PET_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
