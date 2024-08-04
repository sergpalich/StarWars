import { useLocation, useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const location = useLocation();
  const starship = location.state?.starship;

  if (!starship) {
    return <div>Error: No starship data available</div>;
  }

  const imgUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  return (
    <div>
      <div className="starship_details">
        <div className="">
          <img src={imgUrl} alt={starship.name} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-responsive-md">
                <tbody>
                  <tr>
                    <th>Name:</th>
                    <td className="text-uppercase">{starship.name}</td>
                  </tr>
                  <tr>
                    <th>Model:</th>
                    <td>{starship.model}</td>
                  </tr>
                  <tr>
                    <th>Cost in credits:</th>
                    <td>{starship.cost_in_credits}</td>
                  </tr>
                  <tr>
                    <th>Atmospheric speed:</th>
                    <td>{starship.max_atmosphering_speed}</td>
                  </tr>
                  <tr>
                    <th>Manufacturer:</th>
                    <td>{starship.manufacturer}</td>
                  </tr>
                  <tr>
                    <th>Length:</th>
                    <td>{starship.length}</td>
                  </tr>
                  <tr>
                    <th>Crew:</th>
                    <td>{starship.crew}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
