
const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

export const fetchDataWithThen = () => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(data => data);
}

export const fetchDataWithAsync = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}