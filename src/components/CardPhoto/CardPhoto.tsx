import './CardPhoto.css';

interface CardPhotoProps {
  photoUrl: string;
  photoDescription: string;
}

function CardPhoto({ photoUrl, photoDescription }: CardPhotoProps) {
  return (
    <div className="card__photo">
      <img src={photoUrl} alt="Photo" />
      <p className="card__description">{photoDescription}</p>
    </div>
  );
}

export default CardPhoto;
