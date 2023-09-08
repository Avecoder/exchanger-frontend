import "@/styles/global.css"
import Head from "next/head"


export default function App({ Component, pageProps }) {
    return (
        <>  
            <Head>
                <title>AnoExchange</title>
                <meta
                    name="description"
                    content="Лучшие обменики криптовалюты"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/logo.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
            </Head>     
            <Component {...pageProps} />

        </>
    )
  }