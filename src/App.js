import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./screens/landingPage";
import Header from "./components/header";
import Form from "./components/form";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<LandingPage />} />
          <Route path="/subscriptionForm" element={<Form />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
