import { Table, Title } from "components";
import { PET_EARRING_ENCHANT_V1, PET_EARRING_V1 } from "data";

export const PetEarring = () => {

  return (
    <div>
        <Title
          label="Pet Earring"
          image="/items/icons/pet/pet-earring.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Enchantment</h3>
              <Table data={PET_EARRING_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={PET_EARRING_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
