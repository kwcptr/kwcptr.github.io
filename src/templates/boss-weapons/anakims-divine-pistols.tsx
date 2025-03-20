import { Table, Title } from "../../components";
import { ANAKIMS_DIVINE_PISTOLS_ENCHANT_V1, ANAKIMS_DIVINE_PISTOLS_TRIGGER2_V1, ANAKIMS_DIVINE_PISTOLS_TRIGGER_V1, ANAKIMS_DIVINE_PISTOLS_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const AnakimsDivinePistols = () => {
  return (
    <div>
      <Title
        label="Anakim's Divine Pistols"
        image="/items/icons/boss-weapon/anakims-divine-pistols.png"
      />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant </h3>
            <div className="type__col" />
            <Table data={ANAKIMS_DIVINE_PISTOLS_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={ANAKIMS_DIVINE_PISTOLS_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Anakim's Holy Blast </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={ANAKIMS_DIVINE_PISTOLS_TRIGGER_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Anakim's Enhanced Holy Blast </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={ANAKIMS_DIVINE_PISTOLS_TRIGGER2_V1} />
          </div>
        </div>
      </div>
    </div>
  );
};
