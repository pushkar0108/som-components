import MainSlider from "../components/MainSlider";
import ProjectsCarousel from "../components/ProjectsCarousel";
import ServiceCarousel from "../components/ServiceCarousel";
import SponsorCarousel from "../components/SponsorCarousel";
import TestimonialCarousel from "../components/TestimonialCarousel";
import AboutSection from "../components/AboutSection";
import WorkProSection from "../components/WorkProSection";
import ServiceSection from "../components/ServiceSection";
import CTASection from "../components/CTASection";
import ContentSection from "../components/ContentSection";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <MainSlider />
      <AboutSection />
      {/* <ServiceCarousel /> */}
      <WorkProSection />
      <ProjectsCarousel />
      <CTASection />
      <ContentSection />
      <ServiceSection />
      {/* <TestimonialCarousel /> */}
      {/* <BlogSection /> */}
      {/* <SponsorCarousel /> */}
    </Layout>
  )
}
