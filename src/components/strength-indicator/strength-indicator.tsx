import styles from "./strength-indicator.module.scss";

interface StrengthIndicatorProps {
  color: string;
}

const StrengthIndicator = ({ color }: StrengthIndicatorProps) => {
  const indicatorStyle = {
    backgroundColor: color,
  };
  return (
    <div style={indicatorStyle} className={styles["strength-indicator"]}></div>
  );
};

export default StrengthIndicator;
