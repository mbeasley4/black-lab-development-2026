import CallToAction from "@/components/CallToAction";
import HomepageHero from "@/components/HomepageHero";
import ProofStats from "@/components/ProofStats";
import RevenueFramework from "@/components/RevenueFramework";
import CoreServices from "@/components/CoreServices";
import CaseStudies from "@/components/CaseStudies";

export const revalidate = 60;

export const metadata = {
  title: "B2B Website Design Agency That Generates Pipeline | Black Lab Dev",
  description:
    "B2B website design focused on conversion, pipeline, and revenue. I build sites for long sales cycles, technical buyers, and real business outcomes.",
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
