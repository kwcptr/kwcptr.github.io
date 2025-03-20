import { Table, Title } from "components";
import { RUBY_COMPOUND_V1, RUBY_TRIGGER_2_V1, RUBY_TRIGGER_V1, RUBY_V1 } from "data";

export const RubyOld = () => {

  return (
    <div>
        <Title
          label="Ruby"
          image="/items/icons/jewel/ruby.png"
        />
        <div className="contain">
          <div className="table__container">

            <div className="container__subTable">
              <h3 className="subTitle">Compounding</h3>
              <Table data={RUBY_COMPOUND_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Effects</h3>
              <Table data={RUBY_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Ruby - Special Ability (PvE)</h3>
              <Table data={RUBY_TRIGGER_V1} />
            </div>
            <div className="container__subTable">
              <h3 className="subTitle">Trigger skill: Ruby - Special Ability (PvP)</h3>
              <Table data={RUBY_TRIGGER_2_V1} />
            </div>
          </div>
        </div>

    </div>
  );
};
