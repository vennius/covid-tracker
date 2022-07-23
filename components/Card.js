import styles from "../styles/components/Card.module.css";

export default function Card({title, color, value}){
  return (
  
    <div className={styles.card} style={{
      borderLeftColor: color
    }}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{value}</div>
    </div>
  
  );
}