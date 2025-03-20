import { Table, Title } from "components";
import { WILD_WIND_HELMET_ENCHANT_V1, WILD_WIND_HELMET_TRIGGER_V1, WILD_WIND_HELMET_V1, WILD_WIND_HELMET_2_V1 } from "data";

export const WildWindHelmet = () => {

  return (
    <div>
        <Title
          label="Wild Wind Helmet"
          image="/items/icons/wild-wind-helmet.png"
        />
        <div className="contain">
          <div className="table__container">

          <div className="container__subTable">
              <h3 className="subTitle">Enchant</h3>
              <Table data={WILD_WIND_HELMET_ENCHANT_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Basic bonus</h3>
              <Table data={WILD_WIND_HELMET_2_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Enchant Effects</h3>
              <Table data={WILD_WIND_HELMET_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Tempest Protection</h3>
              <Table data={WILD_WIND_HELMET_TRIGGER_V1} />
            </div>
          </div>
        </div>

        </div>
  );
};
