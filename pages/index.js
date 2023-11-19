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
        <Header title="Under Construction." />
        <p className="description">
          You can see my other projects. <link rel="stylesheet" href="https://cryptocharity.biz.id" /> Oke
        </p>
      </main>

      <Footer />
    </div>
  );
}
