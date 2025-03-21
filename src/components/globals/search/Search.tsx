/* Img */
import { AutoComplete, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { useNavigate } from "react-router-dom";

const options = ["Agathion Ignis", "Agathion Joy", "Agathion Nebula", "Agathion Petram", "Agathion Procella", "Agathion Valakas", "Agathion Dragon Egg", "Dragon Belt", "Blessed Dragon Belt", "Cloak of Protection", "Heavenly Cloak", "Circlet of Hero", "Blessed Circlet of Hero", "Piercing Mask", "Amber", "Beryl", "Coral", "Moonstone", "Onyx", "Opal", "Spinel", "Zircon", "Einhasad's Pendant", "Antharas' Earring", "Baium's Ring", "Beleth' Ring", "Frintezza's Necklace", "Orfen's Earring", "Queen Ant's Ring", "Ring of Core", "Zaken's Earring", "Dragon Valley's Earring", "Hellbound Ring", "Ring of Insolence", "Agathion Bracelet", "Brooch", "Talisman Bracelet", "Antharas Doll", "Baium Doll", "Behemoth Doll", "Core Doll", "Frintezza Doll", "Glakias Doll", "Orfen Doll", "Queen Ant Doll", "Zaken Doll", "Talisman of Aden", "Blessed Talisman of Aden", "Talisman of Eva", "Blessed Talisman of Eva", "Talisman of Speed", "Blessed Talisman of Speed", "Talisman of Authority", "Blessed Talisman of Authority", "Venir's Talisman", "Talisman of Baium", "Talisman of Hellbound", "Anais' Fists", "Anakim's Divine Pistols", "Baium's Thunder Breaker", "Beleth' Soul Eater", "Core's Plasmic Bow", "Galaxia's Ancient Sword", "Gorde's Flame Spear", "Juriel's Dual Swords", "Orfen's Venom Sword", "Phiriel's Rapier", "Queen Ant's Sone Breaker", "Zaken's Blood Sword", "Frost Lord's Ancient Sword", "Frost Lord's Axe", "Frost Lord's Blade Fists", "Frost Lord's Bow", "Frost Lord's Dagger", "Frost Lord's Dual Swords", "Frost Lord's Magic Blunt Weapon", "Frost Lord's Pistols", "Frost Lord's Rapier", "Frost Lord's Spear", "Frost Lord's Staff", "Frost Lord's Sword", "Frost Lord's Two-handed Sword", "Boots of Evasion", "Flaming Stockings", "Flaming Tunic", "Gloves of Silence", "Helmet of Mana", "Ice Crystal Breastplate", "Ice Crystal Gaiters", "Leather Armor of Lightning", "Leather Leggings of Lightning", "Shield of Vengeance", "Sigil of Inevitability", "Stun Gauntlets", "Boots of Protection", "Breastplate of Protection", "Gaiters of Protection", "Gauntlets of Protection", "Helmet of Protection", "Leather Armor of Protection", "Leather Leggings of Protection", "Shield of Protection", "Sigil of Protection", "Stockings of Protection", "Tunic of Protection", "Aden's Soul Crystal - Weapon", "Aden's Soul Crystal - Armor", "Hardin's Soul Crystal", "Growth Rune", "Gran Kain's Pendant", "Ruby", "Diamond", "Pet's Pendant", "Pet Earring", "Pet Ring", "Hunter's Earring", "Aztacan's Earring", "Patterns", "Hidden Power", "Aden Cloak", "Andreas Van Halter Doll", "Aztacan's Oracle Scepter", "Phantom Mask", "Kelbim Doll", "Heavenly Talisman", "Ferion's Necklace", "Wild Wind Helmet", "Berserker's Shield", "Berserker's Sigil"];

export const Search = () => {
  const navigate = useNavigate();
  const onChange = (value: string) => {
    switch (value) {
      case "Agathion Ignis":
        return navigate("./items/accessory/agathion/agathion-ignis");
      case "Agathion Joy":
        return navigate("./items/accessory/agathion/agathion-joy");
      case "Agathion Nebula":
        return navigate("./items/accessory/agathion/agathion-nebula");
      case "Agathion Petram":
        return navigate("./items/accessory/agathion/agathion-petram");
      case "Agathion Procella":
        return navigate("./items/accessory/agathion/agathion-procella");
      case "Agathion Valakas":
        return navigate("./items/accessory/agathion/agathion-valakas");
      case "Agathion Dragon Egg":
        return navigate("./items/accessory/agathion/agathion-dragon-egg");
      case "Dragon Belt":
        return navigate("./items/armor/belt/dragon-belt");
      case "Blessed Dragon Belt":
        return navigate("./items/armor/belt/blessed-dragon-belt");
      case "Cloak of Protection":
        return navigate("./items/armor/cloak/cloak-of-protection");
      case "Heavenly Cloak":
        return navigate("./items/armor/cloak/heavenly-cloak");
      case "Aden Cloak":
        return navigate("./items/armor/cloak/aden-cloak");
      case "Wild Wind Helmet":
        return navigate("./items/armor/wild-wind-helmet");
      case "Berserker's Shield":
        return navigate("./items/armor/berserkers-shield");
      case "Berserker's Sigil":
        return navigate("./items/armor/berserkers-sigil");
      case "Circlet of Hero":
        return navigate("./items/accessory/head-accessory/circlet-of-hero");
      case "Blessed Circlet of Hero":
        return navigate("./items/accessory/head-accessory/blessed-circlet-of-hero");
      case "Piercing Mask":
        return navigate("./items/accessory/head-accessory/piercing-mask");
      case "Phantom Mask":
        return navigate("./items/accessory/head-accessory/phantom-mask");
      case "Amber":
        return navigate("./items/accessory/jewel/amber");
      case "Beryl":
        return navigate("./items/accessory/jewel/beryl");
      case "Coral":
        return navigate("./items/accessory/jewel/coral");
      case "Moonstone":
        return navigate("./items/accessory/jewel/moonstone");
      case "Onyx":
        return navigate("./items/accessory/jewel/onyx");
      case "Opal":
        return navigate("./items/accessory/jewel/opal");
      case "Spinel":
        return navigate("./items/accessory/jewel/spinel");
      case "Zircon":
        return navigate("./items/accessory/jewel/zircon");
      case "Ruby":
        return navigate("./items/accessory/jewel/ruby");
      case "Diamond":
        return navigate("./items/accessory/jewel/diamond");
      case "Einhasad's Pendant":
        return navigate("./items/accessory/pendant/einhasads-pendant");
      case "Gran Kain's Pendant":
        return navigate("./items/accessory/pendant/gran-kains-pendant");
      case "Antharas' Earring":
        return navigate("./items/accessory/rare-accessory/antharas-earring");
      case "Baium's Ring":
        return navigate("./items/accessory/rare-accessory/baiums-ring");
      case "Beleth' Ring":
        return navigate("./items/accessory/rare-accessory/beleth-ring");
      case "Frintezza's Necklace":
        return navigate("./items/accessory/rare-accessory/frintezzas-necklace");
      case "Orfen's Earring":
        return navigate("./items/accessory/rare-accessory/orfens-earring");
      case "Queen Ant's Ring":
        return navigate("./items/accessory/rare-accessory/queen-ants-ring");
      case "Ring of Core":
        return navigate("./items/accessory/rare-accessory/ring-of-core");
      case "Zaken's Earring":
        return navigate("./items/accessory/rare-accessory/zakens-earring");
      case "Aztacan's Earring":
        return navigate("./items/accessory/rare-accessory/aztacans-earring");
      case "Ferion's Necklace":
        return navigate("./items/accessory/rare-accessory/ferions-necklace");
      case "Dragon Valley's Earring":
        return navigate("./items/accessory/special-accessory/dragon-valleys-earring");
      case "Hellbound Ring":
        return navigate("./items/accessory/special-accessory/hellbound-ring");
      case "Ring of Insolence":
        return navigate("./items/accessory/special-accessory/ring-of-insolence");
      case "Hunter's Earring":
        return navigate("./items/accessory/special-accessory/hunters-earring");
      case "Agathion Bracelet":
        return navigate("./items/accessory/bracelet/agathion-bracelet");
      case "Brooch":
        return navigate("./items/accessory/brooch");
      case "Talisman Bracelet":
        return navigate("./items/accessory/bracelet/talisman-bracelet");
      case "Kelbim Doll":
        return navigate("./items/other-item/doll/andreas-van-halter-doll");
      case "Andreas Van Halter Doll":
        return navigate("./items/other-item/doll/andreas-van-halter-doll");
      case "Antharas Doll":
        return navigate("./items/other-item/doll/antharas-doll");
      case "Baium Doll":
        return navigate("./items/other-item/doll/baium-doll");
      case "Behemoth Doll":
        return navigate("./items/other-item/doll/behemoth-doll");
      case "Core Doll":
        return navigate("./items/other-item/doll/core-doll");
      case "Frintezza Doll":
        return navigate("./items/other-item/doll/frintezza-doll");
      case "Glakias Doll":
        return navigate("./items/other-item/doll/glakias-doll");
      case "Orfen Doll":
        return navigate("./items/other-item/doll/orfen-doll");
      case "Queen Ant Doll":
        return navigate("./items/other-item/doll/queen-ant-doll");
      case "Zaken Doll":
        return navigate("./items/other-item/doll/zaken-doll");
      case "Talisman of Aden":
        return navigate("./items/accessory/talisman/talisman-of-aden");
      case "Blessed Talisman of Aden":
        return navigate("./items/accessory/talisman/blessed-talisman-of-aden");
      case "Talisman of Eva":
        return navigate("./items/accessory/talisman/talisman-of-eva");
      case "Blessed Talisman of Eva":
        return navigate("./items/accessory/talisman/blessed-talisman-of-eva");
      case "Talisman of Speed":
        return navigate("./items/accessory/talisman/talisman-of-speed");
      case "Blessed Talisman of Speed":
        return navigate("./items/accessory/talisman/blessed-talisman-of-speed");
      case "Talisman of Authority":
        return navigate("./items/accessory/talisman/talisman-of-authority");
      case "Blessed Talisman of Authority":
        return navigate("./items/accessory/talisman/blessed-talisman-of-authority");
      case "Venir's Talisman":
        return navigate("./items/accessory/talisman/venirs-talisman");
      case "Talisman of Baium":
        return navigate("./items/accessory/talisman/talisman-of-baium");
      case "Talisman of Hellbound":
        return navigate("./items/accessory/talisman/talisman-of-hellbound");
      case "Heavenly Talisman":
        return navigate("./items/accessory/talisman/heavenly-talisman");
      case "Anais' Fists":
        return navigate("./items/weapon/boss-weapon/anais-fists");
      case "Anakim's Divine Pistols":
        return navigate("./items/weapon/boss-weapon/anakims-divine-pistols");
      case "Aztacan's Oracle Scepter":
        return navigate("./items/weapon/boss-weapon/aztacans-oracle-scepter");
      case "Baium's Thunder Breaker":
        return navigate("./items/weapon/boss-weapon/baiums-thunder-breaker");
      case "Beleth' Soul Eater":
        return navigate("./items/weapon/boss-weapon/beleth-soul-eater");
      case "Core's Plasmic Bow":
        return navigate("./items/weapon/boss-weapon/cores-plasmic-bow");
      case "Galaxia's Ancient Sword":
        return navigate("./items/weapon/boss-weapon/galaxias-ancient-sword");
      case "Gorde's Flame Spear":
        return navigate("./items/weapon/boss-weapon/gordes-flame-spear");
      case "Juriel's Dual Swords":
        return navigate("./items/weapon/boss-weapon/juriels-dual-swords");
      case "Orfen's Venom Sword":
        return navigate("./items/weapon/boss-weapon/orfens-venom-sword");
      case "Phiriel's Rapier":
        return navigate("./items/weapon/boss-weapon/phiriels-rapier");
      case "Queen Ant's Sone Breaker":
        return navigate("./items/weapon/boss-weapon/queen-ants-stone-breaker");
      case "Zaken's Blood Sword":
        return navigate("./items/weapon/boss-weapon/zakens-blood-sword");
      case "Frost Lord's Ancient Sword":
        return navigate("./items/weapon/frost-lord-weapon/frost-lords-ancient-sword");
      case "Frost Lord's Axe":
        return navigate("./items/weapon/frost-lord-weapon/frost-lords-axe");
      case "Frost Lord's Blade Fists":
        return navigate("./items/weapon/frost-lord-weapon/frost-lords-blade-fists");
      case "Frost Lord's Bow":
        return navigate("./items/weapon/frost-lord-weapon/frost-lords-bow");
      case "Frost Lord's Dagger":
        return navigate("./items/weapon/frost-lord-weapon/frost-lords-dagger");
      case "Frost Lord's Dual Swords":
        return navigate("./items/weapon/frost-lord-weapon/frost-lords-dual-swords");
      case "Frost Lord's Magic Blunt Weapon":
        return navigate("./items/weapon/frost-lord-weapon/frost-lords-magic-blunt-weapon");
      case "Frost Lord's Pistols":
        return navigate("./items/weapon/frost-lord-weapon/frost-lords-pistols");
      case "Frost Lord's Rapier":
        return navigate("./items/weapon/frost-lord-weapon/frost-lords-rapier");
      case "Frost Lord's Spear":
        return navigate("./items/weapon/frost-lord-weapon/frost-lords-spear");
      case "Frost Lord's Staff":
        return navigate("./items/weapon/frost-lord-weapon/frost-lords-staff");
      case "Frost Lord's Sword":
        return navigate("./items/weapon/frost-lord-weapon/frost-lords-sword");
      case "Frost Lord's Two-handed Sword":
        return navigate("./items/weapon/frost-lord-weapon/frost-lords-two-handed-sword");
      case "Boots of Evasion":
        return navigate("./items/armor/special-armor/boots-of-evasion");
      case "Flaming Stockings":
        return navigate("./items/armor/special-armor/flaming-stockings");
      case "Flaming Tunic":
        return navigate("./items/armor/special-armor/flaming-tunic");
      case "Gloves of Silence":
        return navigate("./items/armor/special-armor/gloves-of-silence");
      case "Helmet of Mana":
        return navigate("./items/armor/special-armor/helmet-of-mana");
      case "Ice Crystal Breastplate":
        return navigate("./items/armor/special-armor/ice-crystal-breastplate");
      case "Ice Crystal Gaiters":
        return navigate("./items/armor/special-armor/ice-crystal-gaiters");
      case "Leather Armor of Lightning":
        return navigate("./items/armor/special-armor/leather-armor-of-lightning");
      case "Leather Leggings of Lightning":
        return navigate("./items/armor/special-armor/leather-leggings-of-lightning");
      case "Shield of Vengeance":
        return navigate("./items/armor/special-armor/shield-of-vengeance");
      case "Sigil of Inevitability":
        return navigate("./items/armor/special-armor/sigil-of-inevitability");
      case "Stun Gauntlets":
        return navigate("./items/armor/special-armor/stun-gauntlets");
      case "Boots of Protection":
        return navigate("./items/armor/armor-of-protection/boots-of-protection");
      case "Breastplate of Protection":
        return navigate("./items/armor/armor-of-protection/breastplate-of-protection");
      case "Gaiters of Protection":
        return navigate("./items/armor/armor-of-protection/gaiters-of-protection");
      case "Gauntlets of Protection":
        return navigate("./items/armor/armor-of-protection/gauntlets-of-protection");
      case "Helmet of Protection":
        return navigate("./items/armor/armor-of-protection/helmet-of-protection");
      case "Leather Armor of Protection":
        return navigate("./items/armor/armor-of-protection/leather-armor-of-protection");
      case "Leather Leggings of Protection":
        return navigate("./items/armor/armor-of-protection/leather-leggings-of-protection");
      case "Shield of Protection":
        return navigate("./items/armor/armor-of-protection/shield-of-protection");
      case "Sigil of Protection":
        return navigate("./items/armor/armor-of-protection/sigil-of-protection");
      case "Stockings of Protection":
        return navigate("./items/armor/armor-of-protection/stockings-of-protection");
      case "Tunic of Protection":
        return navigate("./items/armor/armor-of-protection/tunic-of-protection");
      case "Aden's Soul Crystal - Weapon":
        return navigate("./items/soul-crystal/adens-soul-crystal-weapon");
      case "Aden's Soul Crystal - Armor":
        return navigate("./items/soul-crystal/adens-soul-crystal-armor");
      case "Hardin's Soul Crystal":
        return navigate("./items/soul-crystal/hardins-soul-crystal");
      case "Growth Rune":
        return navigate("./items/other-item/growth-rune");
      case "Pet's Pendant":
        return navigate("./items/pet/pets-pendant");
      case "Pet Earring":
        return navigate("./items/pet/pet-earring");
      case "Pet Ring":
        return navigate("./items/pet/pet-ring");
      case "Patterns":
        return navigate("./items/pattern-hidden-power/pattern");
      case "Hidden Power":
        return navigate("./items/pattern-hidden-power/hidden-power");
      default:
        break;
    }
  };

  return (
    <div className="container__search">
      <InputGroup className="input__container">
        <AutoComplete className="input__search" data={options} onChange={onChange} placeholder={'Search for an item'} />
        <InputGroup.Button className="input__btn" tabIndex={-1}>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
    </div>
  );
};



