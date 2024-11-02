import { Table, Title } from "../../components";
import { ANAIS_FISTS_ENCHANT_V1, ANAIS_FISTS_TRIGGER2_V1, ANAIS_FISTS_TRIGGER_V1, ANAIS_FISTS_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const AnaisFists = () => {
  return (
    <div>
      <Title
        label="Anais' Fists"
        image="/items/icons/boss-weapon/anais-fists.png"
        />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchantment </h3>
            <div className="type__col" />
            <Table data={ANAIS_FISTS_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={ANAIS_FISTS_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Anais' Justice </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={ANAIS_FISTS_TRIGGER_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Anais' Enhanced Justice </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={ANAIS_FISTS_TRIGGER2_V1} />
          </div>
        </div>
      </div>
    </div>
  );
};
