import { useState } from "react";
import styles from "./skipCardsList.module.css";
import SkipSizeCard from "./skipSizeCard";
import { FaArrowRight } from "react-icons/fa";

export default function SkipSizeList({ skips }) {
    const [selectedSkipId, setSelectedSkipId] = useState(null);

    const handleSelect = (id) => {
        setSelectedSkipId((prev) => (prev === id ? null : id));
    };

    const selectedSkip = skips.find((skip) => skip.id === selectedSkipId);

    return (
        <>
            <ul className={styles.skip_list}>
                {skips.map((skip) => (
                    <li key={skip.id} className={styles.skip_list_item}>
                        <SkipSizeCard
                            image="images/skipImage.jpg"
                            size={skip.size}
                            description={`${skip.hire_period_days} day hire period`}
                            onSelect={() => handleSelect(skip.id)}
                            isSelected={selectedSkipId === skip.id}
                            allowed_on_road={skip.allowed_on_road}
                        />
                    </li>
                ))}
            </ul>

            {selectedSkip && (
                <div className={styles.summary}>
                    <p className={styles.summary_text}>
                        <strong>{selectedSkip.size} Yard Skip</strong>{" "}
                        <span className={styles.price}>£{selectedSkip.price}</span>{" "}
                        {selectedSkip.hire_period_days} day hire
                    </p>
                    <div className={styles.summary_buttons}>
                        <button className={styles.back_button}>Back</button>
                        <button className={styles.continue_button}>
                            Continue <FaArrowRight style={{ marginLeft: '6px' }} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}