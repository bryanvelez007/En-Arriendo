import Head from "next/head";

// Import template //
import TemplateLanding from "../components/templates/Template-landing";


export default function Landing() {
    return (
        <>
            <Head>
                {/** <!-- SEO / Home --> */}
                <title>PENDIENTE ESTUDIO SEO</title>
                <meta name="description" content="PENDIENTE ESTUDIO SEO"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="robots" content="index, follow"/>

                {/** <!-- Open Graph / Facebook --> */}
                <meta property="og:title" content="PENDIENTE SEO" key="title"/>
                <meta
                    property="og:description"
                    content="PENDIENTE SEO"
                    key="description"
                />
                <meta
                    property="og:image"
                    content="https://midominio.com/logo200x200.png"
                />
                <meta property="og:url" content="https://midominio.com/"/>
            </Head>

            <main>
                <TemplateLanding/>
            </main>
        </>
    );
}
