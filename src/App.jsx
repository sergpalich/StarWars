import "./App.css";
import Layout from "./components/Layout";
import Starships from "./components/Starship";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import SinglePage from "./components/Singlepage";
import Welcomepage from "./components/Welcomepage";


/* const StarshipDetailsWrapper = () => {
  const location = useLocation();
  const { data } = location.state || { data: { results: [] } };
  return <StarshipDetails data={data} />;
}; */


function App() {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Welcomepage />} />
          <Route path="Home" element={<Layout />} />
          <Route path="/starships" element = {<Starships/>} />
          <Route path="/starships/:id" element= {<SinglePage />} />
            {/* <Route path="details" element={<StarshipDetailsWrapper />} /> */}
        </Route>
        
      </Routes>
    
    </>
  );
}

export default App;
