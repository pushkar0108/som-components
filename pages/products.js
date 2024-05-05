import ProductsSection from "../components/ProductsSection";
import PageHeader from "../components/PageHeader";
import AboutSection from "../components/AboutSection";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <PageHeader 
        title = "Specialized products"
        subTitle = "We offer an extensive range of supreme products to our customers and commit to quality and timely deliveries."
      />
      <ProductsSection />
    </Layout>
  )
}
