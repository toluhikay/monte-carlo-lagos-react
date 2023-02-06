import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./screens/landingPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
