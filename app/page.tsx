import CallToAction from "@/components/CallToAction";
import CaseStudies from "@/components/CaseStudies";
import HomepageHero from "@/components/HomepageHero";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import ServicesSnapshot from "@/components/ServicesSnapshot";
import TechnologiesExperience from "@/components/TechnologiesExperiences";

export default function Home() {
  return (
    <div className="w-full mt-0">
      <HomepageHero />
      <ServicesSnapshot />
      <IndustriesWeServe />
      <CaseStudies />
      <TechnologiesExperience />
      <CallToAction />
    </div>
  );
} 
