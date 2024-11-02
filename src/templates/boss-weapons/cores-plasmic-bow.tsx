import { Table, Title } from "../../components";
import { CORES_PLASMIC_BOW_ENCHANT_V1, CORES_PLASMIC_BOW_TRIGGER2_V1, CORES_PLASMIC_BOW_TRIGGER_V1, CORES_PLASMIC_BOW_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const CoresPlasmicBow = () => {
  return (
    <div>
      <Title
        label="Core's Plasmic Bow"
        image="/items/icons/boss-weapon/cores-plasmic-bow.png"
      />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchantment </h3>
            <div className="type__col" />
            <Table data={CORES_PLASMIC_BOW_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={CORES_PLASMIC_BOW_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Core's Plasmic Shock </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={CORES_PLASMIC_BOW_TRIGGER_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Core's Enhanced Plasmic Shock </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={CORES_PLASMIC_BOW_TRIGGER2_V1} />
          </div>
        </div>
      </div>
    </div>
  );
};
