import styles from './skipSizeCard.module.css';
import Card from "../UI/card/card";
import { FaArrowRight, FaCheck } from 'react-icons/fa';

export default function SkipSizeCard(props) {
    const {
        image,
        size,
        description,
        onSelect,
        allowed_on_road,
        isSelected,
    } = props;

    return (
        <Card>
            <div className={styles.card_wrapper}>
                <div className={styles.card_content}>
                    <div className={styles.image_box}>
                        <img src={image} alt={`${size} Yard Skip`} className={styles.image} />
                        <span className={styles.size_tag}>{size} Yards</span>
                        {!allowed_on_road && (
                            <div className={styles.warning}>
                                ⚠ Not allowed on the road
                            </div>
                        )}
                    </div>
                    <div className={styles.details}>
                        <h3 className={styles.title}>{size} Yard Skip</h3>
                        <p className={styles.description}>{description}</p>
                        <button className={styles.button} onClick={onSelect}>
                            {isSelected ? (
                                <>Selected <FaCheck /></>
                            ) : (
                                <>Select <FaArrowRight /></>
                            )}
                        </button>
                    </div>
                    <div className={styles.price_tag}>£211</div>
                </div>
            </div>
        </Card>
    );
}