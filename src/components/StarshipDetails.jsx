import { useEffect, useState } from "react";

 
const StarshipDetails = (data) => {

  let {id} =useParams();
  const [starship, setSatrship] = useState();
  useEffect(
    ()=> {
      let newStarship = getStarshipByid(id)
      setSatrship(newStarship)
    }, []
  )

  return (
    <div>
        {data.results.map((result) => (    
        <div key={result.name} className="starship_item">
          <img src={result.url} alt="" />
          <div>
                <div style={{ textTransform: "uppercase" }}>{data.result.name}</div>
                <div> Model: {data.result.model}</div>
                <div> Cost in credits: {data.result.cost_in_credits} </div>
                <div> Atmospheric speed: {data.result.max_atmosphering_speed} </div>
                <div> Manufacturer {data.result.manufacturer} </div>
                <div> Length: {data.result.length} </div>
                <div> Crew {data.result.crew} </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StarshipDetails;
