// import React from "react";

// const SortButtons = ({ onSort }) => (
//   <div>
//     <button onClick={() => onSort("market_cap")}>Sort by Market Cap</button>
//     <button onClick={() => onSort("percentage_change")}>Sort by Percentage Change</button>
//   </div>
// );

// export default SortButtons;




import React from 'react';

const SortData = ({handleSort}) => {
  return (
    <div>
      
      <button onClick={()=> handleSort("market_cap")}>Sort by Mkt Cap</button>
      <button onClick={() => handleSort("percentage_change")}>Sort by Percentage</button>
    </div>
  );
}

export default SortData;
