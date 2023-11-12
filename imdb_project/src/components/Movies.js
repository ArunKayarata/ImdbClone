import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faHeart} from '@fortawesome/free-solid-svg-icons'


function Movies() {
  const [movies, setmovies] = useState([]);
  const [pagenum,setpage]=useState(1);
  const [watchlist,setwatchlist] = useState([]);


  function addtowatchlist(id){
    const newwatchlist =[...watchlist,id];
    setwatchlist(newwatchlist);

  }

  function removewatchlist(id){
   const watched= watchlist.filter((eleid)=>{
      return (eleid!=id);

    })
    setwatchlist(watched);
  };
 
  // if any chnage in the component it renders and do api calls many times in order to avoid this we use useeffect hook which runs only one time
  useEffect(() => {
    (function () {
      axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=f20683c6428539ff595ff1c9b1b11d73&page=${pagenum}`)
        .then((res) =>

          setmovies(res.data.results));
    })();

  }, [pagenum]);
  // console.log(movies)
  return (
    <div>
      <div className="text-2xl mb-8 font-bold text-center">Trending Movies</div>

    <div className="flex flex-wrap">

      {movies.map((movie)=>{
        return <div key={movie.id}
        className="w-[200px] h-[35vh] bg-center bg-cover rounded-xl m-4 md:h[40vh] md:w[200px] hover:scale-110 duration-300 relative flex items-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
        }}
      >
     
        <div  className='absolute top-0.5 right-2 p-2  text-2xl'>
          {
            watchlist.includes(movie.id)==false?(
            <div onClick={()=>addtowatchlist(movie.id)} style={{color: "#dfe3ec",}}><FontAwesomeIcon icon={faHeart}  /></div>)
            :
            (<div className=' text-red-500' onClick={()=>removewatchlist(movie.id)}> <FontAwesomeIcon icon={faHeart}  /></div>)
      }
            </div>
        
        <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-60">
        {movie.title}
        </div>
      </div>
      })}
      
    </div>
 
    <Pagination pagenum={pagenum} setpage={setpage} />
    
    </div>
        );
        
    }


      export default Movies;