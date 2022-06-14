import React from 'react'
import axios from 'axios'

const BringCharacters = async(input) => {
        const apikey = '82caad5bcea1a020592592d9c95582eb'
        const hash = '03624753f7c076e63503648045021757'
        const allUrl = `https://gateway.marvel.com:443/v1/public/characters?limit=50&apikey=${apikey}&ts=1654627819&hash=${hash}`
        const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${input}&limit=20&apikey=${apikey}&ts=1654627819&hash=${hash}`
        let response;
        if (input === '') {
        const data = await axios.get(allUrl)
        response = data.data.data.results
        console.log(response)
        } else {
            const datos = await axios.get(url)
            response = datos.data.data.results
        }
        return response
    }



export default BringCharacters