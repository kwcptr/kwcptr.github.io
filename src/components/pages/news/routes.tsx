import { Article1 } from "templates";

export const showChildren = (item: string) => {
  switch (item) {
    case "article1":
      return <Article1 />;
    default:
      return null;
  }
}