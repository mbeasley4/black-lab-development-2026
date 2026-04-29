import CallToAction from "@/components/CallToAction";
import HomepageHero from "@/components/HomepageHero";
import ProofStats from "@/components/ProofStats";
import RevenueFramework from "@/components/RevenueFramework";
import CoreServices from "@/components/CoreServices";
import CaseStudies from "@/components/CaseStudies";

export const revalidate = 60;

export const metadata = {
  title: "B2B Website Design Agency | Black Lab Development",
  description:
    "We build B2B websites that generate pipeline — not just traffic. Conversion architecture, manufacturing websites, and revenue-focused builds for complex buying cycles.",
};

export default function Home() {
  return (
    <div className="w-full mt-0">
      <HomepageHero />
      <ProofStats />
      <RevenueFramework />
      <CoreServices />
      <CaseStudies />
      <CallToAction />
    </div>
  );
}
