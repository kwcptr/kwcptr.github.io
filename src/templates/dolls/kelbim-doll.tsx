import { Table, Title } from "components";
import { KELBIM_DOLL_COMPOUND_V1, KELBIM_DOLL_V1 } from "data";

export const KelbimDoll = () => {

  return (
    <div>
        <Title
          label="Kelbim Doll"
          image="https://assets.playnccdn.com/gamedata/powerbook/lin2/aden/icon/82/image_100682.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={KELBIM_DOLL_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={KELBIM_DOLL_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
