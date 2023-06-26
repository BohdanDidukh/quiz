import React, { FC } from "react";

interface TitleProps {
  label: string;
}

const Title: FC<TitleProps> = ({ label }) => {
  return <h2 className="Title">{label}</h2>;
};

export default Title;
