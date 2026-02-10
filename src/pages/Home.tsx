import { Hero } from "../components/sections/Hero";
import { FeatureHighlights, DetailedFeatures } from "../components/sections/Features";
import { Workflow } from "../components/sections/Workflow";
import { Pricing } from "../components/sections/Pricing";
import { Waitlist } from "../components/sections/Waitlist";

export const Home = () => {
  return (
    <>
      <Hero />
      <FeatureHighlights />
      <DetailedFeatures />
      <Workflow />
      <Pricing />
      <Waitlist />
    </>
  );
};
