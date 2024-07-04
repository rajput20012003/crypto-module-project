import React from 'react';

const Table = ({data}) => {
  return (
    <div>
       <table>
        <tbody>
        {data.map((coin) => (
          <tr key={coin.id}>
         <td><img src={coin.image} alt={coin.name} width="20" /></td>
         <td>{coin.name}</td>
         <td>{coin.id}</td>
         <td>{coin.symbol}</td>
         <td>{coin.current_price}</td>
         <td>{coin.total_volume}</td>
          </tr>
        ))}
        </tbody>
      </table>
   
    </div>
  );
}

export default Table;