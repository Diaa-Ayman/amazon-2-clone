import Head from "next/head";
import Layout from "../components/Layout";
import ProductFeed from "../components/ProductFeed";
import Footer from "../components/Footer";
export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Layout></Layout>
      <ProductFeed products={products} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
