import React, { FC } from "react";

interface PageTitleProps {
  label: string;
}

const PageTitle: FC<PageTitleProps> = ({ label }) => (
  <h1 className="PageTitle">{label}</h1>
);

export default PageTitle;
