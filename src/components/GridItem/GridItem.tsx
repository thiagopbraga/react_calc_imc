import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: Level
};

export const GridItem = ({item} : Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}> 


        </div>
    )
}