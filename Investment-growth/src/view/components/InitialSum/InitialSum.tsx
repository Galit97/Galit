import styles from './InitialSum.module.scss';
import React from 'react';

interface principal{
    principal: number;
    setPrincipal: (principal: number) => void;
}

const InitialSum: React.FC<principal> = ({principal, setPrincipal}) => {
    return (
        <div className={styles.InitialSum}>
            <label>Initial sum</label>
            <input type="number" value={principal} onChange={(e) => setPrincipal(parseInt(e.target.value))}/>
        </div>
    )
}

export default InitialSum