import { MdCheckBox } from "react-icons/md";
import styles from "./mainHeader.module.css";

export default function MainHeader(props) {
    return (
        <header className={styles.page_header}>
            <div className={styles.header_top}>
                <span className={styles.logo}>
                    < MdCheckBox />
                    Skip Mate
                </span>
                <span className={styles.step_indicator}>
                    Step {props.currentStep} of {props.totalSteps}: {props.stepTitle}
                </span>
            </div>
        </header>
    );
}