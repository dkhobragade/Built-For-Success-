
import HeroTextBlock from "@/components/ui/HeroTextBlock";
import LandingHero from "@/components/ui/LandingHero";
import SkillScroller from "@/components/ui/SkillScroller";
import { Box } from "@mui/material";
import SkillToJobJourney from "@/components/ui/SkillToJobJourney";
import Footer from "@/components/ui/Footer";


export default function Home ()
{
  return (
    <Box >
      <LandingHero />
      <SkillScroller />
      <HeroTextBlock />
      <SkillToJobJourney />
      <Footer />
    </Box>
  );
}
