import { BlessedTalismanOfEva, BlessedTalismanOfSpeed, TalismanOfAden, TalismanOfEva, TalismanOfSpeed } from "templates";

export const showChildren = (item: string) => {
  switch (item) {
    case "talisman-of-aden":
      return <TalismanOfAden />;
    case "blessed-talisman-of-aden":
      return <TalismanOfAden />;
    case "talisman-of-eva":
      return <TalismanOfEva />;
    case "blessed-talisman-of-eva":
      return <BlessedTalismanOfEva />;
    case "talisman-of-speed":
      return <TalismanOfSpeed />;
    case "blessed-talisman-of-speed":
      return <BlessedTalismanOfSpeed />;
    default:
      return null;
  }
}