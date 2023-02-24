import React from 'react'
import { useGloablContext } from './Context';

const Search = () => {

  const {query, setQuery, isError} = useGloablContext();
  return (
    <>
    <section className="search-section">
      <h2>Search Your Favourite Movie</h2>
      <form action='#' onSubmit={(e) => e.preventDefault()}>
        <div>
          <input type="text" placeholder="search here" value={query}
          onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
      <div className="card-error">
        <p>{isError.show && isError.msg}</p>

      </div>
    </section>

    </>
    
  )
}

export default Search;