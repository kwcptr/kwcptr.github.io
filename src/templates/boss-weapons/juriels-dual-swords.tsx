import { Table, Title } from "../../components";
import { JURIELS_DUAL_SWORDS_ENCHANT_V1, JURIELS_DUAL_SWORDS_TRIGGER2_V1, JURIELS_DUAL_SWORDS_TRIGGER_V1, JURIELS_DUAL_SWORDS_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const JurielsDualSwords = () => {
  return (
    <div>
      <Title
        label="Juriel's Dual Swords"
        image="/items/icons/boss-weapon/juriels-dual-swords.png"
      />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchantment </h3>
            <div className="type__col" />
            <Table data={JURIELS_DUAL_SWORDS_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={JURIELS_DUAL_SWORDS_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Juriel's Justice </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={JURIELS_DUAL_SWORDS_TRIGGER_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Juriel's Enhanced Justice </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={JURIELS_DUAL_SWORDS_TRIGGER2_V1} />
          </div>
        </div>
      </div>
    </div>
  );
};
