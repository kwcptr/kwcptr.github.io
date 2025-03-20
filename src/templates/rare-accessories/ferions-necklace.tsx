import { Table, Title } from "components";
import { FERIONS_NECKLACE_ENCHANT_V1, FERIONS_NECKLACE_TRIGGER_V1, FERIONS_NECKLACE_V1 } from "data";

export const FerionsNecklace = () => {

  return (
    <div>
        <Title
          label="Ferion's Necklace"
          image="/items/icons/rare-accessory/ferions-necklace.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={FERIONS_NECKLACE_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={FERIONS_NECKLACE_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Ferion's Power</h3>
              <Table data={FERIONS_NECKLACE_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
