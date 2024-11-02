import { Table, Title } from "components";
import { GROWTH_RUNE_COMPOUND_V1, GROWTH_RUNE_V1 } from "data";

export const GrowthRune = () => {

  return (
    <div className="fx-top">
        <Title
          label="Growth Rune"
          image="/items/icons/other-item/growth-rune.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={GROWTH_RUNE_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={GROWTH_RUNE_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
