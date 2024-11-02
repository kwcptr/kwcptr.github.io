import { Table, Title } from "components";
import { PATTERNS_COMPOUNDING_V1, STR_PATTERN_V1, INT_PATTERN_V1, DEX_PATTERN_V1, WIT_PATTERN_V1, CON_PATTERN_V1, MEN_PATTERN_V1 } from "data";

export const Patterns = () => {

  return (
    <div>
        {/* <Title
          label="Patterns"
          image="/items/icons/patterns-and-hidden-power.png"
        /> */}
        <div className="contain">
        <br />
        <br />
          <div className="table__container">
            <div className="container__subTable">
              <h3 className="subTitle">Upgrade</h3>
              <Table data={PATTERNS_COMPOUNDING_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">STR Pattern</h3>
              <Table data={STR_PATTERN_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">INT Pattern</h3>
              <Table data={INT_PATTERN_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">DEX Pattern</h3>
              <Table data={DEX_PATTERN_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">WIT Pattern</h3>
              <Table data={WIT_PATTERN_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">CON Pattern</h3>
              <Table data={CON_PATTERN_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">MEN Pattern</h3>
              <Table data={MEN_PATTERN_V1} />
            </div>
          </div>
        </div>

    </div>

);
};
