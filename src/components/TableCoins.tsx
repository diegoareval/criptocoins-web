import React from 'react'
import { CoinsType } from '../types'
import CoinRow from './CoinRow'
interface TableCoinsProps{
    coins: CoinsType[],
    search: string
}

const TableCoins = ({coins, search}: TableCoinsProps) => {
    const titles = ["#", "Coin", "Price", "Price Change","24h Volume"];
    const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!coins) return <div>no coins</div>
    return (
        <table className="table table-dark mt-4 table-hover">
        <thead>
          <tr>
            {titles.map((title, i) => (
              <td key={i}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin:CoinsType, index: number) => (
            <CoinRow key={coin.id} coin={coin} index={index + 1} />
          ))}
        </tbody>
      </table>
    )
}

export default TableCoins



