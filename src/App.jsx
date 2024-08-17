import "./App.css";
import Layout from "./components/Layout";
import Starships from "./components/Starship";
import { Routes, Route } from "react-router-dom";
import SinglePage from "./components/Singlepage";
import Welcomepage from "./components/Welcomepage";
import { StarshipsProvider } from "./components/Context/StarshipsContext";
import LoginPage from "../src/pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "../src/components/Context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";




function App() {
  return (
    <>
   <AuthProvider>
    <StarshipsProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Welcomepage />} />
          <Route path="Home" element={<Layout />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/registerPage" element={<RegisterPage />} />
          <Route
              path="/starships"
              element={<PrivateRoute element={<Starships />} />}
            />
            <Route
              path="/starships/:id"
              element={<PrivateRoute element={<SinglePage />} />}
            />
        </Route>
      </Routes>
    </StarshipsProvider>
    </AuthProvider>
    </>
  );
}

export default App;
