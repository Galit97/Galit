import styles from "./Years.module.scss";

interface YearsProps {
    years: number;
    setYears: (years: number) => void;
  }
  
  const Years: React.FC<YearsProps> = ({ years, setYears }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value > 0) {
        setYears(value);
      }
    };
  
    return (
      <div className={styles.years}>
        <label>Years</label>
        <input type="number" value={years} onChange={handleChange} min="1" />
      </div>
    );
  };

  export default Years;