import React, { useState, useEffect } from "react";

interface Shop {
  name: string;
  address: string;
}

const MedicalShopsList: React.FC = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => console.error("Error fetching location:", error)
    );
  }, []);

  useEffect(() => {
    if (location) {
      fetch(`/api/medical-shops?lat=${location.latitude}&lng=${location.longitude}`)
        .then((response) => response.json())
        .then((data) => setShops(data.shops))
        .catch((error) => console.error("Error fetching shops:", error));
    }
  }, [location]);

  return (
    <div>
      <h2>Nearby Medical Shops</h2>
      <ul>
        {shops.map((shop, index) => (
          <li key={index}>
            <strong>{shop.name}</strong> - {shop.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalShopsList;
