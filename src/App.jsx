import HomePage from "./pages/HomePage";
import NotFound from "./pages/notFound";
import MainLayout from "./layouts/MainLayout";
import Try from "./components/try";
import LandPage from "./pages/LandPage";
import CaseStudy from "./pages/CaseStudyPage.jsx";
import CareerPage from "./pages/CareerPage.jsx";
import SinglePosting from "./pages/SinglePosting.jsx";
import DirectApply from "./pages/DirectApply.jsx";
import ApplyNowPage from "./pages/ApplyNowPage.jsx";
import About from "./pages/AboutUsPage.jsx";
import Partner from "./pages/PartnerPage.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/land" element={<LandPage />} />
        <Route path="/try" element={<Try />} />
        <Route path="/case" element={<CaseStudy />} />
        <Route path="/jobs" element={<CareerPage />} />
        <Route path="/jobs/:title" element={<SinglePosting />} />
        <Route path="/jobs/:title/apply-to" element={<ApplyNowPage />} />
        <Route path="/apply" element={<DirectApply />} />
        <Route path="/about" element={<About />} />
        <Route path="/partner" element={<Partner/>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
