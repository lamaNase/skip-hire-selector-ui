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
            <div className={styles.skip_card}>
                <div className={styles.image_container}>
                    <span className={styles.skip_label}>{size} Yards</span>
                    <img src={image} alt={size} className={styles.skip_image} />
                    {!allowed_on_road && (
                        <div className={styles.road_warning}>
                            <span className={styles.warning_icon}>⚠</span>
                            Not Allowed On The Road
                        </div>
                    )}
                </div>
                <div className={styles.skip_info}>
                    <h2 className={styles.skip_title}>{size} Yard Skip</h2>
                    <div>
                        <p className={styles.skip_description}>{description}</p>
                        <button className={styles.select_button} onClick={onSelect}>
                            {isSelected ? (
                                <>
                                    Selected <FaCheck style={{ marginLeft: '6px' }} />
                                </>
                            ) : (
                                <>
                                    Select <FaArrowRight style={{ marginLeft: '6px' }} />
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    );
}