import { Table, Title } from "components";
import { PET_RING_ENCHANT_V1, PET_RING_V1 } from "data";

export const PetRing = () => {

  return (
    <div>
        <Title
          label="Pet Ring"
          image="/items/icons/pet/pet-ring.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={PET_RING_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={PET_RING_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
