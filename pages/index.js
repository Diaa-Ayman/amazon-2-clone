import Head from "next/head";
import Layout from "../components/Layout";
import ProductFeed from "../components/ProductFeed";
import Banner from "../components/Banner";
import { useDispatch } from "react-redux";
import { getUser } from "../store/auth-slice";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
export default function Home({ products }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        dispatch(getUser(authUser));
      }
    });
  }, [user]);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>amazon-2</title>
      </Head>
      <Layout user={user}>
        <Banner />
        <ProductFeed products={products} />
      </Layout>
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
