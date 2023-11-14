import { Link } from "react-router-dom";

export const Card = ({movie}) => {
    const {id,original_title,overview,poster_path,release_date,vote_average,original_language}=movie
    const en="en"
   return (
  
      
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
    <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
    </Link>
    <div className="p-5">
        <Link to={`/movie/${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
        <p className="mb-3 font-normal text-cyan-400 dark:text-cyan-400">{release_date}</p>
        <p className={`mb-3 py-4 font-bold text-2xl ${vote_average<7?"text-red-500":"text-green-500"} ${vote_average<7?"dark:text-red-500":"dark:text-green-500"} `}>{vote_average}</p>
        {original_language===en?<p className="mb-3 text-xl text-red-500 dark:text-green-500">English</p>:<p className="mb-3  text-xl text-red-500 dark:text-red-500">Not English</p>}
        
    </div>
</div>

   )
 }
 