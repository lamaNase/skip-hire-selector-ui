import styles from "./error.module.css";

export default function ErrorMessage({ message = "Something went wrong." }) {
    return (
        <div className={styles.error_container}>
            <p className={styles.error_text}>⚠ {message}</p>
        </div>
    );
}