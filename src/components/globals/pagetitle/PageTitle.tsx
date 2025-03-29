import { useEffect } from "react";

interface PageTitleProps {
  title?: string;  // Hacer que el título sea opcional
}

export const PageTitle = ({ title }: PageTitleProps) => {
  useEffect(() => {
    document.title = title ? `${title} | kwcptr` : "kwcptr";  // Usa kwcptr si no hay título
  }, [title]);

  return null;  // No renderiza nada
};
