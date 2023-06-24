import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../Components/layout";

export default function FirstPost() {
    return (
        <Layout>
        <Head>
            <title>Create Nex App</title>
            <link rel="icon" href="/favicon.ico"/>
            {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
        </Head>
        <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
        <h1>First Post</h1>
        <h2>
        <Link href="/">Back to home</Link>
        </h2>
        </Layout>
    );
}