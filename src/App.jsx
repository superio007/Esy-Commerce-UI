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
import DataSecurityPolicyPage from "./pages/Policies/DataSecurityPolicyPage.jsx";
import EthicsPolicyPage from "./pages/Policies/EthicsPolicyPage.jsx";
import CodeofConductPage from "./pages/Policies/CodeofConductPage.jsx";
import PrivacyPolicyPage from "./pages/Policies/PrivacyPolicyPage.jsx";
import InformationSecurityPage from "./pages/Policies/InformationSecurityPage.jsx";
import SiteMap from "./pages/SiteMap.jsx";
import FAQ from "./pages/Policies/FaqPage.jsx";
import Blogs from "./pages/BlogPage.jsx";
import SingleBlogs from "./pages/SingleBlogs.jsx";
import Services from "./pages/Services.jsx";
import Ecommerce from "./pages/Ecommerce.jsx";
import Design from "./pages/Design.jsx";
import Development from "./pages/Development.jsx";
import BPM from "./pages/BPM.jsx";
import EcommerceConsultation from "./pages/Services/EcommerceConsultation.jsx";
import EcommerceEnablement from "./pages/Services/EcommerceEnablement.jsx";
import EcommerceWebsiteDevelopment from "./pages/Services/EcommerceWebsiteDevelopment.jsx";
import YoutubeContentMarketing from "./pages/Services/YoutubeContentMarketing.jsx";
import LinkedinContentMarketing from "./pages/Services/LinkedinContentMarketing.jsx";
import IdentityBrandingCommunication from "./pages/Services/IdentityBrandingCommunication.jsx";
import CustomWebsiteDevlopment from "./pages/Services/CustomWebsiteDevlopment.jsx";
import CMS from "./pages/Services/CMS.jsx";
import CRM from "./pages/Services/CRM.jsx";
import CustomDevlopment from "./pages/Services/CustomDevelopment.jsx";
import Transliteration from "./pages/Services/Transliteration.jsx";
import ContentMigration from "./pages/Services/ContentMigration.jsx";
import DataLabelingAnnotation from "./pages/Services/DataLabelingAnnotation.jsx";
import Translation from "./pages/Services/Translation.jsx";
import Transcription from "./pages/Services/Transcription.jsx";
import StaffOffServices from "./pages/Services/StaffOffService.jsx";
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
        <Route path="/career" element={<CareerPage />} />
        <Route path="/career/:title" element={<SinglePosting />} />
        <Route path="/career/:title/apply-to" element={<ApplyNowPage />} />
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
        <Route
          path="/youtube-content-marketing"
          element={<YoutubeContentMarketing />}
        />
        <Route
          path="/custom-website-development"
          element={<CustomWebsiteDevlopment />}
        />
        <Route
          path="/identity-branding-communication"
          element={<IdentityBrandingCommunication />}
        />
        <Route
          path="/linkedin-content-marketing"
          element={<LinkedinContentMarketing />}
        />
        <Route path="/cms" element={<CMS />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/custom-development" element={<CustomDevlopment />} />
        <Route path="/content-migration" element={<ContentMigration />} />
        <Route path="/transcription" element={<Transcription />} />
        <Route path="/translation" element={<Translation />} />
        <Route path="/transliteration" element={<Transliteration />} />
        <Route
          path="/data-labeling-annotation"
          element={<DataLabelingAnnotation />}
        />
        <Route path="/staff-off-services" element={<StaffOffServices />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
