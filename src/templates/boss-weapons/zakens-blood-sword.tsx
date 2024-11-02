import { Table, Title } from "../../components";
import { ZAKENS_BLOOD_SWORD_ENCHANT_V1, ZAKENS_BLOOD_SWORD_TRIGGER2_V1, ZAKENS_BLOOD_SWORD_TRIGGER_V1, ZAKENS_BLOOD_SWORD_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const ZakensBloodSword = () => {
  return (
    <div>
      <Title
        label="Zaken's Blood Sword"
        image="/items/icons/boss-weapon/zakens-blood-sword.png"
      />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchantment </h3>
            <div className="type__col" />
            <Table data={ZAKENS_BLOOD_SWORD_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={ZAKENS_BLOOD_SWORD_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Zaken's Blood Prison </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={ZAKENS_BLOOD_SWORD_TRIGGER_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Zaken's Enhanced Blood Prison </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={ZAKENS_BLOOD_SWORD_TRIGGER2_V1} />
          </div>
        </div>
      </div>
    </div>
  );
};
