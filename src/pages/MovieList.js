import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({apiPath}) => {
  const {data} = useFetch(apiPath)
  
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-evenly flex-wrap">
        {data.map((movie)=>(
          <Card key={movie.id} movie={movie}/>

        ))}
        
        

        </div>

      </section>
    </main>
  )
}
