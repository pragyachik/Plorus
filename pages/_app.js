import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'
import 'antd/dist/antd.css';
import * as gtag from '../lib/gtag'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', ${gtag.GA_TRACKING_ID});
            `,
          }}
        /> */}
          <Script src={"https://www.googletagmanager.com/gtag/js?id="+`${gtag.GA_TRACKING_ID}`} />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', '${gtag.GA_TRACKING_ID}');
            `}
          </Script>
      </Head>
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp