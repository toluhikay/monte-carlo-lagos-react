import { useEffect } from "react";
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
import { HelmetProvider } from "react-helmet-async";
import SEO from "./common/seo";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const tagManagerArgs = {
    gtmId: "UA-257052488-1",
  };
  TagManager.initialize(tagManagerArgs);

  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <div className=" w-full scroll-smooth overflow-hidden">
        <SEO title="Monte Carlo Lagos!" description="Monte Carlo Lagos" name="Adozillion Homes" type="website" />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<LandingPage />} />
            <Route path="/subscriptionForm" element={<Form />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/post" element={<SingleBlog />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
