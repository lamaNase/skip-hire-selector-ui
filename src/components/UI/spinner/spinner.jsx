import styles from "./spinner.module.css";

export default function Spinner() {
    return (
        <div className={styles.spinner_container}>
            <div className={styles.spinner}></div>
        </div>
    );
}