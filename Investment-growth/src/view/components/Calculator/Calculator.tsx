import InitialSum from "../InitialSum/InitialSum";
import InterestRate from "../InterestRate/InterestRate";
import StatusMessage from "../StatusMessage/StatusMessage";
import Years from "../Years/Years";
import styles from "./Calculator.module.scss";

interface Calculator {
    years: number;
    setYears: (years: number) => void;
    principal: number;
    setPrincipal: (principal: number) => void;
    interestRate: number;
    setInterestRate: (interestRate: number) => void;
    initialInvestment: number;
    finalAmount: number;
}

const Calculator: React.FC<Calculator> = ({years, setYears, principal, setPrincipal, interestRate, setInterestRate, initialInvestment, finalAmount}) => {
    return (
        <div className={styles.calculator}>
            <Years years={years} setYears={setYears}/>
            <InitialSum principal={principal} setPrincipal={setPrincipal}/>
            <InterestRate interestRate={interestRate} setInterestRate={setInterestRate}/>
            <StatusMessage initialInvestment={initialInvestment} finalAmount={finalAmount}/>
        </div>
    )
}

export default Calculator;