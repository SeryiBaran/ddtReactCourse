import styles from './CardElem.module.css';

interface CardElemProps {
  elem: any;
  elemContent: any;
}

function CardElem(props: CardElemProps) {
  return (
    <div className={styles.cardElem}>
      <p><span>{props.elem}:</span> {props.elemContent}</p>
    </div>
  );
}

export default CardElem;
