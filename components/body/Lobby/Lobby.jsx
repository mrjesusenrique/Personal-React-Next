import styles from '../../../styles/index.module.css';
import Presentacion from './Presentacion';
import Header from '../Header/Header';

const Lobby = () => {
    return (
        <div className={styles.index} id="top">
            <Header />
            <Presentacion />
        </div>
    );
};

export default Lobby;