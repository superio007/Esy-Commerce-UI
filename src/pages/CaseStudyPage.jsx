import HeaderSection from "../components/CaseStudies/HeaderSection";
import ProjectSummary from "../components/CaseStudies/ProjectSummary";
import CaseStudyPageCTA from "../components/CaseStudies/CaseStudyPageCTA";
import ChallengeKey from "../components/CaseStudies/ChallengeKey";
import ResCounter from "../components/CaseStudies/ResCounter";
import Masonary from "../components/CaseStudies/Masonary";
function CaseStudyPage() {
  return (
    <>
      <HeaderSection />
      <ProjectSummary />
      <ChallengeKey />
      <ResCounter />
      <Masonary />
      <CaseStudyPageCTA />
    </>
  );
}

export default CaseStudyPage;
