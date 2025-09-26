import "./App.css";
import NavBar from "./component/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import Stations from "./pages/Stations";
import TrainRoutes from "./pages/TrainRoutes";
import Fares from "./pages/Fares";
import Alerts from "./pages/Alerts";
import About from "./pages/About";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <NavBar />

      {/* Main content area */}
      <main className="flex-1 p-6 bg-gray-900">
        <Routes>
          <Route
            path="/"
            element={ <Home/> }
          />
          <Route
            path="/planner"
            element={ <Planner/>}
          />
          <Route
            path="/routes"
            element={<TrainRoutes/>}
          />
          <Route
            path="/stations"
            element={<Stations/>}
          />

          <Route
            path="/fares"
            element={<Fares/>}
          />
          <Route
            path="/alerts"
            element={<Alerts/>}
          />
          <Route
            path="/about"
            element={<About/>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
