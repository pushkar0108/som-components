import Layout from "../components/Layout";
import ServiceSection from "../components/ServiceSection";
import ServiceCarousel from "../components/ServiceCarousel";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <Layout>
      {/* <ServiceCarousel /> */}
      <PageHeader 
        title = "Explore Our Range:"
        subTitle = "Adhesive Tapes, Industrial Tapes, Specialty Tapes, Custom Tapes"
      />
      <ServiceSection />
    </Layout>
  )
}
