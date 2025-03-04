import HeaderSection from "../components/CaseStudies/HeaderSection";
import ProjectSummary from "../components/CaseStudies/ProjectSummary";
import ChallengeSection from "../components/CaseStudies/ChallengeSection";
import SolutionSection from "../components/CaseStudies/SolutionSection";
import KeyDeliverables from "../components/CaseStudies/KeyDeliverables";
import ResultsFeedback from "../components/CaseStudies/ResultsFeedback";
import CaseStudyPageCTA from "../components/CaseStudies/CaseStudyPageCTA";
function CaseStudyPage() {
  return (
    <div>
      <HeaderSection/>
      <ProjectSummary />
      {/* <ChallengeSection />
      <SolutionSection />
      <KeyDeliverables />
      <ResultsFeedback />
      <CaseStudyPageCTA /> */}
    </div>
  );
}

export default CaseStudyPage;
