export const fetchMedicalShops = async (latitude: number, longitude: number) => {
  const response = await fetch(`/api/medical-shops?lat=${latitude}&lng=${longitude}`);
  return response.json();
};
