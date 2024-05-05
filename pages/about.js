import ServiceSection from "../components/ServiceSection";
import PageHeader from "../components/PageHeader";
import AboutSection from "../components/AboutSection";
import Layout from "../components/Layout";
import WorkProSection from "../components/WorkProSection";

export default function Home() {
  return (
    <Layout>
      <PageHeader 
        title = "About US & Company"
        subTitle = "Tape Innovations: Redefining Precision and Quality"
      />
      <AboutSection />
      {/* <ServiceSection /> */}
    </Layout>
  )
}
