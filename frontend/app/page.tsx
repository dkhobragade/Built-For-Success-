
import HeroTextBlock from "@/components/ui/HeroTextBlock";
import LandingHero from "@/components/ui/LandingHero";
import SkillScroller from "@/components/ui/SkillScroller";
import { Box } from "@mui/material";


export default function Home ()
{

  return (
    <Box >
      <LandingHero />
      <SkillScroller />
      <HeroTextBlock />
    </Box>
  );
}
