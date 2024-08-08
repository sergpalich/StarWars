import "./App.css";
import Layout from "./components/Layout";
import Starships from "./components/Starship";
import { Routes, Route } from "react-router-dom";
import SinglePage from "./components/Singlepage";
import Welcomepage from "./components/Welcomepage";
import { StarshipsProvider } from "./components/Context/StarshipsContext";


function App() {
  return (
    <>
    <StarshipsProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Welcomepage />} />
          <Route path="Home" element={<Layout />} />
          <Route path="/starships" element = {<Starships/>} />
          <Route path="/starships/:id" element= {<SinglePage />} />
            {/* <Route path="details" element={<StarshipDetailsWrapper />} /> */}
        </Route>
        
      </Routes>
    </StarshipsProvider>
    </>
  );
}

export default App;
