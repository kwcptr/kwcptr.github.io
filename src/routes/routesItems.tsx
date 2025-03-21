/* Rutas */
  import { Route } from "react-router-dom";

/* Templates */
  import {  TalismanOfAden, 
            AnakimsDivinePistols,
            BlessedTalismanOfAden,
            TalismanOfEva,
            BlessedTalismanOfEva,
            TalismanOfAuthority,
            BlessedTalismanOfAuthority,
            TalismanOfSpeed,
            BlessedTalismanOfSpeed,
            VenirsTalisman,
            TalismanOfHellbound,
            TalismanOfBaium,
            BaiumDoll,
            AntharasDoll,
            BehemothDoll,
            CoreDoll,
            FrintezzaDoll,
            GlakiasDoll,
            OrfenDoll,
            QueenAntDoll,
            ZakenDoll,
            AgathionBracelet,
            Brooch,
            TalismanBracelet,
            AgathionIgnis,
            AgathionDragonEgg,
            AgathionValakas,
            AgathionProcella,
            AgathionPetram,
            AgathionNebula,
            AgathionJoy,
            DragonBelt,
            BlessedDragonBelt,
            CloakOfProtection,
            HeavenlyCloak,
            PiercingMask,
            BlessedCircletOfHero,
            CircletOfHero,
            Amber,
            Beryl,
            Coral,
            Moonstone,
            Onyx,
            Opal,
            Spinel,
            Zircon,
            EinhasadsPendant,
            PetsPendant,
            AntharasEarring,
            BaiumsRing,
            BelethRing,
            FrintezzasNecklace,
            OrfensEarring,
            QueenAntsRing,
            RingOfCore,
            ZakensEarring,
            RingOfInsolence,
            HellboundRing,
            DragonValleysEarring,
            ZakensBloodSword,
            AnaisFists,
            BelethSoulEater,
            CoresPlasmicBow,
            GalaxiasAncientSword,
            GordesFlameSpear,
            JurielsDualSwords,
            OrfensVenomSword,
            PhirielsRapier,
            QueenAntsStoneBreaker,
            BaiumsThunderBreaker,
            FrostLordsSword,
            FrostLordsAncientSword,
            FrostLordsAxe,
            FrostLordsBladeFists,
            FrostLordsBow,
            FrostLordsDagger,
            FrostLordsDualSwords,
            FrostLordsMagicBluntWeapon,
            FrostLordsPistols,
            FrostLordsRapier,
            FrostLordsSpear,
            FrostLordsStaff,
            FrostLordsTwoHandedSword,
            BootsOfEvasion,
            FlamingStockings,
            FlamingTunic,
            GlovesOfSilence,
            HelmetOfMana,
            IceCrystalBreastplate,
            IceCrystalGaiters,
            LeatherArmorOfLightning,
            LeatherLeggingsOfLightning,
            ShieldOfVengeance,
            SigilOfInevitability,
            StunGauntlets,
            BootsOfProtection,
            BreastplateOfProtection,
            GaitersOfProtection,
            GauntletsOfProtection,
            HelmetOfProtection,
            LeatherArmorOfProtection,
            LeatherLeggingsOfProtection,
            ShieldOfProtection,
            SigilOfProtection,
            StockingsOfProtection,
            TunicOfProtection,
            GrowthRune,
            AdensSoulCrystalArmor,
            AdensSoulCrystalWeapon,
            HardinsSoulCrystal,
            GranKainsPendant,
            RubyOld,
            Diamond,
            HuntersEarring,
            PetEarring,
            PetRing,
            Hiddenpower,
            Patterns,
            AdenCloak,
            AndreasVanHalterDoll,
            PhantomMask,
            HeavenlyTalisman,
            KelbimDoll,
            BerserkersSigil,
            BerserkersShield,
            WildWindHelmet,
            FerionsNecklace,
            AztacansEarring,
            AztacansOracleScepter,
            Ruby,
            Sapphire,
            Emerald,
            Aquamarine,
            AdensTranscendentSoulCrystalWeapon,
            AdensTranscendentSoulCrystalArmor,
            HardinsTranscendentSoulCrystal,
  } from "templates";

/* Components */
  import {Items} from 'components'

const routes = 
  <>

    {/* Agathions */}
    <Route path="/items/accessory/agathion/agathion-ignis" element={<Items><AgathionIgnis/></Items>}/>
    <Route path="/items/accessory/agathion/agathion-joy" element={<Items><AgathionJoy/></Items>}/>
    <Route path="/items/accessory/agathion/agathion-nebula" element={<Items><AgathionNebula/></Items>}/>
    <Route path="/items/accessory/agathion/agathion-petram" element={<Items><AgathionPetram/></Items>}/>
    <Route path="/items/accessory/agathion/agathion-procella" element={<Items><AgathionProcella/></Items>}/>
    <Route path="/items/accessory/agathion/agathion-dragon-egg" element={<Items><AgathionDragonEgg/></Items>}/>
    <Route path="/items/accessory/agathion/agathion-valakas" element={<Items><AgathionValakas/></Items>}/>
    {/* Belts */}
    <Route path="/items/armor/belt/dragon-belt" element={<Items><DragonBelt/></Items>}/>
    <Route path="/items/armor/belt/blessed-dragon-belt" element={<Items><BlessedDragonBelt/></Items>}/>
    {/* Cloaks */}
    <Route path="/items/armor/cloak/cloak-of-protection" element={<Items><CloakOfProtection/></Items>}/>
    <Route path="/items/armor/cloak/heavenly-cloak" element={<Items><HeavenlyCloak/></Items>}/>
    <Route path="/items/armor/cloak/aden-cloak" element={<Items><AdenCloak/></Items>}/>
    {/* Head Accessories */}
    <Route path="/items/accessory/head-accessory/circlet-of-hero" element={<Items><CircletOfHero/></Items>}/>
    <Route path="/items/accessory/head-accessory/blessed-circlet-of-hero" element={<Items><BlessedCircletOfHero/></Items>}/>
    <Route path="/items/accessory/head-accessory/piercing-mask" element={<Items><PiercingMask/></Items>}/>
    <Route path="/items/accessory/head-accessory/phantom-mask" element={<Items><PhantomMask/></Items>}/>
    {/* Jewels */}
    <Route path="/items/accessory/jewel/amber" element={<Items><Amber/></Items>}/>
    <Route path="/items/accessory/jewel/beryl" element={<Items><Beryl/></Items>}/>
    <Route path="/items/accessory/jewel/coral" element={<Items><Coral/></Items>}/>
    <Route path="/items/accessory/jewel/moonstone" element={<Items><Moonstone/></Items>}/>
    <Route path="/items/accessory/jewel/onyx" element={<Items><Onyx/></Items>}/>
    <Route path="/items/accessory/jewel/opal" element={<Items><Opal/></Items>}/>
    <Route path="/items/accessory/jewel/spinel" element={<Items><Spinel/></Items>}/>
    <Route path="/items/accessory/jewel/zircon" element={<Items><Zircon/></Items>}/>
    <Route path="/items/accessory/jewel/ruby-old" element={<Items><RubyOld/></Items>}/>
    <Route path="/items/accessory/jewel/diamond" element={<Items><Diamond/></Items>}/>
    <Route path="/items/accessory/jewel/ruby" element={<Items><Ruby/></Items>}/>
    <Route path="/items/accessory/jewel/sapphire" element={<Items><Sapphire/></Items>}/>
    <Route path="/items/accessory/jewel/emerald" element={<Items><Emerald/></Items>}/>
    <Route path="/items/accessory/jewel/aquamarine" element={<Items><Aquamarine/></Items>}/>
    {/* Pendants */}
    <Route path="/items/accessory/pendant/einhasads-pendant" element={<Items><EinhasadsPendant/></Items>}/>
    <Route path="/items/accessory/pendant/gran-kains-pendant" element={<Items><GranKainsPendant/></Items>}/>
    {/* Rare Accessories */}
    <Route path="/items/accessory/rare-accessory/antharas-earring" element={<Items><AntharasEarring/></Items>}/>
    <Route path="/items/accessory/rare-accessory/baiums-ring" element={<Items><BaiumsRing/></Items>}/>
    <Route path="/items/accessory/rare-accessory/beleth-ring" element={<Items><BelethRing/></Items>}/>
    <Route path="/items/accessory/rare-accessory/frintezzas-necklace" element={<Items><FrintezzasNecklace/></Items>}/>
    <Route path="/items/accessory/rare-accessory/orfens-earring" element={<Items><OrfensEarring/></Items>}/>
    <Route path="/items/accessory/rare-accessory/queen-ants-ring" element={<Items><QueenAntsRing/></Items>}/>
    <Route path="/items/accessory/rare-accessory/ring-of-core" element={<Items><RingOfCore/></Items>}/>
    <Route path="/items/accessory/rare-accessory/zakens-earring" element={<Items><ZakensEarring/></Items>}/>
    <Route path="/items/accessory/rare-accessory/aztacans-earring" element={<Items><AztacansEarring/></Items>}/>
    <Route path="/items/accessory/rare-accessory/ferions-necklace" element={<Items><FerionsNecklace/></Items>}/>
    {/* Special Accessories */}
    <Route path="/items/accessory/special-accessory/dragon-valleys-earring" element={<Items><DragonValleysEarring/></Items>}/>
    <Route path="/items/accessory/special-accessory/hellbound-ring" element={<Items><HellboundRing/></Items>}/>
    <Route path="/items/accessory/special-accessory/ring-of-insolence" element={<Items><RingOfInsolence/></Items>}/>
    <Route path="/items/accessory/special-accessory/hunters-earring" element={<Items><HuntersEarring/></Items>}/>
    {/* Bracelets */}
    <Route path="/items/accessory/bracelet/agathion-bracelet" element={<Items><AgathionBracelet/></Items>}/>
    <Route path="/items/accessory/bracelet/talisman-bracelet" element={<Items><TalismanBracelet/></Items>}/>
    {/* Brooches */}
    <Route path="/items/accessory/brooch" element={<Items><Brooch/></Items>}/>
    {/* Dolls */}
    <Route path="/items/other-item/doll/antharas-doll" element={<Items><AntharasDoll/></Items>}/>
    <Route path="/items/other-item/doll/baium-doll" element={<Items><BaiumDoll/></Items>}/>
    <Route path="/items/other-item/doll/behemoth-doll" element={<Items><BehemothDoll/></Items>}/>
    <Route path="/items/other-item/doll/core-doll" element={<Items><CoreDoll/></Items>}/>
    <Route path="/items/other-item/doll/frintezza-doll" element={<Items><FrintezzaDoll/></Items>}/>
    <Route path="/items/other-item/doll/glakias-doll" element={<Items><GlakiasDoll/></Items>}/>
    <Route path="/items/other-item/doll/orfen-doll" element={<Items><OrfenDoll/></Items>}/>
    <Route path="/items/other-item/doll/queen-ant-doll" element={<Items><QueenAntDoll/></Items>}/>
    <Route path="/items/other-item/doll/zaken-doll" element={<Items><ZakenDoll/></Items>}/>
    <Route path="/items/other-item/doll/andreas-van-halter-doll" element={<Items><AndreasVanHalterDoll/></Items>}/>
    <Route path="/items/other-item/doll/kelbim-doll" element={<Items><KelbimDoll/></Items>}/>
    {/* Talismans */}
    <Route path="/items/accessory/talisman/talisman-of-aden" element={<Items><TalismanOfAden/></Items>}/>
    <Route path="/items/accessory/talisman/blessed-talisman-of-aden" element={<Items><BlessedTalismanOfAden/></Items>}/>
    <Route path="/items/accessory/talisman/talisman-of-eva" element={<Items><TalismanOfEva/></Items>}/>
    <Route path="/items/accessory/talisman/blessed-talisman-of-eva" element={<Items><BlessedTalismanOfEva/></Items>}/>
    <Route path="/items/accessory/talisman/talisman-of-speed" element={<Items><TalismanOfSpeed/></Items>}/>
    <Route path="/items/accessory/talisman/blessed-talisman-of-speed" element={<Items><BlessedTalismanOfSpeed/></Items>}/>
    <Route path="/items/accessory/talisman/talisman-of-authority" element={<Items><TalismanOfAuthority/></Items>}/>
    <Route path="/items/accessory/talisman/blessed-talisman-of-authority" element={<Items><BlessedTalismanOfAuthority/></Items>}/>
    <Route path="/items/accessory/talisman/venirs-talisman" element={<Items><VenirsTalisman/></Items>}/>
    <Route path="/items/accessory/talisman/talisman-of-baium" element={<Items><TalismanOfBaium/></Items>}/>
    <Route path="/items/accessory/talisman/talisman-of-hellbound" element={<Items><TalismanOfHellbound/></Items>}/>
    <Route path="/items/accessory/talisman/heavenly-talisman" element={<Items><HeavenlyTalisman/></Items>}/>
    {/* Boss Weapons */}
    <Route path="/items/weapon/boss-weapon/anais-fists" element={<Items><AnaisFists/></Items>}/>
    <Route path="/items/weapon/boss-weapon/anakims-divine-pistols" element={<Items><AnakimsDivinePistols/></Items>}/>
    <Route path="/items/weapon/boss-weapon/baiums-thunder-breaker" element={<Items><BaiumsThunderBreaker/></Items>}/>
    <Route path="/items/weapon/boss-weapon/beleth-soul-eater" element={<Items><BelethSoulEater/></Items>}/>
    <Route path="/items/weapon/boss-weapon/cores-plasmic-bow" element={<Items><CoresPlasmicBow/></Items>}/>
    <Route path="/items/weapon/boss-weapon/galaxias-ancient-sword" element={<Items><GalaxiasAncientSword/></Items>}/>
    <Route path="/items/weapon/boss-weapon/gordes-flame-spear" element={<Items><GordesFlameSpear/></Items>}/>
    <Route path="/items/weapon/boss-weapon/juriels-dual-swords" element={<Items><JurielsDualSwords/></Items>}/>
    <Route path="/items/weapon/boss-weapon/orfens-venom-sword" element={<Items><OrfensVenomSword/></Items>}/>
    <Route path="/items/weapon/boss-weapon/phiriels-rapier" element={<Items><PhirielsRapier/></Items>}/>
    <Route path="/items/weapon/boss-weapon/queen-ants-stone-breaker" element={<Items><QueenAntsStoneBreaker/></Items>}/>
    <Route path="/items/weapon/boss-weapon/zakens-blood-sword" element={<Items><ZakensBloodSword/></Items>}/>
    <Route path="/items/weapon/boss-weapon/aztacans-oracle-scepter" element={<Items><AztacansOracleScepter/></Items>}/>
    {/* Frost Lord Weapons */}
    <Route path="/items/weapon/frost-lord-weapon/frost-lords-ancient-sword" element={<Items><FrostLordsAncientSword/></Items>}/>
    <Route path="/items/weapon/frost-lord-weapon/frost-lords-axe" element={<Items><FrostLordsAxe/></Items>}/>
    <Route path="/items/weapon/frost-lord-weapon/frost-lords-blade-fists" element={<Items><FrostLordsBladeFists/></Items>}/>
    <Route path="/items/weapon/frost-lord-weapon/frost-lords-bow" element={<Items><FrostLordsBow/></Items>}/>
    <Route path="/items/weapon/frost-lord-weapon/frost-lords-dagger" element={<Items><FrostLordsDagger/></Items>}/>
    <Route path="/items/weapon/frost-lord-weapon/frost-lords-dual-swords" element={<Items><FrostLordsDualSwords/></Items>}/>
    <Route path="/items/weapon/frost-lord-weapon/frost-lords-magic-blunt-weapon" element={<Items><FrostLordsMagicBluntWeapon/></Items>}/>
    <Route path="/items/weapon/frost-lord-weapon/frost-lords-pistols" element={<Items><FrostLordsPistols/></Items>}/>
    <Route path="/items/weapon/frost-lord-weapon/frost-lords-rapier" element={<Items><FrostLordsRapier/></Items>}/>
    <Route path="/items/weapon/frost-lord-weapon/frost-lords-spear" element={<Items><FrostLordsSpear/></Items>}/>
    <Route path="/items/weapon/frost-lord-weapon/frost-lords-staff" element={<Items><FrostLordsStaff/></Items>}/>
    <Route path="/items/weapon/frost-lord-weapon/frost-lords-sword" element={<Items><FrostLordsSword/></Items>}/>
    <Route path="/items/weapon/frost-lord-weapon/frost-lords-two-handed-sword" element={<Items><FrostLordsTwoHandedSword/></Items>}/>
    {/* Special Armors */}
    <Route path="/items/armor/special-armor/boots-of-evasion" element={<Items><BootsOfEvasion/></Items>}/>
    <Route path="/items/armor/special-armor/flaming-stockings" element={<Items><FlamingStockings/></Items>}/>
    <Route path="/items/armor/special-armor/flaming-tunic" element={<Items><FlamingTunic/></Items>}/>
    <Route path="/items/armor/special-armor/gloves-of-silence" element={<Items><GlovesOfSilence/></Items>}/>
    <Route path="/items/armor/special-armor/helmet-of-mana" element={<Items><HelmetOfMana/></Items>}/>
    <Route path="/items/armor/special-armor/ice-crystal-breastplate" element={<Items><IceCrystalBreastplate/></Items>}/>
    <Route path="/items/armor/special-armor/ice-crystal-gaiters" element={<Items><IceCrystalGaiters/></Items>}/>
    <Route path="/items/armor/special-armor/leather-armor-of-lightning" element={<Items><LeatherArmorOfLightning/></Items>}/>
    <Route path="/items/armor/special-armor/leather-leggings-of-lightning" element={<Items><LeatherLeggingsOfLightning/></Items>}/>
    <Route path="/items/armor/special-armor/shield-of-vengeance" element={<Items><ShieldOfVengeance/></Items>}/>
    <Route path="/items/armor/special-armor/sigil-of-inevitability" element={<Items><SigilOfInevitability/></Items>}/>
    <Route path="/items/armor/special-armor/stun-gauntlets" element={<Items><StunGauntlets/></Items>}/>
    {/* Protection Armors */}
    <Route path="/items/armor/armor-of-protection/boots-of-protection" element={<Items><BootsOfProtection/></Items>}/>
    <Route path="/items/armor/armor-of-protection/breastplate-of-protection" element={<Items><BreastplateOfProtection/></Items>}/>
    <Route path="/items/armor/armor-of-protection/gaiters-of-protection" element={<Items><GaitersOfProtection/></Items>}/>
    <Route path="/items/armor/armor-of-protection/gauntlets-of-protection" element={<Items><GauntletsOfProtection/></Items>}/>
    <Route path="/items/armor/armor-of-protection/helmet-of-protection" element={<Items><HelmetOfProtection/></Items>}/>
    <Route path="/items/armor/armor-of-protection/leather-armor-of-protection" element={<Items><LeatherArmorOfProtection/></Items>}/>
    <Route path="/items/armor/armor-of-protection/leather-leggings-of-protection" element={<Items><LeatherLeggingsOfProtection/></Items>}/>
    <Route path="/items/armor/armor-of-protection/shield-of-protection" element={<Items><ShieldOfProtection/></Items>}/>
    <Route path="/items/armor/armor-of-protection/sigil-of-protection" element={<Items><SigilOfProtection/></Items>}/>
    <Route path="/items/armor/armor-of-protection/stockings-of-protection" element={<Items><StockingsOfProtection/></Items>}/>
    <Route path="/items/armor/armor-of-protection/tunic-of-protection" element={<Items><TunicOfProtection/></Items>}/>
    {/* Other Armors */}
    <Route path="/items/armor/berserkers-sigil" element={<Items><BerserkersSigil/></Items>}/>
    <Route path="/items/armor/berserkers-shield" element={<Items><BerserkersShield/></Items>}/>
    <Route path="/items/armor/wild-wind-helmet" element={<Items><WildWindHelmet/></Items>}/>
    {/* Other Items */}
    <Route path="/items/other-item/growth-rune" element={<Items><GrowthRune/></Items>}/>
    <Route path="/items/soul-crystal/adens-soul-crystal-armor" element={<Items><AdensSoulCrystalArmor/></Items>}/>
    <Route path="/items/soul-crystal/adens-soul-crystal-weapon" element={<Items><AdensSoulCrystalWeapon/></Items>}/>
    <Route path="/items/soul-crystal/hardins-soul-crystal" element={<Items><HardinsSoulCrystal/></Items>}/>
    <Route path="/items/soul-crystal/adens-transcendent-soul-crystal-weapon" element={<Items><AdensTranscendentSoulCrystalWeapon/></Items>}/>
    <Route path="/items/soul-crystal/adens-transcendent-soul-crystal-armor" element={<Items><AdensTranscendentSoulCrystalArmor/></Items>}/>
    <Route path="/items/soul-crystal/hardins-transcendent-soul-crystal" element={<Items><HardinsTranscendentSoulCrystal/></Items>}/>
    {/* Pet */}
    <Route path="/items/pet/pets-pendant" element={<Items><PetsPendant/></Items>}/>
    <Route path="/items/pet/pet-earring" element={<Items><PetEarring/></Items>}/>
    <Route path="/items/pet/pet-ring" element={<Items><PetRing/></Items>}/>
    {/* Patterns and hidden power */}
    <Route path="/items/pattern-hidden-power/pattern" element={<Items><Patterns/></Items>}/>
    <Route path="/items/pattern-hidden-power/hidden-power" element={<Items><Hiddenpower/></Items>}/>

  </>

export default routes