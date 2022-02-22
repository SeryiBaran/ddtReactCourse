import styles from './CardElem.module.css';

interface CardElemProps {
  elem: any;
  elemContent: any;
}

function CardElem({elem, elemContent}: CardElemProps) {
  return (
    <div className={styles.cardElem}> {/* Я думаю можно было классы задавать через props из main.tsx/Card.tsx */}
      <p><span>{elem}:</span> {elemContent}</p>
    </div>
  );
}

export default CardElem;
