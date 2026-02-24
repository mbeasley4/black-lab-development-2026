import CallToAction from "@/components/CallToAction";
import CaseStudies from "@/components/CaseStudies";
import HomepageHero from "@/components/HomepageHero";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import ServicesSnapshot from "@/components/ServicesSnapshot";
import TechnologiesExperience from "@/components/TechnologiesExperiences";
import ArticlesBlock from '@/components/ArticlesBlock';

export const metadata = {
  title: "Black Lab Development | Senior Web & Software Engineering",
  description:
    "Senior-led web development, software engineering, and platform optimization for production-grade digital systems. 15+ years building reliable digital infrastructure.",
};

export default function Home() {
  return (
    <div className="w-full mt-0">
      <HomepageHero />
      <ServicesSnapshot />
      <IndustriesWeServe />
      <CaseStudies />
      <TechnologiesExperience />
      <ArticlesBlock />
      <CallToAction />
    </div>
  );
} 
