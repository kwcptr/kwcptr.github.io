import { Table, Title } from "components";
import { GRAN_KAINS_PENDANT_ACTIVE_V1, GRAN_KAINS_PENDANT_ENCHANT_V1, GRAN_KAINS_PENDANT_V1 } from "data";

export const GranKainsPendant = () => {

  return (
    <div>
        <Title
          label="Gran Kain's Pendant"
          image="/items/icons/pendant/gran-kains-pendant.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={GRAN_KAINS_PENDANT_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={GRAN_KAINS_PENDANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Active skill: Inovocation</h3>
              <Table data={GRAN_KAINS_PENDANT_ACTIVE_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
