import React from 'react'
import { useGloablContext } from './Context';
import { NavLink } from 'react-router-dom';

const Movies = () => {

  const {movie, isLoading} = useGloablContext();
  if (isLoading){
    return(
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    )
  }
  return (
    
    <section className="movie-page">
      <div className="container">

    { movie.map((curMovie)=>{
      const {imdbID, Title, Poster} = curMovie;
        return (
          <NavLink to = {`movie/${imdbID}`} key={imdbID}>
            <div className="card">
              <div className="card-info">
                <h2>{Title}</h2>
                <img src={Poster} alt={imdbID}/>

              </div>
            </div>

          </NavLink>
            
          // <div>
          //   <h2>{curMovie.Title}</h2>
          // </div>
        )

      })
    }
    </div>
    </section>
    
  )
}

export default Movies;