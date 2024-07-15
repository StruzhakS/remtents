import React from 'react';

const MapButton = () => {
  const handleOpenMaps = () => {
    const destination =
      '76 Князя Володимира Великого, Дніпро, Дніпропетровська область, Україна'; // адреса з iframe
    const travelMode = 'driving'; // або 'walking', 'bicycling', 'transit'

    // Використання URL-схеми Google Maps для побудови маршруту
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      destination
    )}&travelmode=${travelMode}`;

    // Відкриває URL в новій вкладці браузера
    window.open(url, '_blank');
  };

  return <button onClick={handleOpenMaps}>Маршрут</button>;
};

export default MapButton;
