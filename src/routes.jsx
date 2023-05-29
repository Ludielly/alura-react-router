import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import CommonPage from "@/components/CommonPage";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<CommonPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Route>
        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
