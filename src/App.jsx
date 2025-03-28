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
import ContactPage from "./pages/ContactPage.jsx";
import DataSecurityPolicyPage from "./pages/DataSecurityPolicyPage.jsx";
import EthicsPolicyPage from "./pages/EthicsPolicyPage.jsx";
import CodeofConductPage from "./pages/CodeofConductPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import InformationSecurityPage from "./pages/InformationSecurityPage.jsx";
import SiteMap from "./pages/SiteMap.jsx";
import FAQ from "./pages/FaqPage.jsx";
import Blogs from "./pages/BlogPage.jsx";
import SingleBlogs from "./pages/SingleBlogs.jsx";
import Services from "./pages/Services.jsx";
import Ecommerce from "./pages/Ecommerce.jsx";
import Design from "./pages/Design.jsx";
import Development from "./pages/Development.jsx";
import BPM from "./pages/BPM.jsx";
import EcommerceConsultation from "./pages/EcommerceConsultation.jsx";
import EcommerceEnablement from "./pages/EcommerceEnablement.jsx";
import EcommerceWebsiteDevelopment from "./pages/EcommerceWebsiteDevelopment.jsx";
import YoutubeContentMarketing from "./pages/YoutubeContentMarketing.jsx";
import LinkedinContentMarketing from "./pages/LinkedinContentMarketing.jsx";
import IdentityBrandingCommunication from "./pages/IdentityBrandingCommunication.jsx";
import CustomWebsiteDevlopment from "./pages/CustomWebsiteDevlopment.jsx";
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
        <Route path="/case-studies" element={<CaseStudy />} />
        <Route path="/jobs" element={<CareerPage />} />
        <Route path="/jobs/:title" element={<SinglePosting />} />
        <Route path="/jobs/:title/apply-to" element={<ApplyNowPage />} />
        <Route path="/apply" element={<DirectApply />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/ethics-policy" element={<EthicsPolicyPage />} />
        <Route
          path="/data-security-policy"
          element={<DataSecurityPolicyPage />}
        />
        <Route path="/code-of-conduct" element={<CodeofConductPage />} />
        <Route
          path="/information-security"
          element={<InformationSecurityPage />}
        />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/sitemap" element={<SiteMap />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<SingleBlogs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/design" element={<Design />} />
        <Route path="/development" element={<Development />} />
        <Route path="/bpm" element={<BPM />} />
        <Route
          path="/ecommerce-consultation"
          element={<EcommerceConsultation />}
        />
        <Route path="/ecommerce-enablement" element={<EcommerceEnablement />} />
        <Route
          path="/ecommerce-website-development"
          element={<EcommerceWebsiteDevelopment />}
        />
        <Route path="/youtube-content-marketing" element={<YoutubeContentMarketing />} />
        <Route path="/custom-website-development" element={<CustomWebsiteDevlopment />} />
        <Route
          path="/identity-branding-communication"
          element={<IdentityBrandingCommunication />}
        />
        <Route path="/linkedin-content-marketing" element={<LinkedinContentMarketing />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
