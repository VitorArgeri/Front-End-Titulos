import styles from "./section.module.css";
import Card from "../cards"

const Section = ({campeonato, children}) => {
    return (
        <section className={styles.newTrophies}>
            <h2>{campeonato}</h2>
            <div className={styles.trophiesGrid}>
                {children}  
            </div>
        </section>)
}

export default Section