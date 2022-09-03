import { useRouter } from 'next/router';
import { products } from "../../services/products";
import PageHeader from "../../components/PageHeader";
import ProductDetails from "../../components/ProductDetails";
import Layout from "../../components/Layout";

export default function Product() {
  const router = useRouter();
  const { pid } = router.query;
  const product = products.find(product => product.id == pid);

  return (
    <Layout>
      <PageHeader
        title="Specialized products"
        subTitle="We offer an extensive range of supreme quality products to our customers and commit to safety and timely deliveries."
      />
      {
        product ?
        <ProductDetails product={product} /> :
        <p>No product find, with pid: {pid}</p>
      }
      
    </Layout>
  )
}
