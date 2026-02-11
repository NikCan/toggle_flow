import { Hero } from "../components/sections/Hero";
import { CostCalculator } from "../components/sections/CostCalculator";
import { FeatureHighlights, DetailedFeatures } from "../components/sections/Features";
import { Workflow } from "../components/sections/Workflow";
import { UseCases } from "../components/sections/UseCases";
import { Pricing } from "../components/sections/Pricing";
import { Waitlist } from "../components/sections/Waitlist";

export const Home = () => {
  return (
    <>
      <Hero />
      <CostCalculator />
      <FeatureHighlights />
      <DetailedFeatures />
      <Workflow />
      <UseCases />
      <Pricing />
      <Waitlist />
    </>
  );
};
