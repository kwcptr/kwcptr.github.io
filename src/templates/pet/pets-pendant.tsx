import { Table, Title } from "components";
import { PETS_PENDANT_COMPOUND_V1, PETS_PENDANT_V1 } from "data";

export const PetsPendant = () => {

  return (
    <div>
        <Title
          label="Pet's Pendant"
          image="/items/icons/pet/pets-pendant.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={PETS_PENDANT_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={PETS_PENDANT_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
