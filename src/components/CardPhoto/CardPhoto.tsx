import styles from './CardPhoto.module.css';

interface CardPhotoProps {
  photoUrl: string;
  photoDescription: string;
}

function CardPhoto(props: CardPhotoProps) {
  return (
    <div className={styles.card__photo}>
      <img src={props.photoUrl} alt="Photo" />
      <p className={styles.card__description}>{props.photoDescription}</p>
    </div>
  );
}

export default CardPhoto;
