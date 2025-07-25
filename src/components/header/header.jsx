import { formatDate } from "../../helpers/formatDate";
import styles from './styles.module.css';

const Header = () => {
    return (
        <header>
            <h1>NEWS REACT</h1>
            <p className={styles.date}>{formatDate(new Date())}</p>
        </header>
    )
}

export default Header