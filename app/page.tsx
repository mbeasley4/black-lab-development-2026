import HomepageHero from "@/components/HomepageHero";
import ProofStats from "@/components/ProofStats";
import RevenueFramework from "@/components/RevenueFramework";
import Differentiation from "@/components/Differentiation";
import CoreServices from "@/components/CoreServices";
import Results from "@/components/Results";
import Process from "@/components/Process";
import PositioningStrike from "@/components/PositioningStrike";
import CallToAction from "@/components/CallToAction";

export const revalidate = 60;

export const metadata = {
  title: "Website Design & Development Built to Convert | Black Lab Dev",
  description:
    "Fast, scalable websites built to convert. Whether you're generating leads, driving sales, or supporting growth — we build websites that actually do their job.",
};

export default function Home() {
  return (
    <div className="w-full mt-0">
      <HomepageHero />
      <ProofStats />
      <RevenueFramework />
      <Differentiation />
      <CoreServices />
      <Results />
      <Process />
      <PositioningStrike />
      <CallToAction />
    </div>
  );
}
