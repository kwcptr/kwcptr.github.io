import { Table, Title } from "../../components";
import { QUEEN_ANTS_STONE_BREAKER_ENCHANT_V1, QUEEN_ANTS_STONE_BREAKER_TRIGGER2_V1, QUEEN_ANTS_STONE_BREAKER_TRIGGER_V1, QUEEN_ANTS_STONE_BREAKER_V1 } from "../../data";

const fixHeader = {
  height: '3em',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
}

export const QueenAntsStoneBreaker = () => {
  return (
    <div>
      <Title
        label="Queen Ant's Stone Breaker"
        image="/items/icons/boss-weapon/queen-ants-stone-breaker.png"
      />
      <div className="contain">
        <div className="table__container">

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant </h3>
            <div className="type__col" />
            <Table data={QUEEN_ANTS_STONE_BREAKER_ENCHANT_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle" style={fixHeader}> Enchant Effects </h3>
            <div className="type__col" />
            <Table data={QUEEN_ANTS_STONE_BREAKER_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Queen Ant's Rain of Stones </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={QUEEN_ANTS_STONE_BREAKER_TRIGGER_V1} />
          </div>

          <div className="container__subTable">
            <h3 className="subTitle"> Trigger skill: Queen Ant's Enhanced Rain of Stones </h3>
            <div className="type__col">
              <p className="col__stats border_bottom">P. Atk.</p>
              <p className="col__stats border_bottom">P. skills</p>
              <p className="col__stats border_bottom">M. skills</p>
            </div>
            <Table data={QUEEN_ANTS_STONE_BREAKER_TRIGGER2_V1} />
          </div>
        </div>
      </div>
    </div>
  );
};
