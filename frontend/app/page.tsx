import DsaMainPage from "@/components/ui/DsaMainPage";
import HeroTextBlock from "@/components/ui/HeroTextBlock";
import LandingHero from "@/components/ui/LandingHero";
import SkillScroller from "@/components/ui/SkillScroller";
import SkillToJobJourney from "@/components/ui/SkillToJobJourney";
import Toolkit from "@/components/ui/Toolkit";
import { Box, } from "@mui/material";


export default function Home ()
{

  return (
    <Box >
      <LandingHero />
      <SkillScroller />
      <HeroTextBlock />
      <Toolkit />
      <SkillToJobJourney />
      <DsaMainPage />
    </Box>
  );
}




