import { Table, Title } from "components";
import { TALISMAN_OF_BAIUM_2_V1, TALISMAN_OF_BAIUM_ENCHANT_V1, TALISMAN_OF_BAIUM_V1 } from "data";

export const TalismanOfBaium = () => {

  return (
    <div>
        <Title
          label="Talisman of Baium"
          image="/items/icons/talisman/talisman-of-baium.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={TALISMAN_OF_BAIUM_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Base Effect</h3>
              <Table data={TALISMAN_OF_BAIUM_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Additional Effect</h3>
              <Table data={TALISMAN_OF_BAIUM_2_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
