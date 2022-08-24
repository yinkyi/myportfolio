import '../styles/globals.css'
import {Fragment} from 'react'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <Fragment>
          <Head>
           <title>YYK Portfolio</title>
           <meta charSet="utf-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> 
          
          </Head> 
          <Component {...pageProps} />
          {/* <Script type="text/javascript" src="/static/js/jquery.min.js" defer></Script>
          <Script type="text/javascript"  src="/static/js/jquery-migrate-3.0.1.min.js"></Script>
          <Script type="text/javascript"  src="/static/js/popper.min.js"></Script>
          <Script type="text/javascript"  src="/static/js/bootstrap.min.js"></Script>
          <Script type="text/javascript"  src="/static/js/jquery.easing.1.3.js"></Script>
          <Script type="text/javascript" src="/static/js/jquery.waypoints.min.js"></Script>
          <Script type="text/javascript"  src="/static/js/jquery.stellar.min.js"></Script>
          <Script type="text/javascript" src="/static/js/owl.carousel.min.js" defer></Script>
          <Script type="text/javascript" src="/static/js/jquery.magnific-popup.min.js"></Script>        
          <Script  type="text/javascript" src="/static/js/jquery.animateNumber.min.js"></Script>
          <Script type="text/javascript" src="/static/js/aos.js"></Script>
          <Script type="text/javascript"  src="/static/js/scrollax.min.js"></Script>
          <Script  src="/static/js/main.js"
          strategy="afterInteractive"></Script>   */}
          <Script src="/static/js/jquery.min.js" 
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/jquery-migrate-3.0.1.min.js"
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/popper.min.js"
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/bootstrap.min.js"
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/jquery.easing.1.3.js"
          strategy="beforeInteractive"></Script>
          <Script src="/static/js/jquery.waypoints.min.js"
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/jquery.stellar.min.js"
          strategy="beforeInteractive"></Script>
          <Script src="/static/js/owl.carousel.min.js"
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/jquery.magnific-popup.min.js"
          strategy="beforeInteractive"></Script>        
          <Script   src="/static/js/aos.js"
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/jquery.animateNumber.min.js"
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/scrollax.min.js"
          strategy="beforeInteractive"></Script>
          <Script  src="/static/js/main.js"
          strategy="afterInteractive"></Script> 
        </Fragment>
}

export default MyApp
