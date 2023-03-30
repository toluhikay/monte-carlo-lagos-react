import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./screens/landingPage";
import Header from "./components/header";
import Form from "./components/form";
import Blog from "./components/blog";
import Footer from "./components/footer";
import SingleBlog from "./components/singleBlog";
import AOS from "aos";
import "aos/dist/aos.css";
import PictureModal from "./components/PictureModal";
import SEO from "./common/seo";
import ScrollToTop from "./ScrollToTop";
import DownloadBrochureModal from "./components/downloadModal";
import NotFound from "./components/NotFound";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <ScrollToTop>
      <SEO title="Monte Carlo Lagos" description="Monte Carlo Lagos" name="Adozillion Homes" type="website" />
      <div className=" w-full scroll-smooth overflow-hidden">
        <PictureModal />
        <DownloadBrochureModal />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<LandingPage />} />
            <Route path="/subscriptionForm" element={<Form />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/post" element={<SingleBlog />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </ScrollToTop>
  );
}

export default App;
