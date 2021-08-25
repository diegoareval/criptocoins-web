import { useState, useEffect } from 'react';
import { fetchAllCoins } from '../helpers/fetchAllCoins';
import { CoinsType } from '../types';



export const useCoins = () => {
    const [coins, setCoins] = useState<CoinsType[]>([]);

    useEffect(() => {
        // fetch all Bitcoins
        fetchAllCoins()
            .then( coinsRes => {
                setCoins( coinsRes );
            })
    }, [])


    return {
        coins
    }
}