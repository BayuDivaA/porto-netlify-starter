import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="UNDER CONSTRUCTION" />
        <p className="description">
          Go to check <a href="https://cryptocharity.biz.id">Crypto Care</a>.
        </p>
      </main>

      <Footer />
    </div>
  );
}
