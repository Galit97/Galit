import styles from './InterestRate.module.scss';

interface interestRate{
    interestRate: number;
    setInterestRate: (interestRate: number) => void;
}

const InterestRate: React.FC<interestRate> = ({interestRate, setInterestRate}) => {
    return (
        <div className={styles.InterestRate}>
            <label>Interest rate</label>
            <input type="number" value={interestRate} onChange={(e) => setInterestRate(parseInt(e.target.value))}/>
        </div>
    )
}

export default InterestRate