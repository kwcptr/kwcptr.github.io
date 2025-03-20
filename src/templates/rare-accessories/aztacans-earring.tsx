import { Table, Title } from "components";
import { AZTAKANS_EARRING_ENCHANT_V1, AZTAKANS_EARRING_V1 } from "data";

export const AztacansEarring = () => {

  return (
    <div>
        <Title
          label="Aztacan's Earring"
          image="/items/icons/rare-accessory/aztakans-earring.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={AZTAKANS_EARRING_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={AZTAKANS_EARRING_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
