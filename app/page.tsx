import CallToAction from "@/components/CallToAction";
import HomepageHero from "@/components/HomepageHero";
import ProofStats from "@/components/ProofStats";
import RevenueFramework from "@/components/RevenueFramework";
import CoreServices from "@/components/CoreServices";
import CaseStudies from "@/components/CaseStudies";

export const revalidate = 60;

export const metadata = {
  title: "B2B Website Design Agency That Drives Conversions | Black Lab Dev",
  description:
    "I build B2B websites that generate leads and increase conversions. Turn your website into a revenue engine.",
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
