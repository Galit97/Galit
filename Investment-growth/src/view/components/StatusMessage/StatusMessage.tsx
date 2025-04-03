import React from "react";
import styles from "./StatusMessage.module.scss";

interface StatusMessageProps {
  initialInvestment: number;
  finalAmount: number;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ initialInvestment, finalAmount }) => {
  const earned = finalAmount - initialInvestment;
  const message = earned > 1000 ? "You are rich!" : "You have gained some income";

  return <div className={styles.message}>{message}</div>;
};

export default StatusMessage;