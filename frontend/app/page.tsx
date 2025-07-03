import { Box, } from "@mui/material";
import colors from "@/lib/colors";
import CallToAction from "@/components/ui/CTA";
import DsaMainPage from "@/components/ui/DsaMainPage";
import HeroTextBlock from "@/components/ui/HeroTextBlock";
import LandingHero from "@/components/ui/LandingHero";
import SkillScroller from "@/components/ui/SkillScroller";
import SkillToJobJourney from "@/components/ui/SkillToJobJourney";
import { CardContent, ScrollItems } from "@/lib/constants";
import Toolkit from "@/components/ui/Toolkit";


export default function Home ()
{

  return (
    <Box >
      <LandingHero />
      <SkillScroller colors={ colors } scrollItems={ ScrollItems } />
      <HeroTextBlock cardContent={ CardContent } />
      <Toolkit />
      <SkillToJobJourney />
      <DsaMainPage colors={ colors } />
      <CallToAction />
    </Box>
  );
}




