import { Table, Title } from "components";
import { ANDREAS_VAN_HALTER_DOLL_COMPOUND_V1, ANDREAS_VAN_HALTER_DOLL_V1 } from "data";

export const AndreasVanHalterDoll = () => {

  return (
    <div>
        <Title
          label="Andreas Van Halter Doll"
          image="/items/icons/doll/andreas-van-halter-doll.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={ANDREAS_VAN_HALTER_DOLL_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={ANDREAS_VAN_HALTER_DOLL_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
