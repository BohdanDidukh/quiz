import React, { FC, ReactNode } from "react";

interface StatisticCardProps {
  children: ReactNode;
}

const StatisticCard: FC<StatisticCardProps> = ({ children }) => {
  return <div className="StatisticCard ">{children}</div>;
};

export default StatisticCard;
