import React, { useState } from 'react';
import TableCoins from "./components/TableCoins";
import { useCoins } from './hooks/useCoins';

function App() {
  const { coins } = useCoins();
  const [search, setSearch] = useState<string>("");

  console.log(coins);

  return (
    <div className="container">
      <h1>CriptoCoins</h1>
      <div className="row">
      <input
          type="text"
          placeholder="Search a Coin"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />
        
     <TableCoins coins={coins} search={search}/>
     </div>
    </div>
  )
}

export default App
