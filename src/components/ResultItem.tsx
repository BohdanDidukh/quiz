import React, { FC } from "react";

interface ResultItemProps {
  label: string;
  data: string|number;
}

const ResultItem: FC<ResultItemProps> = ({ label, data }) => {
  return (
    <div className="ResultItem">
      <p className="ResultItem__info">{label}</p>
      <span className="ResultItem__data">{data}</span>
    </div>
  );
};

export default ResultItem;
