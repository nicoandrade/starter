import "../styles/globals.css";

import Head from "next/head";

import { DefaultSeo, LogoJsonLd } from "next-seo";
import SEO from "next-seo.config";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </Head>

            <DefaultSeo {...SEO} />
            <LogoJsonLd
                logo={`${process.env.NEXT_PUBLIC_SITE_URL}/avatar.png`}
                url={process.env.NEXT_PUBLIC_SITE_URL}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
