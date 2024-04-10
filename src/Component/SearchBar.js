import React, { useState } from 'react'
import axios from 'axios';
function SearchBar({addImages}) {
    const [search, setSearch] = useState('');

    function handleSubmit() {
        axios.get('https://api.unsplash.com/search/photos',{
            params:{
                client_id: "rGFOFu7R5jgANSxNCc5dZmSQANBlf4U6VcrENtSln_o",
                query: search,
                per_page: 20
            }
        }) 
        .then(response => {
            addImages(response.data.results)
            console.log(response.data)
        })
        .catch(error =>console.log(error))
       
    }
  return (
    <div className='search-bar'>
        <input 
          type='text'
          placeholder='search images'
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default SearchBar

//params(path parameter)=>used to define dynamic part of url
// https://example.com/api/users/:userId  access specific data 
 
//query - key value pairs  , separated by '&' character
// example - https://example.com/api/users?name=sonali&query=car