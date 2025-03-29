import { useEffect } from "react";

interface TitleProps {
  label: string;
  image: string;
}

export const Title = ({ label, image }: TitleProps) => {
  useEffect(() => {
    document.title = `${label} | kwcptr`;  // Agrega "| kwcptr" al título
  }, [label]);

  return (
    <div className="title__container">
      <img src={image} alt={label} className="item__image" />
      <h2 className="item__label">{label}</h2>
    </div>
  );
};
