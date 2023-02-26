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
import PictureModal from "./components/PictureModal";
import SEO from "./common/seo";
import ScrollToTop from "./ScrollToTop";
import DownloadBrochureModal from "./components/downloadModal";
import { HelmetProvider } from "react-helmet-async";
import { renderToString } from "react-dom/server";

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
    <ScrollToTop>
      <HelmetProvider>
        <div className=" w-full scroll-smooth overflow-hidden">
          <PictureModal />
          <DownloadBrochureModal />
          <SEO title="Monte Carlo Lagos!" description="A " name="Adozillion Homes" type="website" />
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
    </ScrollToTop>
  );
}

export default App;
