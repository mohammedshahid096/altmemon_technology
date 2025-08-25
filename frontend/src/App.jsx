import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import allRoutesMapper from "./routes";

function App() {
  return (
    <div className="app bg-black text-white">
      {/* <ThreeDTextHero /> */}
      <BrowserRouter>
        <Routes>
          {allRoutesMapper?.map((singleRoute, index) => (
            <Route
              key={index}
              path={singleRoute?.path}
              element={singleRoute?.component}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
