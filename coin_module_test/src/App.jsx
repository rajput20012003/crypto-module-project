import { useEffect, useState } from "react";
import { fetchDataWithThen, fetchDataWithAsync } from './services/api';

import './App.css'
import Search from "./components/Search";
import SortData from "./components/SortData";
import Table from "./components/Table";

function App() {
  const [coin, setCoin] = useState([]);
  const [searching, setSeacrhing] = useState("");
  const[sortField, setSortField] = useState('')

  const fetchApi = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );
    // const data = await res.json();
    const data = await fetchDataWithAsync();

    setCoin(data);
    console.log(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleSearch = (e) => {
    setSeacrhing(e.target.value);
  };

  const handleSort = (data) => {
   setSortField(data)
  }

  const value = coin.filter((coin)=>
    coin.name.toLowerCase().includes(searching.toLowerCase())
  )

  const sortedData = value.sort((a, b) => {
    if (sortField === 'market_cap') {
      return b.market_cap - a.market_cap;
    } else if (sortField === 'percentage_change') {
      return b.price_change_percentage_24h - a.price_change_percentage_24h;
    }
    return 0;
  });
  return (
    <>
    <div className="app">
      <Search  searching={searching} handleSearch={handleSearch}  />
      <SortData handleSort={handleSort}/>
      </div>
      <Table data={sortedData}/>
      </>
  );
}

export default App;
