import React from 'react';

import styles from './CardPhoto.module.css';

interface CardPhotoProps {
  photoUrl: string;
  photoDescription: string;
}

function CardPhoto(props: CardPhotoProps) {
  return (
    <div className={styles['card-photo']}>
      <img src={props.photoUrl} alt="Photo" />
      <p className={styles['card-description']}>{props.photoDescription}</p>
    </div>
  );
}

export default CardPhoto;
