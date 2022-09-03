import ServiceSection from "../components/ServiceSection";
import PageHeader from "../components/PageHeader";
import AboutSection from "../components/AboutSection";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <PageHeader 
        title = "About US & Company"
        subTitle = "VMG Shutterings."
      />
      <AboutSection />
      <ServiceSection />
    </Layout>
  )
}
