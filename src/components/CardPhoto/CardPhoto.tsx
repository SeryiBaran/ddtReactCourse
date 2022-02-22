import styles from './CardPhoto.module.css';

interface CardPhotoProps {
  photoUrl: string;
  photoDescription: string;
}

function CardPhoto({ photoUrl, photoDescription }: CardPhotoProps) {
  return (
    <div className={styles.card__photo}>
      <img src={photoUrl} alt="Photo" />
      <p className={styles.card__description}>{photoDescription}</p>
    </div>
  );
}

export default CardPhoto;
