import Layout from "../components/Layout";
import ServiceSection from "../components/ServiceSection";
import ServiceCarousel from "../components/ServiceCarousel";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <Layout>
      {/* <ServiceCarousel /> */}
      <PageHeader 
        title = "Take the world’s best services for you"
        subTitle = "Strong foundations, for a strong future."
      />
      <ServiceSection />
    </Layout>
  )
}
