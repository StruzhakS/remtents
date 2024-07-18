import React from 'react';
import s from './MapButton.module.css';

const MapButton = () => {
  const handleOpenMaps = () => {
    const destination =
      '76 Князя Володимира Великого, Дніпро, Дніпропетровська область, Україна';
    const travelMode = 'driving';

    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      destination
    )}&travelmode=${travelMode}`;

    window.open(url, '_blank');
  };

  return (
    <button onClick={handleOpenMaps} className={s.btn}>
      Маршрут
    </button>
  );
};

export default MapButton;
