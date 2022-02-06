import styles from "./Spinner.module.css";
import { FaCircleNotch } from 'react-icons/fa';

export function Spinner() {
    return (
        <div className={styles.spinner}>
            <FaCircleNotch className={styles.spinning} size={50} />
        </div>
    )
}
