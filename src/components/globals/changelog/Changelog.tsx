import React from "react";

const Changelog = () => {
  return (
    <div className="changelog">
      <div className="changelog__header">
        <h2 className="changelog__title">Changelog</h2>
      </div>
      <div className="changelog__content">
        <div className="changelog__bubble">
          <p className="changelog__subtitle">28/03/25</p>
          <p className="changelog__text">
            — New items: <a href="/items/armor/red-flame-gauntlets" className="changelog__link">Red Flame Gauntlets</a>, <a href="/items/armor/deep-sea-boots" className="changelog__link">Deep Sea Boots</a>
          </p>
          <p className="changelog__subtitle">27/03/25</p>
          <p className="changelog__text">
            — Updated item: <a href="/items/armor/cloak/heavenly-cloak" className="changelog__link">Heavenly Cloak</a>
          </p>
          <p className="changelog__subtitle">21/03/25</p>
          <p className="changelog__text">
            — New items: <a href="/items/soul-crystal/adens-transcendent-soul-crystal-weapon" className="changelog__link">Aden's Transcendent Soul Crystal - Weapon</a>, <a href="/items/soul-crystal/adens-transcendent-soul-crystal-armor" className="changelog__link">Aden's Transcendent Soul Crystal - Armor</a>, <a href="/items/soul-crystal/hardins-transcendent-soul-crystal" className="changelog__link">Hardin's Transcendent Soul Crystal</a>
          </p>
          <p className="changelog__subtitle">20/03/25</p>
          <p className="changelog__text">
            — New items: <a href="/items/accessory/jewel/ruby" className="changelog__link">Ruby</a>, <a href="/items/accessory/jewel/sapphire" className="changelog__link">Sapphire</a>, <a href="/items/accessory/jewel/emerald" className="changelog__link">Emerald</a>, <a href="/items/accessory/jewel/aquamarine" className="changelog__link">Aquamarine</a>
          </p>
          <p className="changelog__subtitle">12/03/25</p>
          <p className="changelog__text">
            — New article: <a href="/articles/class-update-orc-shamans" className="changelog__link">Class Update: Orc Shamans</a>
          </p>
          <p className="changelog__subtitle">11/03/25</p>
          <p className="changelog__text">
            — New article: <a href="/articles/class-update-elders" className="changelog__link">Class Update: Elders</a>
          </p>
          <p className="changelog__subtitle">04/01/25</p>
          <p className="changelog__text">
            — New section: <a href="/dolls" className="changelog__link">Dolls</a>
          </p>
          <p className="changelog__subtitle">16/11/24</p>
          <p className="changelog__text">
            — New article: <a href="/articles/class-update-elemental-master" className="changelog__link">Class Update: Elemental Master</a>
          </p>
          <p className="changelog__subtitle">04/11/24</p>
          <p className="changelog__text">
            — New article: <a href="/articles/new-class-varkas" className="changelog__link">New Class: Varkas</a>
          </p>
          <p className="changelog__subtitle">03/11/24</p>
          <p className="changelog__text">
            — New article: <a href="/articles/class-update-cardinal" className="changelog__link">Class Update: Cardinal</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Changelog;
