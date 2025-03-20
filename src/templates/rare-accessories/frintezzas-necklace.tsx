import { Table, Title } from "components";
import { FRINTEZZAS_NECKLACE_ENCHANT_V1, FRINTEZZAS_NECKLACE_TRIGGER_V1, FRINTEZZAS_NECKLACE_V1 } from "data";

export const FrintezzasNecklace = () => {

  return (
    <div>
        <Title
          label="Frintezza's Necklace"
          image="/items/icons/rare-accessory/frintezzas-necklace.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={FRINTEZZAS_NECKLACE_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={FRINTEZZAS_NECKLACE_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Frintezza Power</h3>
              <Table data={FRINTEZZAS_NECKLACE_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
