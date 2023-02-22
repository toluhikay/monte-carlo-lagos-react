import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./screens/landingPage";
import Header from "./components/header";
import Form from "./components/form";
import TagManager from "react-gtm-module";
import Blog from "./components/blog";
import Footer from "./components/footer";
import SingleBlog from "./components/singleBlog";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const tagManagerArgs = {
    gtmId: "UA-257052488-1",
  };
  TagManager.initialize(tagManagerArgs);
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<LandingPage />} />
          <Route path="/subscriptionForm" element={<Form />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/post" element={<SingleBlog />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
